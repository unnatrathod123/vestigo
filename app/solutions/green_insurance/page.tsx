"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// --- Animation Variants ---
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1
    }
  },
  viewport: { once: true }
};

const slideInLeft = {
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" }
};

export default function GreenInsurancePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">

      {/* ================= HERO ================= */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial="initial"
            animate="whileInView"
            variants={slideInLeft}
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Green Insurance
            </h1>

            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 64 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-1 bg-green-700 mt-6 mb-8 rounded" 
            />

            <p className="text-lg text-gray-600 max-w-xl">
              Insurance solutions designed to protect assets while promoting
              environmental responsibility, climate resilience, and ESG alignment.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 hover:scale-105 active:scale-95 transition-all">
                Explore Solutions
              </button>
              <button className="px-8 py-4 border border-slate-300 text-slate-900 font-semibold rounded-lg hover:bg-slate-100 transition-all">
                Speak to an Expert
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-72 md:h-96"
          >
            <Image
              src="/imgs/sustainable_insurance.png"
              alt="Sustainable insurance"
              fill
              className="object-cover rounded-xl shadow-2xl"
            />
          </motion.div>

        </div>
      </section>
{/* ================= WHY GREEN INSURANCE ================= */}
<section className="relative py-24 overflow-hidden group">
  {/* Background Image Layer */}
  <div className="absolute inset-0 z-0">
    <Image
      src="/imgs/green_hills1.png" // Replace with your aerial forest image
      alt="Aerial view of a forest and river"
      fill
      className="object-cover brightness-[0.4] saturate-[0.8] scale-105 transition-transform duration-1000 group-hover:scale-100"
      priority
    />
    {/* Radial gradient to darken edges and focus light on the center text */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(2,6,23,0.85)_100%)]" />
  </div>

  <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
    <motion.div {...fadeInUp}>
      <h2 className="text-4xl md:text-5xl font-extrabold text-green-500 drop-shadow-2xl tracking-tight">
        Why Green Insurance Matters
      </h2>
      <div className="mx-auto mt-6 w-24 h-1.5 bg-green-500 rounded-full shadow-[0_0_15px_rgba(34,197,94,0.6)] mb-10" />

      <p className="text-white text-lg md:text-xl max-w-3xl mx-auto mb-20 leading-relaxed font-medium drop-shadow-md">
        Climate change, regulatory pressure, and investor expectations require
        insurance solutions that support sustainability without compromising risk protection.
      </p>
    </motion.div>

    <motion.div 
      variants={staggerContainer}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
      className="grid md:grid-cols-3 gap-8"
    >
      {[
        {
          title: "Climate Risk Mitigation",
          desc: "Coverage designed to address climate-related losses and environmental liabilities.",
          icon: (
            <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
          )
        },
        {
          title: "Sustainable Growth",
          desc: "Supports renewable energy, green buildings, and low-carbon infrastructure projects.",
          icon: (
            <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          )
        },
        {
          title: "Regulatory Confidence",
          desc: "Aligns insurance programs with evolving ESG and sustainability regulations.",
          icon: (
            <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          )
        },
      ].map((item, i) => (
        <motion.div
          key={i}
          variants={fadeInUp}
          whileHover={{ y: -12 }}
          className="group relative p-10 rounded-3xl transition-all duration-500 overflow-hidden"
        >
          {/* Glassmorphism Background: Darkened with high blur to ensure text pop */}
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-xl border border-white/10 group-hover:border-green-500/50 transition-all shadow-2xl" />
          
          <div className="relative z-10 text-left">
            <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">
              {item.icon}
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-sm group-hover:text-green-400 transition-colors">
              {item.title}
            </h3>
            <span className="block w-12 h-1 bg-green-500 mb-6 rounded-full group-hover:w-20 transition-all duration-500" />
            <p className="text-slate-200 text-base leading-relaxed font-medium">
              {item.desc}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>

      {/* ================= INDUSTRY GRID ================= */}
      <section className="py-20 bg-white border-t">
        <div className="max-w-7xl mx-auto px-6">

          <motion.div {...fadeInUp} className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Green Insurance by Industry
            </h2>
            <div className="mx-auto mt-4 w-20 h-1 bg-green-700 rounded mb-14" />
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid gap-10 md:grid-cols-2 lg:grid-cols-3"
          >
            {[
              { title: "Renewable Energy", desc: "Insurance coverage designed for solar, wind, hydro, and battery storage projects.", items: ["Construction risk", "Equipment failure", "Weather volatility"] },
              { title: "Green Real Estate", desc: "Tailored insurance for sustainable buildings and eco-certified properties.", items: ["LEED support", "Energy-efficient assets", "Resilience coverage"] },
              { title: "Sustainable Manufacturing", desc: "Coverage for manufacturers transitioning to low-carbon production models.", items: ["Env. liability", "Supply chain risk", "Clean tech adoption"] },
              { title: "Green Transportation", desc: "Insurance solutions supporting electric mobility and low-emission systems.", items: ["EV fleets", "Charging infra", "Battery risk"] },
              { title: "Sustainable Agriculture", desc: "Climate-aware insurance for agriculture and agribusiness operations.", items: ["Weather/Crop risk", "Water protection", "Compliance"] },
              { title: "Financial Institutions", desc: "ESG-aligned insurance for banks, insurers, and asset managers.", items: ["Stress-testing", "ESG governance", "Regulatory compliance"] },
            ].map((industry, i) => (
              <motion.div 
                key={i}
                variants={fadeInUp}
                className="p-8 border rounded-xl shadow-sm hover:shadow-md transition-all group"
              >
                <h3 className="text-xl font-semibold mb-3 group-hover:text-green-700 transition-colors">
                  {industry.title}
                </h3>
                <span className="block w-10 h-0.5 bg-green-700 mb-4" />
                <p className="text-gray-600 text-sm mb-4">
                  {industry.desc}
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  {industry.items.map((li, idx) => (
                    <li key={idx}>• {li}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= SOLUTIONS ================= */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">

          <motion.div {...fadeInUp} className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold">
              Our Green Insurance Solutions
            </h2>
            <div className="mx-auto mt-4 w-20 h-1 bg-slate-900 rounded mb-16" />
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              "Renewable Energy Insurance",
              "Green Building Coverage",
              "Environmental Liability",
              "Climate Resilience Programs",
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white rounded-xl border shadow-sm transition-all"
              >
                <h4 className="font-semibold text-lg mb-3">{item}</h4>
                <p className="text-sm text-gray-600">
                  Tailored insurance coverage supporting sustainability-driven
                  assets and operations.
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= ESG ALIGNMENT ================= */}
      <section className="py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold">
              ESG-Aligned Insurance Framework
            </h2>
            <div className="w-16 h-1 bg-green-700 mt-6 mb-8 rounded" />

            <p className="text-gray-600 text-lg mb-6">
              Our Green Insurance programs are structured to support Environmental,
              Social, and Governance objectives across industries.
            </p>

            <ul className="space-y-4 text-gray-600">
              {["Environmental impact reduction", "Responsible underwriting practices", "Transparent risk governance", "Long-term sustainability resilience"].map((item, i) => (
                <motion.li 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={i}
                >
                  • {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-10 border rounded-xl shadow-sm bg-slate-50"
          >
            <p className="text-lg font-semibold mb-4">
              Trusted by sustainability-focused organizations
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              We partner with organizations committed to environmental responsibility,
              providing insurance frameworks that evolve with climate and regulatory change.
            </p>
          </motion.div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 bg-slate-900 text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">
            Build a Sustainable Risk Strategy
          </h2>

          <p className="text-lg max-w-3xl mx-auto text-slate-300 mb-10">
            Partner with insurance experts to protect your assets while advancing
            sustainability and ESG commitments.
          </p>

          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="px-10 py-4 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-100 transition shadow-lg shadow-white/10"
          >
            Speak with Our Green Insurance Team
          </motion.button>
        </motion.div>
      </section>

    </div>
  );
}