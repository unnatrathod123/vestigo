"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  ShieldAlert, Settings, Search, ArrowRight, 
  Activity, BarChart3, Landmark 
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } }
};

export default function Auditpg() {
  return (
    <div className="bg-white selection:bg-slate-200">

      {/* ----------- Section 1: Audit Risk Framework ---------- */}
<section className="relative py-24 md:py-32 overflow-hidden min-h-[75vh] flex items-center bg-slate-900">
  {/* Background Image with Layered Overlays */}
  <div className="absolute inset-0 z-0">
    <Image
      src="/imgs/audit_risk_framework1.png" // Ensure this matches your file path
      alt="Corporate Audit and Risk Background"
      fill
      priority
      className="object-cover object-center opacity-40 grayscale-[30%]"
    />
    {/* Gradient Overlays for Readability and Transition */}
    <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/50 to-white" />
    <div className="absolute inset-0 bg-slate-950/20 backdrop-blur-[1px]" />
  </div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
    <motion.div {...fadeInUp}>
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
        <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
        <span className="text-xs font-bold tracking-widest text-cyan-400 uppercase">Framework Overview</span>
      </div>
      
      <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-white tracking-tight">
        Audit Risk Framework
      </h2>
      <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-16 leading-relaxed">
        Audit risk represents the possibility that financial statements contain
        material misstatements that remain undetected by audit procedures.
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
          title: "Inherent Risk",
          icon: <ShieldAlert className="w-6 h-6 text-red-400" />,
          desc: "Risk arising from the nature of insurance operations and complexity.",
          borderColor: "hover:border-red-500/50"
        },
        {
          title: "Control Risk",
          icon: <Settings className="w-6 h-6 text-yellow-400" />,
          desc: "Risk that internal controls fail to prevent or detect misstatements.",
          borderColor: "hover:border-yellow-500/50"
        },
        {
          title: "Detection Risk",
          icon: <Search className="w-6 h-6 text-blue-400" />,
          desc: "Risk that audit procedures do not identify existing misstatements.",
          borderColor: "hover:border-blue-500/50"
        },
      ].map((item, i) => (
        <motion.div
          key={i}
          variants={fadeInUp}
          whileHover={{ y: -8 }}
          className={`p-10 rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-xl transition-all hover:shadow-2xl hover:shadow-cyan-500/10 text-left ${item.borderColor}`}
        >
          <div className="mb-6 p-3 bg-slate-800/50 rounded-lg w-fit shadow-inner">
            {item.icon}
          </div>
          <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
          <p className="text-slate-300 leading-relaxed">{item.desc}</p>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>

      {/* ----------- Section 2: Audit Risk Formula ---------- */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h3 {...fadeInUp} className="text-3xl font-bold mb-16 text-slate-900">
            The Audit Risk Equation
            <span className="block mx-auto mt-4 w-16 h-1.5 bg-slate-900 rounded-full"></span>
          </motion.h3>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex flex-col lg:flex-row items-center justify-center gap-6"
          >
            <FormulaCard label="Inherent Risk" color="text-red-700 bg-white border-red-200" />
            <span className="text-3xl text-slate-400 font-light">×</span>
            <FormulaCard label="Control Risk" color="text-yellow-700 bg-white border-yellow-200" />
            <span className="text-3xl text-slate-400 font-light">×</span>
            <FormulaCard label="Detection Risk" color="text-blue-700 bg-white border-blue-200" />
            <span className="text-3xl text-slate-400 font-light">=</span>
            <div className="px-10 py-6 bg-slate-900 text-white rounded-2xl shadow-xl ring-4 ring-slate-900/10 transform hover:scale-105 transition-transform">
              <span className="text-2xl font-bold tracking-wide">Audit Risk</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ----------- Section 3: Risk Hotspots (Using Analytics Image) ---------- */}
      <section className="relative py-28 overflow-hidden group">
        <div className="absolute inset-0 z-0">
          <Image
            src="/imgs/audit_analytics_bg.jpg" // Use top half of your provided image 0f47e5
            alt="Data analytics background"
            fill
            className="object-cover brightness-[0.25] group-hover:scale-110 transition-transform duration-[10s]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp} className="text-left mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Insurance Audit Risk Hotspots</h2>
            <div className="w-24 h-1 bg-cyan-500 rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: "Claims Reserving", icon: <Activity /> },
              { name: "Actuarial Assumptions", icon: <BarChart3 /> },
              { name: "Reinsurance Contracts", icon: <Landmark /> },
              { name: "Regulatory Capital", icon: <ShieldAlert /> },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-900/40 backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-cyan-500/50 transition-all group"
              >
                <div className="text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="text-xl font-semibold mb-4 text-white">{item.name}</h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  High judgment and complexity increase inherent and control risks in these sectors.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------- Section 4: How We Reduce Risk ---------- */}
      <section className="relative py-24 bg-white">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#0f172a 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">How We Reduce Audit Risk</h2>
            <div className="mx-auto w-24 h-1 bg-slate-900 rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Advanced Audit Analytics",
                desc: "Continuous monitoring and anomaly detection across claims and policies using AI data models.",
              },
              {
                title: "Control Assurance",
                desc: "Independent assessment of underwriting and claims controls to ensure operational integrity.",
              },
              {
                title: "Actuarial Expertise",
                desc: "Validation of assumptions and stress testing of reserves to align with global standards.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="p-10 rounded-3xl bg-white border border-slate-100 shadow-sm transition-all hover:shadow-xl text-center"
              >
                <h4 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h4>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------- Section 5: CTA (Using Handshake Image) ---------- */}
      <section className="relative py-28 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/imgs/audit_risk_cta.png" // Use bottom half of your provided image 0f47e5
            alt="Expert consultation"
            fill
            className="object-cover opacity-30 brightness-[0.6]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950" />
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.h2 {...fadeInUp} className="text-4xl md:text-5xl font-bold mb-8 text-white tracking-tight">
            Strengthen Your Audit & Risk Framework
          </motion.h2>
          <motion.p {...fadeInUp} className="text-xl mb-12 text-slate-300 font-light">
            Partner with industry specialists to mitigate audit risk and enhance
            regulatory confidence.
          </motion.p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group px-12 py-5 bg-cyan-600 text-white font-bold rounded-full hover:bg-cyan-500 transition-all shadow-2xl shadow-cyan-500/20 flex items-center mx-auto gap-2"
          >
            Speak with Our Experts
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </section>
    </div>
  );
}

function FormulaCard({ label, color }: { label: string; color: string }) {
  return (
    <div className={`px-8 py-5 rounded-xl border font-bold text-lg shadow-sm ${color} hover:shadow-md transition-shadow`}>
      {label}
    </div>
  );
}