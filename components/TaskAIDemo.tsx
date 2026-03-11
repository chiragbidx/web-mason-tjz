"use client";

import { useState } from "react";

export default function TaskAIDemo() {
  const [idea, setIdea] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleGenerate(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/ai/suggest-tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idea }),
      });
      if (!res.ok) throw new Error("Failed to get suggestions.");
      const data = await res.json();
      setTasks(data.tasks);
    } catch (err: any) {
      setError("Tasklyst AI could not generate suggestions. Please try again or reword your project.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <form onSubmit={handleGenerate} className="flex flex-col gap-4">
        <textarea
          required
          value={idea}
          onChange={e => setIdea(e.target.value)}
          className="border rounded-lg p-3 min-h-[72px] resize-y focus:outline-none focus:ring-2 focus:ring-[#fb7232]"
          placeholder="Describe a project or big goal for Tasklyst AI to break down… (e.g. Plan a team offsite, Ship v2.0...)"
        />
        <button
          type="submit"
          disabled={loading || !idea}
          className="self-end rounded-md bg-[#fb7232] py-2 px-5 text-white text-sm font-semibold shadow hover:bg-[#e06225] transition disabled:bg-orange-200"
        >
          {loading ? "Letting Tasklyst think…" : "AI: Break Down My Goal"}
        </button>
      </form>
      {error && <div className="text-red-600 mt-3">{error}</div>}
      {tasks.length > 0 && !loading && (
        <div className="mt-5">
          <div className="mb-2 font-semibold text-[#fb7232]">AI-generated steps to get started:</div>
          <ul className="space-y-2">
            {tasks.map((task, i) => (
              <li key={i} className="rounded px-3 py-2 bg-[#fff2ea] border border-[#fb7232]/25 text-[#4b1f0a]">
                {task}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}