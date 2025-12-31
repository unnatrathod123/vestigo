"use client";

import Link from "next/link";
import Image from "next/image";



export default function Footer() {
  const footerSections = [
    {
      title: "Solutions",
      links: [
        { title: "Audit Risk", href: "/solutions/audit-risk" },
        { title: "Commercial Insurance", href: "/solutions/commercial-insurance" },
        { title: "Life Insurance", href: "/solutions/life-insurance" },
        { title: "Claims Management", href: "/solutions/claims-management" },
      ],
    },
    {
      title: "Industries",
      links: [
        { title: "Chemical", href: "/industries/chemical" },
        { title: "Automotive", href: "/industries/automotive" },
        { title: "Finance", href: "/industries/finance" },
        { title: "IT", href: "/industries/it" },
      ],
    },
    {
      title: "Resources",
      links: [
        { title: "Blogs", href: "/blogs" },
        { title: "Guides", href: "/guides" },
        { title: "Support", href: "/support" },
      ],
    },
  ];

  return (
    <footer className="bg-gradient-to-r from-blue-400 to-cyan-600 text-white top-500">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Company Info */}
        <div className="flex flex-col space-y-4">
          <div className="relative w-32 h-12">
            <Image src="/logo.png" alt="Allianz Logo" fill className="object-contain" />
          </div>
  
          <p className="text-gray-300 text-md">
            123 Main Street, City, Country <br /> Phone: +1 234 567 890 <br /> Email: info@allianz.com
          </p>
        </div>

        {/* Footer Links */}
        {footerSections.map((section, idx) => (
          <div key={idx}>
            <h5 className="text-lg font-bold mb-4">{section.title}</h5>
            <ul className="space-y-2">
              {section.links.map((link, linkIdx) => (
                <li key={linkIdx}>
                  <Link
                    href={link.href}
                    className="hover:text-blue-300 transition-colors duration-300"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-blue-700 mt-8">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-300">
          <p>© {new Date().getFullYear()} Allianz. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 sm:mt-0">
            <Link href="/privacy" className="hover:text-blue-300 transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-blue-300 transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
