import { HugeiconsIcon } from "@hugeicons/react";
import { Settings01Icon } from "@hugeicons/core-free-icons";

// Section: Product pillars / feature grid
export function FeaturesSection() {
  return (
    <section
      id="features"
      className="grid gap-8 rounded-2xl border border-[#fb7232]/15 bg-white/80 px-6 py-10 shadow-sm sm:px-12 animate-section hover-lift"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(255,245,238,0.8) 0%, rgba(255,255,255,0.96) 60%), radial-gradient(circle at 20% 10%, rgba(251,114,50,0.16), transparent 34%)",
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundSize: "100% 100%, 260px 260px",
        backgroundPosition: "center, left -40px top -20px",
      }}
    >
      <div className="space-y-3 max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#fb7232]">Product pillars</p>
        <h2 className="flex items-center gap-3 text-3xl font-bold text-[#341404] sm:text-4xl">
          <HugeiconsIcon icon={Settings01Icon} size={28} color="#fb7232" strokeWidth={1.6} />
          Enterprise-ready from day one
        </h2>
        <p className="text-base text-[#6a3515]">Opinionated defaults plus the guardrails you need for SOC2, GDPR, and scale.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {[
          {
            title: "Security & Compliance",
            body: "Role-based access, audit logging hooks, env management, and policy-first routing ready for SOC2 review.",
          },
          {
            title: "Data & Observability",
            body: "Telemetry-friendly logging, tracing placeholders, and ship-ready health endpoints for SRE handoff.",
          },
          {
            title: "Multi-tenant Friendly",
            body: "Patterns for org/user separation, billing ids, and per-tenant feature flags without rewriting core logic.",
          },
          {
            title: "Docs & Runbooks",
            body: "Starter guides, API reference scaffolding, and incident playbooks so support stays unblocked.",
          },
          {
            title: "Performance",
            body: "Edge-ready routing, image optimization, and caching hints that match production-grade SLAs.",
          },
          {
            title: "Team Workflow",
            body: "Prettier, ESLint, CI templates, and PR check recipes so contributors stay consistent.",
          },
        ].map((item, idx) => (
          <div
            key={item.title}
            className="space-y-3 rounded-xl border border-[#fb7232]/15 bg-white/80 p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md animate-fade-slide"
            style={{ animationDelay: `${idx * 0.08}s` }}
          >
            <div className="inline-flex items-center rounded-full bg-[#ffe8da] px-3 py-1 text-xs font-semibold text-[#c75829]">
              {item.title}
            </div>
            <p className="text-sm text-[#5a2a12]">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
