import { NextRequest, NextResponse } from "next/server";
import { db } from "../../../lib/db/client";
import { tasks } from "../../../lib/db/schema";
import { eq } from "drizzle-orm";

export async function GET() {
  try {
    const all = await db.select().from(tasks).orderBy(tasks.createdAt);
    return NextResponse.json({ tasks: all });
  } catch (err) {
    return NextResponse.json({ error: "Failed to fetch tasks." }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { title, description, dueDate } = await req.json();
    if (!title || typeof title !== "string" || title.length < 2) {
      return NextResponse.json(
        { error: "Task title is required." },
        { status: 400 }
      );
    }
    const res = await db
      .insert(tasks)
      .values({
        title: title.trim(),
        description: description?.trim() || "",
        dueDate: dueDate ? new Date(dueDate) : null,
        status: "todo",
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
      .returning();
    return NextResponse.json({ task: res[0] });
  } catch (err) {
    return NextResponse.json({ error: "Failed to add task." }, { status: 500 });
  }
}