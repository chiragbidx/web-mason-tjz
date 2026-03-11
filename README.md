# Tasklyst SaaS Starter — Operational Guide

This repository provides a production-grade starting point for a Next.js 16 (App Router) SaaS, **Tasklyst**, built with React 19, TypeScript, Tailwind, Drizzle ORM + PostgreSQL. Ready-to-ship contact, persistent task demo, and OpenAI-powered suggestions included. Use this as your operational reference. If anything is unclear: **STOP AND ASK**.

---

## 1. Current Scope
- Purpose: Live SaaS scaffold for Tasklyst—AI-powered, persistent, and contact-ready.
- Data: Drizzle configured for PostgreSQL; `users` + `tasks` models. `tasks` table enables persistent CRUD demo.
- AI: OpenAI integration (default: `gpt-4o-mini`; configurable by `OPENAI_MODEL`).
- Env vars: See `env.example`. Add your `OPENAI_API_KEY`.
- Landing: Brand (“Tasklyst”), sections (hero, AI demo, demo taskboard, contact, etc.). Footer credits owner Chirag Dodiya.

## First Feature Mode
- AI-powered project breakdown demo: `/api/ai/suggest-tasks`, live on landing.
- Persistent CRUD "taskboard": `/api/demo-tasks`, `/api/demo-tasks/[id]`; UI in `TaskListDemo`.
- Contact form: POST `/api/contact`, sends to Chirag (logs).
- Brand, visuals, and SEO: full Tasklyst rebrand on homepage (`app/page.tsx`).

## 2. Stack, Project Structure
- Next.js 16, React 19, TypeScript 5, Tailwind/PostCSS.
- Drizzle + Postgres; persistent DB wiring.
- API routes: see `app/api/ai/suggest-tasks/`, `app/api/demo-tasks/`, `app/api/contact/`.
- Modular landing sections in `components/home/`; AI/CRUD/contact islands live in `components/`.

## 3. Migration & Data Layer
```
lib/db/schema.ts         # users + tasks tables
drizzle/0001_tasks.sql   # migration for tasks table
drizzle/meta/_journal.json # applied SQLs
```
- Run `npm run db:migrate` to apply
- All changes journaled in meta JSON.

## 4. Env/Secrets
- Requires: `OPENAI_API_KEY`, `DATABASE_URL`
- Uses owner: Chirag Dodiya &lt;chirag@bidx.ai&gt;

## 5. Key Routes & UI
- `/` — main landing: hero, AI demo, persistent demo, contact (footer credits owner).
- `/api/ai/suggest-tasks` — AI-powered suggestion endpoint.
- `/api/demo-tasks`, `/api/demo-tasks/[id]` — CRUD for persistent demo.
- `/api/contact` — receive/send contact messages.

## 6. Deployment
- Vercel-ready; Drizzle with Postgres.
- No auth yet (future).
- Defaults still aligned with First Feature Rule.

## 7. Contact & Owner
- Page and contact form send/credit: Chirag Dodiya, chirag@bidx.ai

---

Ship new features by extending with new components/api as above. Keep docs, FILES.md, and schema current.