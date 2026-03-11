import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(req: NextRequest) {
  const { idea } = await req.json();

  if (!idea || typeof idea !== "string" || idea.length < 4) {
    return NextResponse.json(
      { error: "Please describe your project or goal for AI task suggestion." },
      { status: 400 }
    );
  }

  const prompt = `A user described the following goal:\n"${idea.trim()}"\n\nGenerate a list of step-by-step actionable tasks the user should complete to achieve this, no more than 8, in plain text.`;
  try {
    const result = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || "gpt-4o-mini",
        messages: [{ role: "system", content: "You are a helpful project planning assistant." }, { role: "user", content: prompt }],
        max_tokens: 300,
        temperature: 0.5,
      }),
    });
    if (!result.ok) {
      return NextResponse.json(
        { error: "AI service error. Check your OPENAI_API_KEY." },
        { status: 500 }
      );
    }
    const completion = await result.json();
    const text = ((completion?.choices?.[0]?.message?.content as string) || "")
      .replace(/^\s+|\s+$/g, "");

    // Try splitting into tasks: numbered or bulleted
    const tasks = text
      .split(/\n+/)
      .map(line => line.replace(/^\d+\.\s*|^-+\s*/, "").trim())
      .filter(Boolean);

    return NextResponse.json({ tasks });
  } catch (error) {
    return NextResponse.json(
      { error: "Could not contact AI service." },
      { status: 500 }
    );
  }
}