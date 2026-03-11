import { HugeiconsIcon } from "@hugeicons/react";
import { CreditCardIcon } from "@hugeicons/core-free-icons";

// Section: Pricing plans grid with CTAs
export function PricingSection() {
  return (
    <section
      className="rounded-2xl border border-[#fb7232]/15 bg-white/80 px-6 py-10 shadow-sm sm:px-12 animate-section hover-lift"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(255,245,238,0.82) 0%, rgba(255,255,255,0.97) 60%), radial-gradient(circle at 18% 18%, rgba(251,114,50,0.14), transparent 36%), radial-gradient(circle at 82% 82%, rgba(199,88,41,0.12), transparent 34%)",
        backgroundRepeat: "no-repeat, no-repeat, no-repeat",
      }}
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#fb7232]">Pricing</p>
          <h2 className="flex items-center gap-3 text-3xl font-bold text-[#341404] sm:text-4xl">
            <HugeiconsIcon icon={CreditCardIcon} size={28} color="#fb7232" strokeWidth={1.6} />
            Predictable plans that scale with you
          </h2>
          <p className="text-base text-[#6a3515]">Start free, upgrade when you need enterprise controls. Usage counters and Stripe webhook stubs included.</p>
        </div>
        <div className="flex gap-3 sm:gap-4">
          <a href="mailto:sales@example.com" className="rounded-lg bg-[#fb7232] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#e06225] hover:shadow-md">
            Talk to sales
          </a>
          <a href="#legal" className="rounded-lg border border-[#fb7232]/30 bg-white px-4 py-2 text-sm font-semibold text-[#c75829] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            Review terms
          </a>
        </div>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {[
          { name: "Starter", price: "$0", desc: "Perfect for prototypes and internal tools.", features: ["Up to 3 teammates", "Email support", "Basic auth and RBAC"], cta: "Launch now" },
          { name: "Growth", price: "$49", desc: "For product teams shipping to customers.", features: ["Unlimited teammates", "Webhook-ready billing", "Audit log events"], cta: "Start trial" },
          { name: "Enterprise", price: "Custom", desc: "Security reviews, SSO, and DPAs included.", features: ["SAML/SCIM-ready", "Priority support", "Dedicated sandbox"], cta: "Book a demo" },
        ].map((plan) => (
          <div key={plan.name} className="flex flex-col gap-4 rounded-xl border border-[#fb7232]/15 bg-white p-5 shadow-sm">
            <div className="space-y-1">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#c75829]">{plan.name}</p>
              <p className="text-2xl font-black text-[#341404]">{plan.price}</p>
              <p className="text-sm text-[#5a2a12]">{plan.desc}</p>
            </div>
            <ul className="space-y-2 text-sm text-[#5a2a12]">
              {plan.features.map((feat) => (
                <li key={feat} className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-[#fb7232]" /> {feat}</li>
              ))}
            </ul>
            <a
              href="https://vercel.com/new"
              className="mt-auto inline-flex items-center justify-center rounded-lg border border-[#fb7232]/30 bg-[#ffe8da] px-3 py-2 text-sm font-semibold text-[#c75829] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              {plan.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
