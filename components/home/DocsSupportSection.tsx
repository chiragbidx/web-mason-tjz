import { HugeiconsIcon } from "@hugeicons/react";
import { Book02Icon } from "@hugeicons/core-free-icons";

// Section: Documentation links and support tiers
export function DocsSupportSection() {
  return (
    <section
      className="grid gap-6 rounded-2xl border border-[#fb7232]/15 bg-white/80 px-6 py-10 shadow-sm sm:grid-cols-[1.1fr_0.9fr] sm:px-12 animate-section hover-lift"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(255,245,238,0.9) 0%, rgba(255,255,255,0.98) 70%), radial-gradient(circle at 15% 30%, rgba(251,114,50,0.16), transparent 34%)",
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundSize: "100% 100%, 240px 240px",
        backgroundPosition: "center, left -40px top -20px",
      }}
    >
      <div className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#fb7232]">Docs & Support</p>
        <h2 className="flex items-center gap-3 text-3xl font-bold text-[#341404] sm:text-4xl">
          <HugeiconsIcon icon={Book02Icon} size={28} color="#fb7232" strokeWidth={1.6} />
          Everything documented, with humans in the loop
        </h2>
        <p className="text-base text-[#6a3515]">Developer-friendly guides plus enterprise-grade support channels. Handoffs stay unblocked.</p>
        <div className="grid gap-3 sm:grid-cols-2">
          {[{ label: "API reference", link: "https://nextjs.org/docs" }, { label: "Runbooks", link: "https://vercel.com/changelog" }, { label: "Status page", link: "https://status.example.com" }, { label: "Implementation guide", link: "https://vercel.com/templates" }].map((item, i) => (
            <a
              key={item.label}
              href={item.link}
              className="flex items-center justify-between rounded-lg border border-[#fb7232]/20 bg-white/80 px-4 py-3 text-sm font-semibold text-[#c75829] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md animate-fade-slide"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <span>{item.label}</span>
              <span className="text-xs text-[#5a2a12]">Open</span>
            </a>
          ))}
        </div>
      </div>
      <div className="space-y-4 rounded-xl border border-[#fb7232]/15 bg-gradient-to-br from-white via-[#fff5ee] to-white p-6 shadow-sm hover-lift">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-[#5a2a12]">Support tiers</p>
          <span className="rounded-full bg-[#ffe8da] px-3 py-1 text-xs font-semibold text-[#c75829]">24/7 optional</span>
        </div>
        <ul className="space-y-2 text-sm text-[#5a2a12]">
          <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-[#fb7232]" /> Slack connect with 2-hour response on high severity</li>
          <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-[#fb7232]" /> Shared runbook for incident comms and on-call rotations</li>
          <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-[#fb7232]" /> Quarterly architecture reviews with our solutions engineers</li>
          <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-[#fb7232]" /> Dedicated sandbox and feature flag rollout plan</li>
        </ul>
        <a
          href="mailto:support@example.com"
          className="inline-flex w-full items-center justify-center rounded-lg bg-[#fb7232] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#e06225] hover:shadow-md"
        >
          Contact support
        </a>
      </div>
    </section>
  );
}
