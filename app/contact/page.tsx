"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-900 py-20 px-4 text-gray-100">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        
        {/* Contact Info */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold mb-2 text-white">Contact Us</h1>
          <p className="text-gray-300">
            We'd love to hear from you. Reach out to us via any of the methods below or send us a message using the form.
          </p>

          <div className="space-y-4">
            <div>
              <h2 className="font-semibold text-gray-200">Address</h2>
              <p>Allianz SE, Example Street 123, 12345 City, Country</p>
            </div>
            <div>
              <h2 className="font-semibold text-gray-200">Phone</h2>
              <p>+1 (555) 123-4567</p>
            </div>
            <div>
              <h2 className="font-semibold text-gray-200">Email</h2>
              <p>contact@allianz.com</p>
            </div>
            <div>
              <h2 className="font-semibold text-gray-200">Working Hours</h2>
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
          {submitted && (
            <p className="text-green-400 mb-4 text-center">
              Thank you! Your message has been sent.
            </p>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 font-semibold text-gray-200">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-gray-700 border border-gray-600 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-100"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold text-gray-200">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-gray-700 border border-gray-600 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-100"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold text-gray-200">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-gray-700 border border-gray-600 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-100"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold text-gray-200">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full bg-gray-700 border border-gray-600 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-100"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
