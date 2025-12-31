import Link from "next/link";

const jobOpenings = [
  {
    id: 1,
    title: "Insurance Claims Analyst",
    location: "London, UK / Remote",
    type: "Full-time",
    link: "#",
  },
  {
    id: 2,
    title: "Data Analyst - Risk & Compliance",
    location: "Bangalore, India",
    type: "Full-time",
    link: "#",
  },
  {
    id: 3,
    title: "Technology & Automation Specialist",
    location: "Remote",
    type: "Contract",
    link: "#",
  },
];

export default function CareersPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-teal-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">Careers at Vestigo</h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
          Join our team of experts in insurance intelligence, compliance, and technology. Be part of a global company driving innovative solutions across multiple industries.
        </p>
        <Link href="#open-positions">
          <button className="mt-8 bg-white text-teal-600 font-semibold py-3 px-6 rounded-md hover:bg-gray-100 transition">
            View Open Positions
          </button>
        </Link>
      </section>

      {/* Culture & Values */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Our Culture & Values</h2>
          <p className="mt-4 text-gray-700">
            At Vestigo, we foster a collaborative, innovative, and inclusive work environment. Our values revolve around integrity, excellence, and delivering trust-driven solutions for our clients.
          </p>
          <ul className="mt-6 list-disc list-inside text-gray-700 space-y-2">
            <li>Global exposure and diverse projects</li>
            <li>Focus on technology-driven solutions</li>
            <li>Commitment to compliance and ethical practices</li>
            <li>Supportive and inclusive workplace</li>
          </ul>
        </div>
        <img
          src="/images/careers/culture.jpg"
          alt="Company Culture"
          className="rounded-xl shadow-lg"
        />
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900">Why Work With Us?</h2>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            Vestigo provides opportunities for professional growth, flexible work arrangements, and a supportive team environment.
          </p>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-900">Growth Opportunities</h3>
              <p className="mt-2 text-gray-700">Continuous learning and career advancement programs.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-900">Flexible Work</h3>
              <p className="mt-2 text-gray-700">Remote and hybrid options to maintain work-life balance.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-900">Inclusive Culture</h3>
              <p className="mt-2 text-gray-700">Collaborative, supportive, and diverse workplace.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center">Current Openings</h2>
        <p className="mt-2 text-gray-700 text-center">
          Join our growing team. Check out our open roles below.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {jobOpenings.map((job) => (
            <div key={job.id} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
              <p className="mt-2 text-gray-600">{job.location}</p>
              <p className="mt-1 text-gray-500 font-medium">{job.type}</p>
              <Link href={job.link}>
                <button className="mt-4 w-full bg-teal-600 text-white py-2 rounded-md font-medium hover:bg-teal-700 transition">
                  Apply Now
                </button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA / Contact */}
      <section className="bg-teal-600 py-16 text-white text-center px-6">
        <h2 className="text-3xl font-bold">Ready to Join Vestigo?</h2>
        <p className="mt-4 max-w-2xl mx-auto">
          If you don’t see a suitable position listed, feel free to send your resume and we’ll get in touch when a matching role opens up.
        </p>
        <Link href="mailto:careers@vestigo.com">
          <button className="mt-6 bg-white text-teal-600 font-semibold py-3 px-6 rounded-md hover:bg-gray-100 transition">
            Submit Your Resume
          </button>
        </Link>
      </section>
    </main>
  );
}
