# FILES.md — Structural & Architectural Index (Next.js App Router Starter)

AI-facing index of the repository as it exists today. Drizzle ORM (PostgreSQL) and auth-ready dependencies are present; routes/auth wiring are not yet added. If something is unclear: **STOP AND ASK**.

---

## 1. High-Level Overview
- Purpose: minimal App Router scaffold for future SaaS UI, now with Drizzle + Postgres base schema.
- Style: file-system routing, server-preferred components.
- Tech: Next.js 16, React 19, TypeScript 5, Tailwind-ready PostCSS, ESLint 9.
- Present: Drizzle schema + initial migration for `users`. Added: `tasks` table and demo CRUD.
- Not present: auth routes/config, API routes, queues, tests.

## 2. Application Entry Points
- `app/layout.tsx`: Root layout; applies globals (Geist fonts removed).
- `app/page.tsx`: Tasklyst landing page (server component, with client demo/AI islands).
- `app/globals.css`: Global styles; imports Tailwind; defines light/dark CSS variables.
- `next.config.ts`: Minimal Next config placeholder.
- `postcss.config.mjs`: PostCSS with `@tailwindcss/postcss`.
- No `middleware.ts`; requests go straight to App Router.

## 3. Modules / Feature Areas
- `app/`: UI shell and routing.
  - `app/api/ai/suggest-tasks/route.ts`: Server Action—OpenAI-powered task breakdown generator.
  - `app/api/demo-tasks/route.ts`: API route—CRUD for Postgres-backed tasks demo.
  - `app/api/demo-tasks/[id]/route.ts`: API route—PATCH/DELETE for demo tasks.
  - `app/api/contact/route.ts`: Receives contact form POST requests and logs messages.
- `components/`: Shared UI; home sections live under `components/home/`. Client-only helpers include:
  - `HeroOrbs` (hero parallax)
  - `AgentActionPanel` (note stub, unused by default)
  - `ErrorReporter`
  - `TaskAIDemo` (AI demo island)
  - `TaskListDemo` (persistent CRUD demo)
  - `ContactForm` (client-side form with validation, calls new contact API).
- `public/`: Static assets (logos/icons).
- `lib/db/`: Drizzle schema and client.
- `drizzle/`: SQL migrations + meta journal.
- Config/tooling: `eslint.config.mjs`, `postcss.config.mjs`, `next.config.ts`, `tsconfig.json`, `drizzle.config.ts`.
- No route groups yet; create when needed.

## 4. Routes (Controllers)
- `/` → `app/page.tsx`
  - Purpose: Tasklyst SaaS landing with hero, AI, demo, contact, and modular SaaS sections.
  - Layout: responsive, centered content up to ~1600px, buttons/menu wrap on small screens; client interactivity islands for AI, CRUD, and contact.
  - API:
    - `/api/ai/suggest-tasks`: POST string, returns task breakdown (array).
    - `/api/demo-tasks`: GET all, POST new; `/api/demo-tasks/[id]`: PATCH/DELETE.
    - `/api/contact`: POST contact form submission.

## 5. Services & Providers
- None. Backend/data helpers live under `lib/`.

## 6. Data Layer
- ORM/DB: Drizzle ORM + PostgreSQL. Schema under `lib/db/`; migrations under `drizzle/`.
  - `lib/db/schema.ts`: Now includes `tasks` table for persistent demo.
  - `drizzle/0001_tasks.sql`: Schema for `tasks`.
  - `drizzle/meta/_journal.json`: Updated for new migration.

## 7. DTOs, Schemas & Validation
- Homegrown for demos; future forms/apis to place Zod/validators in `lib/validation/` or co-located.

## 8. Cross-Cutting Concerns
- Error logging/surface via client/server hooks. Owner info (Chirag Dodiya) in site footer.

## 9. Configuration & Environment
- Required: `OPENAI_API_KEY`, `DATABASE_URL`
- `env.example`: List new variables if needed.
- Others: as per previous state.

## 10. Async & Background Processing
- Queues/workers/schedulers: none.

## 11. Testing Structure
- Not present yet.

## 12. File & Directory Index (additions)
...
  components/
    TaskAIDemo.tsx        # Client AI-powered suggestions
    TaskListDemo.tsx      # Persistent CRUD demo
    ContactForm.tsx       # Contact form with validation/UI
  app/api/ai/suggest-tasks/route.ts    # AI completion server action
  app/api/demo-tasks/route.ts          # Persistent CRUD API
  app/api/demo-tasks/[id]/route.ts     # Task updates/deletes
  app/api/contact/route.ts             # Contact form API
  lib/db/schema.ts        # Now includes tasks table schema
  drizzle/0001_tasks.sql  # Migration file for tasks table
  drizzle/meta/_journal.json   # Migration registered
...

[/full]