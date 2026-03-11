import { NextRequest, NextResponse } from "next/server";
import { db } from "../../../../lib/db/client";
import { tasks } from "../../../../lib/db/schema";
import { eq } from "drizzle-orm";

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { title, description, dueDate, status, completed } = await req.json();
    const id = params.id;
    if (!id) {
      return NextResponse.json({ error: "Missing task ID." }, { status: 400 });
    }

    const updates: any = {};
    if (title !== undefined) updates.title = title;
    if (description !== undefined) updates.description = description;
    if (dueDate !== undefined) updates.dueDate = dueDate ? new Date(dueDate) : null;
    if (status !== undefined) updates.status = status;
    if (completed !== undefined) updates.completed = completed;
    updates.updatedAt = new Date();

    const result = await db
      .update(tasks)
      .set(updates)
      .where(eq(tasks.id, id))
      .returning();

    if (!result.length) {
      return NextResponse.json({ error: "Task not found." }, { status: 404 });
    }
    return NextResponse.json({ task: result[0] });
  } catch (err) {
    return NextResponse.json({ error: "Failed to update task." }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = params.id;
    if (!id) {
      return NextResponse.json({ error: "Missing task ID." }, { status: 400 });
    }
    await db.delete(tasks).where(eq(tasks.id, id));
    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: "Failed to delete task." }, { status: 500 });
  }
}