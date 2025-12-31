"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Whopg() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 700 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const spotlightWebkitMask = useTransform(
    [smoothX, smoothY],
    ([x, y]) => `radial-gradient(400px circle at ${x}px ${y}px, black 0%, transparent 100%)`
  );

  return (
    <main className="relative overflow-hidden bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 min-h-screen">
      
      {/* 1. INTERACTIVE MESH GRID BACKGROUND */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div 
          style={{ WebkitMaskImage: spotlightWebkitMask, maskImage: spotlightWebkitMask }}
          className="absolute inset-0 opacity-50 dark:opacity-80"
        >
          <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
        </motion.div>
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="relative z-10">
        
        {/* HERO SECTION */}
        <section className="relative h-[85vh] flex flex-col justify-center items-center px-6 overflow-hidden border-b border-gray-100 dark:border-gray-900">
          <div className="absolute inset-0 z-[-1] opacity-15 grayscale">
             <img src="https://picsum.photos/id/122/1600/900" alt="Industrial and Personal Landscape" className="w-full h-full object-cover" />
          </div>
          <motion.div variants={fadeUp} initial="hidden" animate="visible" className="text-center max-w-5xl">
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-4">VESTIGO</h1>
            <p className="text-sm font-bold text-gray-400 uppercase tracking-[1em] mb-8">Insurance Reimagined</p>
            <p className="text-xl md:text-3xl text-gray-800 dark:text-gray-200 font-light leading-tight max-w-4xl mx-auto">
              From <span className="font-bold italic">Individual Life</span> to <span className="font-bold italic">Global Industry</span>. 
              We bridge the gap between personal security and corporate resilience.
            </p>
          </motion.div>
        </section>

        {/* SERVICE DUALITY SECTION */}
        <section className="max-w-7xl mx-auto px-6 py-32 border-b border-gray-100 dark:border-gray-900">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Personal Insurance Block */}
            <motion.div whileInView="visible" initial="hidden" viewport={{ once: true }} variants={fadeUp} className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400">01. For Individuals</span>
              <h2 className="text-4xl font-bold tracking-tight">Protecting your <span className="text-gray-400 font-light italic">legacy.</span></h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                We provide comprehensive health, life, and property coverage designed for modern living. Our personal plans are built on the promise of immediate support and long-term financial growth, ensuring your family’s future is never left to chance.
              </p>
              <ul className="space-y-3 font-medium">
                <li>• Bespoke Life & Health Coverage</li>
                <li>• Retirement & Wealth Planning</li>
                <li>• High-Value Asset Protection</li>
              </ul>
            </motion.div>

            {/* Industrial Insurance Block */}
            <motion.div whileInView="visible" initial="hidden" viewport={{ once: true }} variants={fadeUp} className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400">02. For Industries</span>
              <h2 className="text-4xl font-bold tracking-tight">Engineering <span className="text-gray-400 font-light italic">resilience.</span></h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Vestigo is a strategic partner to the world’s most complex sectors. We offer specialized risk transfer solutions for manufacturing, energy, and global logistics, leveraging deep technical expertise to safeguard industrial progress.
              </p>
              <ul className="space-y-3 font-medium">
                <li>• Complex Risk Engineering</li>
                <li>• Supply Chain & Marine Cargo</li>
                <li>• Energy & Renewable Infrastructure</li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* INDUSTRIAL SECTORS MARQUEE (SIMULATED) */}
        <section className="py-20 bg-gray-50/50 dark:bg-gray-900/30 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-center text-xs font-bold uppercase tracking-[0.5em] text-gray-400 mb-12">Sectors We Empower</p>
            <div className="flex flex-wrap justify-center gap-10 opacity-50 grayscale contrast-125">
               <span className="text-2xl font-black italic">CHEMICAL</span>
               <span className="text-2xl font-black italic">AUTOMOTIVE</span>
               <span className="text-2xl font-black italic">AEROSPACE</span>
               <span className="text-2xl font-black italic">PHARMA</span>
               <span className="text-2xl font-black italic">LOGISTICS</span>
               <span className="text-2xl font-black italic">ENERGY</span>
            </div>
          </div>
        </section>

        {/* GLOBAL IMPACT SECTION */}
        <section className="max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl group border border-gray-100 dark:border-gray-800">
             <img src="https://picsum.photos/id/20/1000/1000" alt="Technology and People" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
             <div className="absolute inset-0 bg-white/10 dark:bg-black/20" />
          </div>
          
          <div className="space-y-8">
            <h2 className="text-5xl font-bold tracking-tight leading-tight italic font-light">
              Where technology meets <br /> <span className="font-black text-gray-900 dark:text-white">human trust.</span>
            </h2>
            <p className="text-xl text-gray-500 leading-relaxed font-light">
              We utilize advanced risk-modeling AI to provide industries with predictive safety metrics, while our personal agents provide the empathetic support required during life's most critical moments. 
            </p>
            <div className="grid grid-cols-2 gap-10 pt-10 border-t border-gray-100 dark:border-gray-800">
              {[{ label: "Individual Claims Settled", val: "99.8%" }, { label: "Industrial Assets Insured", val: "$4.5T" }].map((item, i) => (
                <div key={i}>
                  <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2">{item.label}</p>
                  <p className="text-2xl font-bold">{item.val}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA SECTION */}
        <section className="relative py-48 flex justify-center items-center overflow-hidden border-t border-gray-100 dark:border-gray-900">
           <div className="absolute inset-0 z-[-1] grayscale opacity-10 blur-sm">
             <img src="https://picsum.photos/id/445/1600/900" alt="Global Network" className="w-full h-full object-cover" />
          </div>
          <div className="text-center space-y-8 px-6">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">Secure Your Scale</h2>
            <p className="text-gray-500 max-w-xl mx-auto">From the single individual to the global conglomerate, Vestigo provides the certainty required for growth.</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
                <button className="px-12 py-5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold rounded-full hover:scale-105 transition-all">
                    Personal Plans
                </button>
                <button className="px-12 py-5 border border-gray-900 dark:border-white text-gray-900 dark:text-white font-bold rounded-full hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all">
                    Industrial Solutions
                </button>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}