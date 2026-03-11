"use client";
import { useEffect, useState } from "react";

export type Task = {
  id: string;
  title: string;
  description?: string | null;
  status?: string;
  dueDate?: string | null;
  assignedTo?: string | null;
  completed?: boolean;
};

function formatDate(d: string | null | undefined) {
  if (!d) return "";
  return new Date(d).toLocaleDateString();
}

export default function TaskListDemo() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Form states
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [due, setDue] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetchTasks();
  }, []);

  async function fetchTasks() {
    setLoading(true);
    setError(null);
    try {
      const r = await fetch("/api/demo-tasks");
      if (!r.ok) throw new Error("Failed to load tasks.");
      const data = await r.json();
      setTasks(data.tasks);
    } catch (e) {
      setError("Couldn't load tasks. Please refresh and try again.");
    } finally {
      setLoading(false);
    }
  }

  async function addTask(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const r = await fetch("/api/demo-tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description: desc, dueDate: due }),
      });
      if (!r.ok) throw new Error();
      setTitle("");
      setDesc("");
      setDue("");
      await fetchTasks();
    } catch {
      setError("Could not add your task. Try again.");
    } finally {
      setSubmitting(false);
    }
  }

  async function updateTask(id: string, updates: Partial<Task>) {
    try {
      const r = await fetch(`/api/demo-tasks/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updates),
      });
      if (!r.ok) throw new Error();
      await fetchTasks();
    } catch {
      setError("Update failed. Please retry.");
    }
  }

  async function deleteTask(id: string) {
    try {
      const r = await fetch(`/api/demo-tasks/${id}`, { method: "DELETE" });
      if (!r.ok) throw new Error();
      await fetchTasks();
    } catch {
      setError("Delete action failed.");
    }
  }

  return (
    <section>
      <form
        onSubmit={addTask}
        className="flex flex-col gap-3 mb-6 rounded-lg border border-[#fb7232]/20 p-4 bg-white/60 shadow"
      >
        <input
          type="text"
          required
          placeholder="What's next? (Add a task title)"
          value={title}
          minLength={2}
          maxLength={100}
          className="rounded border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#fb7232]"
          onChange={e => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Details (optional)"
          value={desc}
          onChange={e => setDesc(e.target.value)}
          className="rounded border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#fb7232]"
        />
        <input
          type="date"
          value={due}
          onChange={e => setDue(e.target.value)}
          className="rounded border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#fb7232]"
        />
        <button
          type="submit"
          disabled={submitting || !title}
          className="rounded bg-[#fb7232] py-2 px-5 text-white font-semibold shadow hover:bg-[#e06225] transition disabled:bg-orange-200 self-end"
        >
          {submitting ? "Adding your task…" : "Add to Tasklyst"}
        </button>
        {error && <div className="text-red-700">{error}</div>}
      </form>

      {loading ? (
        <div className="text-[#c75829]">Loading your Tasklyst…</div>
      ) : tasks.length === 0 ? (
        <div className="text-[#7a391b]">No tasks yet! Start organizing your day with Tasklyst.</div>
      ) : (
        <ul className="space-y-3">
          {tasks.map(task => (
            <li
              key={task.id}
              className={`rounded-lg flex flex-col md:flex-row items-start md:items-center gap-2 p-3 border ${
                task.completed
                  ? "bg-green-50 border-green-300 line-through text-green-900"
                  : "bg-[#fff5ee] border-[#fb7232]/15"
              }`}
            >
              <div className="flex-1">
                <div className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    checked={!!task.completed}
                    onChange={() =>
                      updateTask(task.id, { completed: !task.completed })
                    }
                    className="accent-[#fb7232] h-4 w-4"
                  />
                  <span className="font-semibold">{task.title}</span>
                  {task.dueDate && (
                    <span className="ml-2 px-2 py-0.5 rounded bg-orange-100 text-xs">
                      {formatDate(task.dueDate)}
                    </span>
                  )}
                </div>
                {task.description && (
                  <div className="text-sm text-[#7a391b]">{task.description}</div>
                )}
                {task.assignedTo && (
                  <div className="text-xs text-[#c75829] mt-1">
                    Assigned to: {task.assignedTo}
                  </div>
                )}
              </div>
              <div className="flex gap-2 self-end md:self-center">
                <button
                  className="rounded px-3 py-1 text-xs font-semibold bg-[#e06225] text-white hover:bg-[#fb7232] transition"
                  onClick={() =>
                    updateTask(task.id, {
                      // Toggle status between done and todo
                      status: task.completed ? "todo" : "done",
                      completed: !task.completed,
                    })
                  }
                >
                  {task.completed ? "Mark as incomplete" : "Mark as done"}
                </button>
                <button
                  className="rounded px-3 py-1 text-xs bg-red-100 text-red-600 hover:bg-red-200 transition"
                  onClick={() => deleteTask(task.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}