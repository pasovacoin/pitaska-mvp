import Link from 'next/link';

export default function Tasks() {
  const mockTasks = [
    {
      title: 'Design a logo for a Pi-based app',
      description: 'Need a clean and modern logo, preferably SVG format.',
      reward: 15,
    },
    {
      title: 'Translate product description to French',
      description: 'Translate a short PiTaska product page. ~300 words.',
      reward: 8,
    },
    {
      title: 'Write a Twitter thread about PiTaska',
      description: 'Create a 6–10 tweet thread introducing our MVP.',
      reward: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black p-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Available Tasks</h1>
          <Link href="/">
            <span className="text-sm text-blue-600 hover:underline cursor-pointer">← Back to Home</span>
          </Link>
        </div>

        {mockTasks.map((task, index) => (
          <div key={index} className="border border-gray-300 rounded-lg p-4 mb-4">
            <h2 className="text-lg font-semibold mb-1">{task.title}</h2>
            <p className="text-sm text-gray-600 mb-2">{task.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-yellow-600 font-bold">{task.reward} Pi</span>
              <button className="bg-black text-white px-4 py-1 rounded hover:bg-gray-800 text-sm transition">
                Claim Task
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
