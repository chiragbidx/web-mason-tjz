"use client";
import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setSent(false);
    setError("");

    try {
      const r = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });
      if (!r.ok) {
        const data = await r.json();
        throw new Error(data.error || "Error sending message");
      }
      setSent(true);
      setName("");
      setEmail("");
      setMessage("");
    } catch (err: any) {
      setError(err.message || "Error sending message");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 max-w-xl"
    >
      <label className="font-semibold">
        Name
        <input
          className="mt-1 block w-full rounded border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#fb7232]"
          type="text"
          required
          value={name}
          minLength={2}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <label className="font-semibold">
        Email
        <input
          className="mt-1 block w-full rounded border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#fb7232]"
          type="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </label>
      <label className="font-semibold">
        Message
        <textarea
          className="mt-1 block w-full rounded border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#fb7232]"
          required
          value={message}
          minLength={10}
          onChange={e => setMessage(e.target.value)}
        />
      </label>
      <button
        className="rounded bg-[#fb7232] py-2 px-5 text-white font-semibold shadow hover:bg-[#e06225] transition disabled:bg-orange-200 self-end"
        type="submit"
        disabled={loading || !name || !email || !message}
      >
        {loading ? "Sending…" : "Send"}
      </button>
      {error && <div className="text-red-700">{error}</div>}
      {sent && !error && (
        <div className="text-green-700 font-medium">Thank you! Your message was sent.</div>
      )}
    </form>
  );
}