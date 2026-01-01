export function ConversionCTA() {
  return (
    <section className="relative py-20 bg-slate-900 text-white overflow-hidden">
      
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 opacity-70" />

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        
        {/* Trust Badge */}
        <span className="inline-block mb-4 px-4 py-1 text-xs font-semibold tracking-wide uppercase bg-white/10 rounded-full">
          Trusted by insurers & enterprises
        </span>

        {/* Headline */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          Improve Claims Outcomes. Reduce Risk Exposure.
        </h2>

        {/* Supporting copy */}
        <p className="max-w-3xl mx-auto text-slate-300 text-lg mb-10">
          Our claims and risk specialists help insurers achieve faster settlements,
          stronger compliance, and higher policyholder satisfaction — without
          increasing operational cost.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-10 py-4 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-100 transition">
            Schedule a Consultation
          </button>

          <button className="px-10 py-4 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition">
            Talk to a Claims Expert
          </button>
        </div>

        {/* Reassurance */}
        <p className="mt-8 text-sm text-slate-400">
          No obligation • Confidential discussion • Industry specialists
        </p>
      </div>
    </section>
  );
}
