import { HugeiconsIcon } from "@hugeicons/react";
import { Chart01Icon } from "@hugeicons/core-free-icons";

// Section: Metrics and architecture proof points
export function MetricsSection() {
  return (
    <section
      className="grid gap-6 rounded-2xl border border-[#fb7232]/15 bg-gradient-to-br from-white via-[#fff5ee] to-white px-6 py-10 shadow-sm sm:grid-cols-[1.1fr_0.9fr] sm:px-12 animate-section hover-lift"
      style={{
        backgroundImage:
          "linear-gradient(145deg, rgba(251,114,50,0.12), rgba(255,245,238,0.85)), radial-gradient(circle at 90% 20%, rgba(251,114,50,0.18), transparent 45%)",
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundSize: "100% 100%, 240px 240px",
        backgroundPosition: "center, right -60px top -40px",
      }}
    >
      <div className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#fb7232]">Operational readiness</p>
        <h2 className="flex items-center gap-3 text-3xl font-bold text-[#341404] sm:text-4xl">
          <HugeiconsIcon icon={Chart01Icon} size={28} color="#fb7232" strokeWidth={1.6} />
          Confident handoffs to security, finance, and ops
        </h2>
        <p className="text-base text-[#6a3515]">We bundle the checklists real teams ask for: logging, billing hooks, runbooks, and DPA-friendly templates.</p>
        <div className="grid gap-3 sm:grid-cols-2">
          {[{ label: "Minutes to deploy", value: "6" }, { label: "Coverage on lint/tests", value: "98%" }, { label: "Starter playbooks", value: "12" }, { label: "Prebuilt policies", value: "9" }].map((stat, i) => (
            <div
              key={stat.label}
              className="rounded-xl border border-[#fb7232]/15 bg-white/80 p-4 shadow-sm animate-float"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <p className="text-3xl font-black text-[#fb7232]">{stat.value}</p>
              <p className="text-sm font-semibold text-[#5a2a12]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-4 rounded-xl border border-[#fb7232]/15 bg-white/80 p-6 shadow-sm">
        <p className="text-sm font-semibold text-[#c75829]">Architecture snapshot</p>
        <ul className="space-y-3 text-sm text-[#5a2a12]">
          <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-[#fb7232]" /> Next.js App Router with API routes for secure server actions</li>
          <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-[#fb7232]" /> Drizzle ORM templates with migrations and seed script ready</li>
          <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-[#fb7232]" /> Auth patterns ready for Bring-Your-Own provider (JWT/OAuth/SAML placeholder)</li>
          <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-[#fb7232]" /> Observability hooks: request logging, structured events, and error boundary demos</li>
          <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-[#fb7232]" /> Billing-ready: plan model, usage counters, and webhooks slot for Stripe</li>
        </ul>
      </div>
    </section>
  );
}
