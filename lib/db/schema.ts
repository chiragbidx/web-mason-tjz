import { pgTable, text, timestamp, boolean } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

export const users = pgTable("users", {
  id: text("id")
    .notNull()
    .default(sql`gen_random_uuid()`)
    .primaryKey(),
  email: text("email").notNull().unique(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  passwordHash: text("password_hash").notNull(),
  emailVerified: timestamp("email_verified", { withTimezone: true }),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

// New: Tasks table for persistent demo
export const tasks = pgTable("tasks", {
  id: text("id")
    .notNull()
    .default(sql`gen_random_uuid()`)
    .primaryKey(),
  title: text("title").notNull(),
  description: text("description"),
  status: text("status").notNull().default("todo"), // todo, in_progress, done
  dueDate: timestamp("due_date", { withTimezone: true }),
  assignedTo: text("assigned_to"), // email or name string
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  completed: boolean("completed").notNull().default(false),
});