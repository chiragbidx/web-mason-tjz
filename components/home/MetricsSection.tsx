import { HugeiconsIcon } from "@hugeicons/react";
import { Chart01Icon } from "@hugeicons/core-free-icons";

// Section: Metrics and Tasklyst trust/adoption stats
export function MetricsSection() {
  // Placeholder stats—update with real data when available!
  const stats = [
    { label: "Tasks completed", value: "120k+" },
    { label: "Happy users", value: "4,500+" },
    { label: "Avg. time saved/team", value: "7h/wk" },
    { label: "Teams worldwide", value: "600+" }
  ];
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
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#fb7232]">Proven impact</p>
        <h2 className="flex items-center gap-3 text-3xl font-bold text-[#341404] sm:text-4xl">
          <HugeiconsIcon icon={Chart01Icon} size={28} color="#fb7232" strokeWidth={1.6} />
          Built for results, trusted by teams worldwide
        </h2>
        <p className="text-base text-[#6a3515]">
          Tasklyst empowers users and organizations to save time, hit goals, and collaborate with confidence.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {stats.map((stat, i) => (
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
        <p className="text-sm font-semibold text-[#c75829]">Tasklyst delivers:</p>
        <ul className="space-y-3 text-sm text-[#5a2a12]">
          <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-[#fb7232]" /> Robust uptime and lightning-fast sync, even for big teams</li>
          <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-[#fb7232]" /> Time-saving templates and automated reminders</li>
          <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-[#fb7232]" /> Enterprise-grade privacy, security, and user control</li>
          <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-[#fb7232]" /> Fast, friendly support from our core team</li>
        </ul>
      </div>
    </section>
  );
}