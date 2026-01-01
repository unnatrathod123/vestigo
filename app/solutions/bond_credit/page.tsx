"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, Zap, Building2, Landmark, Globe, 
  TrendingUp, ArrowRight, Lock, ShoppingCart, 
  CheckCircle2, BarChart3, PieChart, FileSearch, ShieldCheck
} from 'lucide-react';

// --- Content Data ---
const HERO_CONTENT = [
  {
    title: "SURETY",
    subtitle: "BOND SOLUTIONS",
    description: "Go beyond simple guarantees. Our surety solutions utilize predictive analytics to assess obligee requirements and principal capacity, ensuring multi-year project viability.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000",
    label: "Project Lifecycle Security"
  },
  {
    title: "TRADE",
    subtitle: "CREDIT INSURANCE",
    description: "Transform your balance sheet. Protect against catastrophic bad debt and political upheaval while gaining the confidence to offer competitive open-account terms globally.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1000",
    label: "Balance Sheet Optimization"
  }
];

const DETAILED_FEATURES = [
  {
    category: "Surety Underwriting",
    features: [
      { title: "Capacity Maximization", desc: "Advanced financial analysis to unlock higher aggregate bond limits." },
      { title: "Rapid Bond Issuance", desc: "Cloud-based portal for 24/7 self-service bond execution." },
      { title: "International Admitted Paper", desc: "Local fronting capabilities in 150+ jurisdictions." }
    ]
  },
  {
    category: "Credit Risk Analytics",
    features: [
      { title: "Real-time Monitor", desc: "Automated alerts on buyer insolvency and payment behavior shifts." },
      { title: "Sector Insights", desc: "Deep-dive data on over 40 million businesses worldwide." },
      { title: "Political Risk Cover", desc: "Protection against currency inconvertibility and trade embargoes." }
    ]
  }
];

