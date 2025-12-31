"use client";
import { useState } from "react";

const allJobs = [
  {
    id: 1,
    title: "Insurance Claims Analyst",
    location: "London, UK",
    department: "Insurance",
    type: "Full-time",
  },
  {
    id: 2,
    title: "Data Analyst - Risk & Compliance",
    location: "Bangalore, India",
    department: "Analytics",
    type: "Full-time",
  },
  {
    id: 3,
    title: "Technology & Automation Specialist",
    location: "Remote",
    department: "Technology",
    type: "Contract",
  },
  {
    id: 4,
    title: "Compliance Officer",
    location: "London, UK",
    department: "Compliance",
    type: "Full-time",
  },
];

const departments = ["All", "Insurance", "Analytics", "Technology", "Compliance"];
const locations = ["All", "London, UK", "Bangalore, India", "Remote"];
const types = ["All", "Full-time", "Contract"];

export default function CareersPage() {
  const [selectedDept, setSelectedDept] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [selectedType, setSelectedType] = useState("All");

  const filteredJobs = allJobs.filter(
    (job) =>
      (selectedDept === "All" || job.department === selectedDept) &&
      (selectedLocation === "All" || job.location === selectedLocation) &&
      (selectedType === "All" || job.type === selectedType)
  );

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-16 px-6 text-center border-b border-gray-200">
        <h1 className="text-4xl font-bold text-gray-900">Careers at Vestigo</h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Join our team of experts in insurance intelligence, compliance, and technology. 
          Explore opportunities across global locations and multiple disciplines.
        </p>
      </section>

      {/* Company Culture / Values */}
      {/* <section className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Our Culture & Values</h2>
          <p className="mt-4 text-gray-700">
            At Vestigo, we cultivate a collaborative and inclusive work environment. 
            Our team thrives on innovation, integrity, and delivering high-quality solutions for our clients.
          </p>
          <ul className="mt-6 list-disc list-inside text-gray-700 space-y-2">
            <li>Integrity and ethical practices in all we do</li>
            <li>Collaborative and supportive team environment</li>
            <li>Innovation through technology and analytics</li>
            <li>Global exposure and diverse projects</li>
          </ul>
        </div>
        <img
          src="/images/careers/culture.jpg"
          alt="Company Culture"
          className="rounded-xl shadow-md object-cover w-full h-64 md:h-auto"
        />
      </section> */}


      
        {/* Company Culture / Values */}
<section className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
  <div>
    <h2 className="text-3xl font-bold text-gray-900">Our Culture & Values</h2>
    <p className="mt-4 text-gray-700">
      At Vestigo, we cultivate a collaborative and inclusive work environment. 
      Our team thrives on innovation, integrity, and delivering high-quality solutions for our clients.
    </p>

    <ul className="mt-6 space-y-4">
  {/* Integrity */}
  <li className="flex items-start space-x-3 group">
    <svg
      className="w-6 h-6 text-teal-600 flex-shrink-0 transition-transform duration-300 group-hover:scale-120"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
    </svg>
    <span className="text-gray-700">Integrity and ethical practices in all we do</span>
  </li>

  {/* Collaboration */}
  <li className="flex items-start space-x-3 group">
    <svg
      className="w-6 h-6 text-teal-600 flex-shrink-0 transition-transform duration-300 group-hover:scale-120"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 20h5v-5M2 12h5v5M12 2v5M7.5 7.5l9 9"
      ></path>
    </svg>
    <span className="text-gray-700">Collaborative and supportive team environment</span>
  </li>

  {/* Innovation */}
  <li className="flex items-start space-x-3 group">
    <svg
      className="w-6 h-6 text-teal-600 flex-shrink-0 transition-transform duration-300 group-hover:scale-120"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
    </svg>
    <span className="text-gray-700">Innovation through technology and analytics</span>
  </li>

  {/* Global Exposure */}
  <li className="flex items-start space-x-3 group">
    <svg
      className="w-6 h-6 text-teal-600 flex-shrink-0 transition-transform duration-300 group-hover:scale-120"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a10 10 0 100 20 10 10 0 000-20zM2 12h20M12 2v20"></path>
    </svg>
    <span className="text-gray-700">Global exposure and diverse projects</span>
  </li>
</ul>

  </div>

  <img
    src="/images/careers/culture.jpg"
    alt="Company Culture"
    className="rounded-xl shadow-md object-cover w-full h-64 md:h-auto"
  />
</section>



     {/* Filters */}
<section className="max-w-7xl mx-auto px-6 py-12">
  <h2 className="text-2xl font-semibold text-gray-900 mb-6">Filter Jobs</h2>
  <div className="bg-blue-300 shadow-sm rounded-lg p-6 flex flex-col md:flex-row gap-4 md:gap-6 border border-gray-200">
    <select
      value={selectedDept}
      onChange={(e) => setSelectedDept(e.target.value)}
      className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 flex-1"
    >
      {departments.map((dept) => (
        <option key={dept} value={dept}>
          {dept}
        </option>
      ))}
    </select>
    <select
      value={selectedLocation}
      onChange={(e) => setSelectedLocation(e.target.value)}
      className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 flex-1"
    >
      {locations.map((loc) => (
        <option key={loc} value={loc}>
          {loc}
        </option>
      ))}
    </select>
    <select
      value={selectedType}
      onChange={(e) => setSelectedType(e.target.value)}
      className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 flex-1"
    >
      {types.map((t) => (
        <option key={t} value={t}>
          {t}
        </option>
      ))}
    </select>
  </div>
</section>


      {/* Job Listings */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        {filteredJobs.length === 0 ? (
          <p className="text-gray-600 text-center">No jobs match your criteria.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-6 border border-gray-100"
              >
                <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                <p className="mt-2 text-gray-600">{job.location}</p>
                <p className="mt-1 text-gray-500">{job.department} • {job.type}</p>
                <button className="mt-4 w-full bg-teal-600 text-white py-2 rounded-md font-medium hover:bg-teal-700 transition">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* CTA / Resume Submission */}
      <section className="bg-white py-16 px-6 border-t border-gray-200 text-center">
        <h2 className="text-2xl font-semibold text-gray-900">Can't find a role?</h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Submit your resume and we’ll reach out when a matching opportunity opens up.
        </p>
        <a href="mailto:careers@vestigo.com">
          <button className="mt-6 bg-teal-600 text-white py-3 px-6 rounded-md font-medium hover:bg-teal-700 transition">
            Submit Your Resume
          </button>
        </a>
      </section>
    </main>
  );
}

