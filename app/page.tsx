import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function Abc() {

  const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

  const services = [
    { title: "Life Insurance", icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422A12.083 12.083 0 0112 21.5a12.083 12.083 0 01-6.16-10.922L12 14z" />
      </svg>
    )},
    { title: "Commercial Insurance", icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M3 7v12a2 2 0 002 2h14a2 2 0 002-2V7M3 7l9-4 9 4" />
      </svg>
    )},
    { title: "Claims Management", icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6M12 15h0M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )},
    { title: "Green Insurance", icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v18m9-9H3" />
      </svg>
    )},
  ];

  const industries = [
  { title: "Automotive", icon: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18v8H3z" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="17" cy="18" r="2" />
    </svg>
  )},
  { title: "Pharmaceutical", icon: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v8M8 12h8" />
      <circle cx="12" cy="12" r="9" />
    </svg>
  )},
  { title: "Finance", icon: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c1.333 0 2 1.333 2 2s-.667 2-2 2-2-1.333-2-2 .667-2 2-2z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12v4" />
    </svg>
  )},
  { title: "Energy", icon: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v18M5 12h14" />
    </svg>
  )},
  { title: "Telecommunications", icon: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8h18M3 16h18M12 3v18" />
    </svg>
  )},
  { title: "Textile", icon: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 18h16M4 6v12M20 6v12" />
    </svg>
  )},
  { title: "Hospitality", icon: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7h16v10H4z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7l8-4 8 4" />
    </svg>
  )},
  { title: "E-commerce", icon: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18v18H3V3z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8l-4 4-4-4" />
    </svg>
  )},
  { title: "Engineering", icon: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
    </svg>
  )},
  { title: "IT & Software", icon: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 18h16M4 6l8 6 8-6" />
    </svg>
  )},
  { title: "Chemical", icon: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <circle cx="12" cy="12" r="9" strokeWidth={2} stroke="currentColor"/>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v18M3 12h18" />
    </svg>
  )},
  { title: "SME / MSME", icon: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4h16v16H4V4z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12h16" />
    </svg>
  )},
];


  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-200 to-cyan-200 text-gray-900">
        <div className="max-w-7xl mx-auto px-4 py-24 grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold">
              Vestigo
            </h1>
            <p className="text-lg md:text-xl text-gray-700">
              Global Insurance & Financial Services Company providing comprehensive solutions for life, health, commercial, and risk management.
            </p>
            <div className="flex gap-4">
            
            </div>
          </div>

          <div className="relative w-full h-80 md:h-96">
            <Image
              src="/logo.png"
              alt="Allianz Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-6">About Us</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Vestigo is one of the world’s leading insurance and financial services providers. 
          With decades of experience, we offer a wide range of solutions designed to protect individuals, businesses, and communities worldwide.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 flex flex-col items-center text-center shadow hover:shadow-lg hover:scale-105 transition transform duration-300">
                {service.icon}
                <h3 className="font-semibold text-lg mt-4">{service.title}</h3>
                <p className="text-gray-600 mt-2 text-sm">
                  Comprehensive coverage tailored to your needs.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Industries We Serve</h2>
        <div className="grid md:grid-cols-5 gap-8 text-center">
          {industries.map((industry, idx) => (
            <div key={idx} className="flex flex-col items-center bg-white rounded-lg p-6 shadow hover:shadow-lg hover:scale-105 transition transform duration-300">
              {industry.icon}
              <h4 className="font-semibold text-lg mt-4">{industry.title}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-200 text-gray-900 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Protect Your Future?</h2>
        <p className="mb-6 text-lg text-gray-700">
          Get in touch with us today and explore the right insurance solutions for you or your business.
        </p>
        <button  className="px-8 py-3 bg-blue-600 cursor-pointer text-white font-semibold rounded-lg hover:bg-blue-500 transition">
        
          Contact Us
        </button>
      </section>



          {/* <section className="relative py-48 flex justify-center items-center overflow-hidden border-t border-gray-100 dark:border-gray-800">
           <div className="absolute inset-0 z-[-1] grayscale opacity-10 blur-sm">
             <img 
              src="https://picsum.photos/id/201/1600/900" 
              alt="World" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center space-y-8 px-6">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic">Ready to Lead?</h2>
            <button className="group relative px-12 py-5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold rounded-full overflow-hidden transition-all">
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gray-700 dark:bg-gray-200 translate-y-full group-hover:translate-y-0 transition-transform" />
            </button>
          </div>
        </section> */}
      {/* Footer */}
    
    </div>
  );
}
