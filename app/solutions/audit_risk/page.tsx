export default function Auditpg()
{
    return(

        <>
        {/* ----------- audit risk ---------- */}
     <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Audit Risk Framework
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">
            Audit risk represents the possibility that financial statements contain
            material misstatements that remain undetected by audit procedures.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Inherent Risk",
                desc: "Risk arising from the nature of insurance operations and complexity.",
              },
              {
                title: "Control Risk",
                desc: "Risk that internal controls fail to prevent or detect misstatements.",
              },
              {
                title: "Detection Risk",
                desc: "Risk that audit procedures do not identify existing misstatements.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-slate-50 p-8 rounded-xl border border-slate-200 hover:shadow-md transition"
              >
                <div className="inline-block px-4 py-2 rounded-full text-sm font-semibold bg-slate-900 text-white">
                  {item.title}
                </div>
                <p className="mt-6 text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


{/* //////// */}
        {/* ------------- audit risk formula ------------------- */}

        <section className="py-16 bg-white border-t">
  <div className="max-w-6xl mx-auto px-6 text-center">
   <h3 className="relative inline-block text-3xl font-bold mb-12 text-gray-900">
  Audit Risk Formula
  <span className="block mx-auto mt-3 w-16 h-1 bg-slate-700 rounded"></span>
</h3>


    <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-xl font-semibold">
      <span className="px-6 py-4 bg-red-50 text-red-700 rounded-lg shadow">
        Inherent Risk
      </span>
      <span className="text-3xl">×</span>
      <span className="px-6 py-4 bg-yellow-50 text-yellow-700 rounded-lg shadow">
        Control Risk
      </span>
      <span className="text-3xl">×</span>
      <span className="px-6 py-4 bg-blue-50 text-blue-700 rounded-lg shadow">
        Detection Risk
      </span>
      <span className="text-3xl">=</span>
      <span className="px-6 py-4 bg-gray-900 text-white rounded-lg shadow">
        Audit Risk
      </span>
    </div>
  </div>
</section>

{/* ////////////////// */}
        {/*  --------------  Risk HOtspot ------------------ */}

        <section className="py-20 bg-slate-900 text-white">
  <div className="max-w-7xl mx-auto px-6">
   <h2 className="relative text-4xl font-bold mb-12 text-center text-white">
  Insurance Audit Risk Hotspots
  <span className="block mx-auto mt-4 w-24 h-1 bg-blue-500 rounded"></span>
</h2>


    <div className="grid md:grid-cols-4 gap-8">
      {[
        "Claims Reserving",
        "Actuarial Assumptions",
        "Reinsurance Contracts",
        "Regulatory Capital",
      ].map((item, i) => (
        <div
          key={i}
          className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-blue-500 transition"
        >
          <h4 className="text-xl font-semibold mb-4 relative">
  {item}
  <span className="block mt-2 w-8 h-0.5 bg-blue-500 rounded"></span>
</h4>

          <p className="text-slate-300 text-sm">
            High judgment and complexity increase inherent and control risks.
          </p>
        </div>
      ))}
    </div>
  </div>
</section>



{/* ---------- Professional advisory  */}
        
        <section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6">
   <h2 className="relative text-4xl font-bold mb-12 text-center text-gray-900">
  How We Reduce Audit Risk
  <span className="block mx-auto mt-4 w-24 h-1 bg-slate-900 rounded"></span>
</h2>


    <div className="grid md:grid-cols-3 gap-10">
      {[
        {
          title: "Advanced Audit Analytics",
          desc: "Continuous monitoring and anomaly detection across claims and policies.",
        },
        {
          title: "Control Assurance",
          desc: "Independent assessment of underwriting and claims controls.",
        },
        {
          title: "Actuarial Expertise",
          desc: "Validation of assumptions and stress testing of reserves.",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="p-8 rounded-xl shadow hover:shadow-lg transition border"
        >
          <h4 className="text-xl font-semibold mb-4">{item.title}</h4>
          <p className="text-gray-600">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>


{/* /// CTA Section */}
    <section className="py-20 bg-slate-50 text-center border-t border-slate-200">
 <h2 className="relative text-4xl font-bold mb-6 text-gray-900">
  Strengthen Your Audit & Risk Framework
  <span className="block mx-auto mt-4 w-28 h-1 bg-slate-900 rounded"></span>
</h2>


  <p className="text-lg mb-8 max-w-3xl mx-auto text-gray-600">
    Partner with industry specialists to mitigate audit risk and enhance
    regulatory confidence.
  </p>

  <button className="px-10 py-4 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition">
    Speak with Our Experts
  </button>
</section>



        
        </>
    )

}
