CREATE TABLE IF NOT EXISTS "tasks" (
  "id" text PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  "title" text NOT NULL,
  "description" text,
  "status" text NOT NULL DEFAULT 'todo',
  "due_date" timestamp with time zone,
  "assigned_to" text,
  "created_at" timestamp with time zone NOT NULL DEFAULT now(),
  "updated_at" timestamp with time zone NOT NULL DEFAULT now(),
  "completed" boolean NOT NULL DEFAULT false
);