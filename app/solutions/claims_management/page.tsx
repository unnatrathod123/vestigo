export default function ClaimsManagement() {
  return (
    <main className="bg-white text-slate-900">

      {/* Hero */}
      <section className="py-24 bg-slate-50 border-b">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Claims Management
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-slate-600">
            Turning policy promises into reliable, transparent, and timely outcomes.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Trusted Claims Handling
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Claims management is the most critical moment in the insurance lifecycle.
              Our structured and compliant approach ensures accurate assessments,
              reduced turnaround times, and fair settlements — strengthening trust
              between insurers and policyholders.
            </p>
          </div>

          <div className="bg-slate-50 p-8 rounded-xl border">
            <ul className="space-y-4 text-slate-700">
              <li>✔ Transparent claim reporting</li>
              <li>✔ Accurate loss evaluation</li>
              <li>✔ Fraud and leakage prevention</li>
              <li>✔ Regulatory-compliant settlements</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-slate-50 border-t">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-14">
            End-to-End Claims Lifecycle
          </h2>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              "Claim Notification",
              "Verification",
              "Loss Evaluation",
              "Approval",
              "Settlement Review",
            ].map((step, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl border text-center hover:shadow-md transition"
              >
                <div className="text-sm uppercase tracking-wide text-slate-500 mb-2">
                  Step {i + 1}
                </div>
                <h4 className="font-semibold">{step}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Lines */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-14">
            Claims Across Insurance Lines
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Life & Health Insurance",
                desc: "Medical validation, hospitalization coordination, and faster reimbursement processing.",
              },
              {
                title: "General & Commercial Insurance",
                desc: "Property, motor, liability, and engineering claims with third-party coordination.",
              },
              {
                title: "Green Insurance",
                desc: "Sustainable repair, replacement, and environmentally responsible settlement practices.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 rounded-xl border hover:shadow-lg transition"
              >
                <h4 className="text-xl font-semibold mb-4">{item.title}</h4>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Why Our Claims Management
          </h2>

          <div className="grid md:grid-cols-4 gap-8 mt-12">
            {[
              "Faster Claim Turnaround",
              "Reduced Fraud & Leakage",
              "Audit-Ready Compliance",
              "Higher Customer Satisfaction",
            ].map((value, i) => (
              <div
                key={i}
                className="bg-slate-800 p-6 rounded-xl border border-slate-700"
              >
                <p className="font-semibold">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50 text-center border-t">
        <h2 className="text-3xl font-bold mb-6">
          Strengthen Your Claims Operations
        </h2>
        <p className="max-w-2xl mx-auto text-slate-600 mb-8">
          Partner with specialists who combine operational excellence,
          regulatory expertise, and customer-first claims resolution.
        </p>

        <button className="px-10 py-4 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition">
          Speak with Our Experts
        </button>
      </section>

    </main>
  );
}
