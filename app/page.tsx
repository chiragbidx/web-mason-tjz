// Server Component: Tasklyst SaaS homepage with AI, persistent demo, and production-ready content.
import { HeroSection } from "../components/home/HeroSection";
import { LogosMarqueeSection } from "../components/home/LogosMarqueeSection";
import { FeaturesSection } from "../components/home/FeaturesSection";
import { MetricsSection } from "../components/home/MetricsSection";
import { PricingSection } from "../components/home/PricingSection";
import { SecuritySection } from "../components/home/SecuritySection";
import { DocsSupportSection } from "../components/home/DocsSupportSection";
import { LegalSection } from "../components/home/LegalSection";
import { CtaSection } from "../components/home/CtaSection";
import TaskAIDemo from "../components/TaskAIDemo";
import TaskListDemo from "../components/TaskListDemo";
import ContactForm from "../components/ContactForm";

export const metadata = {
  title: "Tasklyst – Organize, Track, and Get Work Done",
  description:
    "Tasklyst is your simple, scalable task management SaaS. AI-powered suggestions. Persistent lists. Team ready. Built for launch.",
  openGraph: {
    title: "Tasklyst – Organize, Track, and Get Work Done",
    description:
      "Tasklyst is your simple, scalable task management SaaS. AI-powered suggestions. Persistent lists. Team ready. Built for launch.",
    url: "https://tasklyst.com",
    siteName: "Tasklyst",
    images: [
      // You can replace with a real OG image if uploaded
      {
        url: "https://tasklyst.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tasklyst SaaS Landing",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 via-white to-[#ffe6d8] text-zinc-900">
      <main className="flex min-h-screen w-full flex-col gap-12 px-6 py-12 sm:px-10 lg:px-16 lg:max-w-[1600px] lg:mx-auto">
        {/* Header: Tasklyst brand, nav actions */}
        <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-full border border-[#fb7232]/30 bg-white px-5 py-2 shadow-sm">
              <span className="text-2xl font-black tracking-tight text-[#fb7232]">Tasklyst</span>
            </div>
            <p className="text-sm font-medium text-[#c75829] sm:text-base">
              SaaS for teams & individuals to organize, assign, and get more done.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 sm:justify-end w-full sm:w-auto">
            <a
              href="#ai-demo"
              className="w-full sm:w-auto text-center rounded-full border border-[#fb7232]/30 bg-white px-4 py-2 text-sm font-semibold text-[#c75829] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              Try AI
            </a>
            <a
              href="#demo"
              className="w-full sm:w-auto text-center rounded-full bg-[#fb7232] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#e06225] hover:shadow-md"
            >
              Live Demo
            </a>
          </div>
        </header>

        <HeroSection />
        <LogosMarqueeSection />
        <FeaturesSection />

        {/* AI-powered demo: generates a task breakdown for your next project */}
        <section id="ai-demo" className="rounded-2xl border border-[#fb7232]/20 bg-white/80 shadow-sm animate-section hover-lift p-8 mt-4">
          <h2 className="text-2xl font-bold text-[#3f1b08] mb-3">AI-Powered Task Suggestions</h2>
          <p className="mb-4 text-[#7a391b]">Describe your project or goal—Tasklyst AI will break it down into actionable steps in seconds.</p>
          <TaskAIDemo />
        </section>

        {/* Real task list demo with Postgres persistence */}
        <section id="demo" className="rounded-2xl border border-[#fb7232]/20 bg-white/80 shadow-sm animate-section hover-lift p-8 mt-4">
          <h2 className="text-2xl font-bold text-[#3f1b08] mb-3">Try Tasklyst—Demo Taskboard</h2>
          <p className="mb-4 text-[#7a391b]">Add, edit, complete, and organize tasks. Fully persistent. Perfect for planning, solo, or with a teammate!</p>
          <TaskListDemo />
        </section>

        <MetricsSection />
        <PricingSection />
        <SecuritySection />
        <DocsSupportSection />
        <LegalSection />
        <CtaSection />

        {/* Contact/owner info */}
        <section id="contact" className="rounded-xl border border-[#fb7232]/15 bg-white/70 p-8 mt-10 shadow-md">
          <h2 className="text-xl font-bold text-[#c75829] mb-2">Contact Us</h2>
          <p className="mb-3 text-[#7a391b]">
            Questions or partnership ideas? Reach out to us anytime!
          </p>
          <ContactForm />
        </section>
      </main>
      <footer className="mt-12 flex flex-col items-center gap-2 py-6 text-xs text-[#6a3515] border-t border-[#fb7232]/15 bg-[#fff5ee]">
        <span>
          &copy; {new Date().getFullYear()} Tasklyst • Built by Chirag Dodiya &lt;chirag@bidx.ai&gt; • All rights reserved.
        </span>
      </footer>
      {/* Animations as before */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0px); }
        }
        @keyframes fade-slide {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-section {
          animation: fade-slide 0.7s ease both;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float 14s ease-in-out infinite;
        }
        .animate-fade-slide {
          animation: fade-slide 0.6s ease both;
        }
        .animate-marquee {
          width: max-content;
          animation: marquee 24s linear infinite;
        }
        .hover-lift {
          transition: transform 300ms ease, box-shadow 300ms ease;
        }
        .hover-lift:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px -24px rgba(251, 114, 50, 0.45);
        }
      `}</style>
    </div>
  );
}