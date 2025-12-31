export default function WhyVestigoPage() {
  return (
    <main className="text-gray-800">
      {/* HERO SECTION */}
      <section
        className="relative h-[70vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/insurance/hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-5xl px-6 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Why Choose Vestigo
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-200">
            Delivering trusted insurance intelligence through accuracy,
            technology, and compliance—across India, the UK, and global markets.
          </p>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-gray-900">
            A Partner You Can Trust
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Vestigo is a specialized insurance support services company helping
            insurers, TPAs, and businesses manage risk, improve operational
            efficiency, and make confident decisions. Our solutions are built
            on deep industry expertise, secure technology, and an unwavering
            commitment to integrity.
          </p>
        </div>
      </section>

      {/* GLOBAL EXPERTISE */}
      <section
        className="relative bg-cover bg-center py-24"
        style={{ backgroundImage: "url('/images/insurance/global.jpg')" }}
      >
        <div className="absolute inset-0 bg-white/90" />
        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">
              Global Expertise with Local Insight
            </h3>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Operating across India, the UK, and international markets,
              Vestigo blends global best practices with strong local knowledge.
              We understand regional regulations, cultural nuances, and claim
              environments—ensuring effective, compliant outcomes everywhere.
            </p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-md">
            <ul className="space-y-4 text-gray-700">
              <li>• India & UK insurance ecosystems</li>
              <li>• Cross-border operational experience</li>
              <li>• Region-specific compliance awareness</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CORE STRENGTHS */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center text-gray-900">
            Our Core Strengths
          </h2>

          <div className="mt-16 grid md:grid-cols-3 gap-10">
            {strengths.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm border hover:shadow-md transition"
              >
                <h4 className="text-xl font-semibold text-gray-900">
                  {item.title}
                </h4>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY SECTION */}
      <section
        className="relative bg-cover bg-center py-24"
        style={{ backgroundImage: "url('/images/insurance/technology.jpg')" }}
      >
        <div className="absolute inset-0 bg-gray-900/70" />
        <div className="relative max-w-6xl mx-auto px-6 text-white">
          <h2 className="text-3xl font-semibold">
            Technology-Driven Delivery
          </h2>
          <p className="mt-6 text-lg text-gray-200 leading-relaxed">
            Vestigo leverages secure digital platforms and modern workflows to
            enhance transparency, reduce turnaround time, and provide seamless
            access to reports and updates—anytime, anywhere.
          </p>
        </div>
      </section>

      {/* COMPLIANCE */}
      <section
        className="relative bg-cover bg-center py-24"
        style={{ backgroundImage: "url('/images/insurance/compliance.jpg')" }}
      >
        <div className="absolute inset-0 bg-white/95" />
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-gray-900">
            Compliance, Security & Confidentiality
          </h2>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Data protection and regulatory compliance are central to our
            operations. Vestigo follows applicable privacy and security
            standards across jurisdictions, ensuring client information is
            handled with the highest level of care and confidentiality.
          </p>
        </div>
      </section>

      {/* CLOSING */}
      <section className="bg-gray-900 py-20 text-white text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-semibold">
            Our Promise
          </h2>
          <p className="mt-6 text-lg text-gray-300 leading-relaxed">
            Wherever you operate, Vestigo delivers clarity, confidence, and
            control—helping you manage risk and strengthen trust across the
            insurance value chain.
          </p>
        </div>
      </section>
    </main>
  );
}

const strengths = [
  {
    title: "Insurance-Focused Expertise",
    description:
      "Our exclusive focus on insurance services allows us to deliver deeper insights and higher accuracy across investigations and verification.",
  },
  {
    title: "Speed & Efficiency",
    description:
      "Optimized workflows and experienced teams enable faster turnaround times without compromising quality.",
  },
  {
    title: "Experienced Professionals",
    description:
      "Every case is handled by trained professionals with strong investigative and analytical backgrounds.",
  },
  {
    title: "Reliable Reporting",
    description:
      "Clear, structured, and actionable reports that support fair claims and informed decision-making.",
  },
  {
    title: "Scalable Solutions",
    description:
      "Flexible service models designed to grow with your business and operational needs.",
  },
  {
    title: "Client-Centric Approach",
    description:
      "We prioritize long-term partnerships built on responsiveness, transparency, and trust.",
  },
];