// --- Sub-Components ---
const IconButton = ({ children, label }: { children: React.ReactNode, label: string }) => (
  <motion.div 
    whileHover={{ scale: 1.05, y: -5, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
    className="flex flex-col items-center gap-3 p-6 bg-slate-800/40 backdrop-blur-md border border-slate-700 rounded-2xl cursor-pointer transition-all"
  >
    <div className="text-blue-400">
      {children}
    </div>
    <span className="text-[10px] font-black tracking-widest text-slate-300 uppercase text-center leading-tight">
      {label}
    </span>
  </motion.div>
);

const AppButton = ({ children, primary = false }: { children: React.ReactNode, primary?: boolean }) => (
  <motion.button
    whileHover={{ scale: 1.05, y: -2 }}
    whileTap={{ scale: 0.95 }}
    className={`px-8 py-3 rounded-full font-bold text-xs uppercase tracking-widest shadow-lg transition-all
      ${primary 
        ? "bg-blue-600 text-white hover:bg-blue-500 shadow-blue-900/20" 
        : "bg-slate-800 text-white border border-slate-700 hover:bg-slate-700"
      }`}
  >
    {children}
  </motion.button>
);

export default function DarkSuretyDesign() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % HERO_CONTENT.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const current = HERO_CONTENT[index] || HERO_CONTENT[0];

  return (
    <div className="bg-slate-950 text-white min-h-screen font-sans overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 1.2 }}
              animate={{ opacity: 0.3, scale: 1 }} // Increased opacity for image visibility
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 2 }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${current.image})` }}
            />
          </AnimatePresence>
          {/* Gradient Overlay for Text Legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-600 rounded-lg">
                <Shield className="text-white" size={24} />
              </div>
              <span className="font-bold tracking-tighter text-2xl uppercase">CyberSurety</span>
            </div>

            <div className="relative min-h-[320px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                  animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  exit={{ opacity: 0, filter: "blur(10px)", y: -20 }}
                  transition={{ duration: 0.6 }}
                  className="flex flex-col space-y-6"
                >
                  <h1 className="text-7xl md:text-8xl font-black tracking-tighter leading-none uppercase">
                    {current.title} <br />
                    <span className="text-blue-500 italic drop-shadow-2xl">
                      {current.subtitle}
                    </span>
                  </h1>
                  <p className="text-slate-300 max-w-lg text-lg font-medium leading-relaxed border-l-4 border-blue-500 pl-6 py-2 bg-slate-900/40 backdrop-blur-sm">
                    {current.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <AppButton primary>Underwriting Portal</AppButton>
              <AppButton>Claims Center</AppButton>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative hidden lg:flex justify-center"
          >
            <div className="relative p-2 bg-gradient-to-br from-blue-500 to-slate-800 rounded-[3.5rem] shadow-2xl">
              <img src={current.image} alt={current.title} className="w-[440px] h-[560px] object-cover rounded-[3rem] brightness-90" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. FEATURE GRID */}
      <section className="max-w-7xl mx-auto px-6 py-32 bg-slate-950">
        <div className="grid lg:grid-cols-2 gap-16">
          {DETAILED_FEATURES.map((group, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="space-y-10"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-blue-500/30 flex items-center justify-center shadow-inner">
                  {idx === 0 ? <Building2 className="text-blue-400" /> : <BarChart3 className="text-blue-400" />}
                </div>
                <h2 className="text-4xl font-black uppercase tracking-tighter italic">{group.category}</h2>
              </div>
              <div className="grid gap-6">
                {group.features.map((feature, fIdx) => (
                  <motion.div 
                    whileHover={{ x: 10, backgroundColor: "rgba(30, 41, 59, 0.8)" }} 
                    key={fIdx} 
                    className="p-8 bg-slate-900/50 border border-slate-800 rounded-3xl backdrop-blur-md transition-all"
                  >
                    <h4 className="font-black text-blue-400 uppercase tracking-widest text-xs mb-3 flex items-center gap-2">
                      <Zap size={14} /> {feature.title}
                    </h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. UNDERWRITING LIFECYCLE */}
      <section className="bg-slate-900/50 py-32 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             className="text-center mb-24"
          >
            <h2 className="text-5xl font-black uppercase tracking-tighter mb-6">The <span className="text-blue-500 italic">Security Pipeline</span></h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">A technical visualization of the tripartite agreement between Principal, Obligee, and Surety.</p>
          </motion.div>

          

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: FileSearch, step: "01", title: "Assessment", desc: "Qualitative and quantitative analysis of principal financial strength." },
              { icon: ShieldCheck, step: "02", title: "Underwriting", desc: "Determination of bond capacity and risk mitigation structures." },
              { icon: Zap, step: "03", title: "Execution", desc: "Rapid issuance of admitted paper through our global portal." },
              { icon: PieChart, step: "04", title: "Monitoring", desc: "Live tracking of credit limits and project performance metrics." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative text-center p-8 bg-slate-950 border border-slate-800 rounded-3xl hover:border-blue-500/50 transition-colors"
              >
                <div className="mx-auto w-16 h-16 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-500 mb-6">
                  <item.icon size={32} />
                </div>
                <div className="text-xs font-black text-blue-500 tracking-widest mb-2">{item.step}</div>
                <h3 className="font-bold text-xl mb-4">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex flex-col gap-4 items-center md:items-start">
          <div className="flex items-center gap-2">
            <Shield className="text-blue-500" size={24} />
            <span className="font-black text-2xl tracking-tighter uppercase">CyberSurety</span>
          </div>
          <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.2em]">Institutional Risk Management © 2026</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 text-xs font-black uppercase tracking-widest text-slate-400">
          <a href="#" className="hover:text-white transition-colors">Governance</a>
          <a href="#" className="hover:text-white transition-colors">API Docs</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>

        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="h-14 px-10 rounded-full bg-blue-600 text-white flex items-center gap-3 font-bold text-xs uppercase tracking-widest cursor-pointer shadow-2xl shadow-blue-900/40"
        >
          <span>Request Access</span>
          <ArrowRight size={18} />
        </motion.div>
      </footer>
    </div>
  );
}