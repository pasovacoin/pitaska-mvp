import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <header className="flex items-center justify-between p-6 border-b border-gray-200">
        <div className="text-2xl font-bold flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
            <span className="text-white text-xl">✓</span>
          </div>
          <span>PiTaska</span>
        </div>
        <div className="space-x-4">
          <Link href="/post-task">
            <button className="bg-yellow-400 text-black font-medium px-4 py-2 rounded hover:bg-yellow-500 transition">
              Post a Task
            </button>
          </Link>
          <Link href="/tasks">
            <button className="border border-black px-4 py-2 rounded hover:bg-black hover:text-white transition">
              Start Earning
            </button>
          </Link>
        </div>
      </header>

      <main className="text-center px-4 mt-20">
        <h1 className="text-4xl font-bold mb-4">Hire or Earn — Powered by Pi</h1>
        <p className="text-lg text-gray-700 max-w-xl mx-auto mb-6">
          PiTaska is a decentralized task platform where Pioneers can post gigs, complete tasks, and earn Pi — instantly and globally.
        </p>
        <div className="inline-block mt-4 bg-yellow-400 text-black font-medium px-5 py-2 rounded-full">
          Pi Mainnet Live · 47M+ Users · Real Work
        </div>
        <div className="mt-12 text-sm text-gray-500">Powered by Pi Network · Built by the Pitaska Team</div>
      </main>
    </div>
  );
}
