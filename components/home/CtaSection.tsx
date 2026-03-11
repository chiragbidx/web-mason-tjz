// Section: Final CTA with quick resource links
export function CtaSection() {
  return (
    <section
      id="cta"
      className="rounded-2xl border border-[#fb7232]/15 bg-gradient-to-br from-white via-[#fff5ee] to-white px-6 py-12 text-[#33170a] shadow-sm sm:px-12 animate-section hover-lift"
    >
      <div className="grid gap-10 sm:grid-cols-[1.2fr_1fr] sm:items-center">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#fb7232]">Panda starter</p>
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl">Stay lightweight. Launch confidently.</h2>
          <p className="text-base text-[#6a3515]">
            A calm base with generous spacing, clear typography, and production-friendly defaults so you can focus on your product.
          </p>
        </div>

        <div className="grid gap-4 rounded-xl border border-[#fb7232]/20 bg-white/80 p-6 text-sm shadow-sm sm:grid-cols-2">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#c75829]">Product</p>
            <a className="block text-[#5a2a12] transition hover:text-[#fb7232]" href="https://nextjs.org/docs">
              Docs
            </a>
            <a className="block text-[#5a2a12] transition hover:text-[#fb7232]" href="#features">
              Features
            </a>
            <a className="block text-[#5a2a12] transition hover:text-[#fb7232]" href="https://vercel.com/templates">
              Templates
            </a>
          </div>
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#c75829]">Resources</p>
            <a className="block text-[#5a2a12] transition hover:text-[#fb7232]" href="https://vercel.com/changelog">
              Changelog
            </a>
            <a className="block text-[#5a2a12] transition hover:text-[#fb7232]" href="https://github.com/">
              GitHub
            </a>
            <a className="block text-[#5a2a12] transition hover:text-[#fb7232]" href="mailto:hello@example.com">
              Support
            </a>
          </div>
        </div>
      </div>
      <div className="mt-10 flex justify-center border-t border-[#fb7232]/15 pt-6 text-center text-xs text-[#6a3515]">
        <span>Built with the Panda starter • MIT licensed • Ready for your next launch</span>
      </div>
    </section>
  );
}
