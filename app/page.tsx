import Image from "next/image";

export default function Abc() {

  const services = [
    { title: "Life Insurance" },
    { title: "Commercial Insurance" },
    { title: "Claims Management" },
    { title: "Green Insurance" },
  ];

  const industries = [
    "Automotive",
    "Pharmaceutical",
    "Finance",
    "Energy",
    "Telecommunications",
    "Textile",
    "Hospitality",
    "E-commerce",
    "Engineering",
    "IT & Software",
    "Chemical",
    "SME / MSME",
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900">

      {/* ================= Hero ================= */}
      <section className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 py-24 grid gap-12 md:grid-cols-2 items-center">
          
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold">
              Vestigo
            </h1>
            <span className="block w-20 h-1 bg-slate-900 rounded" />

            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              A global insurance and financial services firm delivering
              structured risk protection, compliance, and advisory solutions
              across industries.
            </p>
          </div>

          <div className="relative w-full h-72 md:h-96">
            <Image
              src="/logo.png"
              alt="Vestigo Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* ================= About ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold">
          About Us
        </h2>
        <span className="block mt-3 w-16 h-1 bg-slate-900 rounded mb-6" />

        <p className="text-gray-600 text-lg leading-relaxed max-w-4xl">
          Vestigo is a trusted insurance and financial services provider with
          decades of experience supporting individuals, enterprises, and
          institutions. Our approach combines technical expertise, regulatory
          insight, and long-term risk stewardship.
        </p>
      </section>

      {/* ================= Services ================= */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center">
            Our Services
          </h2>
          <span className="block mx-auto mt-3 w-16 h-1 bg-slate-900 rounded mb-12" />

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-xl border shadow-sm hover:shadow-md transition text-center"
              >
                <h3 className="font-semibold text-lg mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Structured insurance solutions designed to manage risk,
                  ensure protection, and support long-term stability.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= Industries ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center">
          Industries We Serve
        </h2>
        <span className="block mx-auto mt-3 w-20 h-1 bg-slate-900 rounded mb-12" />

        <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-5 text-center">
          {industries.map((industry, idx) => (
            <div
              key={idx}
              className="p-6 border rounded-lg text-sm font-medium text-slate-700 hover:border-blue-600 transition"
            >
              {industry}
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-slate-50 border-t py-20 text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold">
          Ready to Protect Your Future?
        </h2>
        <span className="block mx-auto mt-4 w-24 h-1 bg-slate-900 rounded mb-8" />

        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
          Speak with our specialists to explore insurance and risk management
          solutions tailored to your business and regulatory environment.
        </p>

        <button className="px-10 py-4 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
}
