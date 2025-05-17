import { useState } from 'react';
import Link from 'next/link';

export default function PostTask() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ title: '', description: '', reward: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-black p-6">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Post a Task</h1>
          <Link href="/">
            <span className="text-sm text-blue-600 hover:underline cursor-pointer">← Back to Home</span>
          </Link>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Task Title"
              className="w-full border border-gray-300 px-4 py-2 rounded"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              required
            />
            <textarea
              placeholder="Task Description"
              className="w-full border border-gray-300 px-4 py-2 rounded"
              rows="4"
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              required
            />
            <input
              type="number"
              placeholder="Reward (Pi)"
              className="w-full border border-gray-300 px-4 py-2 rounded"
              value={form.reward}
              onChange={(e) => setForm({ ...form, reward: e.target.value })}
              required
            />
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
            >
              Post Task
            </button>
          </form>
        ) : (
          <div className="text-center">
            <h2 className="text-green-600 text-xl font-bold mb-4">✅ Task posted successfully!</h2>
            <p className="text-gray-700">Thank you for contributing to the PiTaska network.</p>
            <Link href="/">
              <span className="mt-6 inline-block text-blue-600 hover:underline cursor-pointer">← Go back home</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
