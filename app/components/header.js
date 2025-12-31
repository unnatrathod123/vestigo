"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);

  const menuItems = [
    { title: "Home", href: "/" },
    {
      title: "About Us",
      submenu: [
        { title: "Who Are We", href: "/about/who" },
        { title: "Why Us", href: "/about/why" },
        { title: "Our Team", href: "/about/team" },
        { title: "Our Partners", href: "/about/partners" },
      ],
    },
    {
      title: "Solutions",
      submenu: [
        { title: "Audit Risk", href: "/solutions/audit-risk" },
        { title: "Commercial Insurance", href: "/solutions/commercial-insurance" },
        { title: "Life Insurance", href: "/solutions/life-insurance" },
        { title: "Claims Management", href: "/solutions/claims-management" },
        { title: "Green Insurance", href: "/solutions/green-insurance" },
        { title: "Surety Bond & Credit Insurance", href: "/solutions/surety-bond-credit" },
        { title: "Ability Suite", href: "/solutions/ability-suite" },
      ],
    },
    {
      title: "Industries",
      submenu: [
        { title: "Chemical", href: "/industries/chemical" },
        { title: "Automotive", href: "/industries/automotive" },
        { title: "Pharmaceutical", href: "/industries/pharmaceutical" },
        { title: "Finance", href: "/industries/finance" },
        { title: "Telecommunications", href: "/industries/telecom" },
        { title: "Energy", href: "/industries/energy" },
        { title: "SME/MSME", href: "/industries/sme-msme" },
        { title: "Plastic", href: "/industries/plastic" },
        { title: "Textile", href: "/industries/textile" },
        { title: "Hospitality", href: "/industries/hospitality" },
        { title: "E-commerce", href: "/industries/e-commerce" },
        { title: "Engineering", href: "/industries/engineering" },
        { title: "IT", href: "/industries/it" },
      ],
    },
    { title: "Blogs", href: "/blogs" },
    { title: "Careers", href: "/careers" },
    { title: "Contact Us", href: "/contact" },
  ];

  const dropdownVariants = {
    hidden: { opacity: 0, y: 10, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.25, ease: "easeOut" } },
    exit: { opacity: 0, y: 6, scale: 0.98, transition: { duration: 0.15, ease: "easeIn" } },
  };

  const getGridCols = (length) => {
    if (length <= 4) return "grid-cols-1";
    if (length <= 8) return "grid-cols-2";
    if (length > 8) return "grid-cols-3";
    return "grid-cols-4";
  };

  

  return (
    <header className="fixed top-0  hleft-0 w-full bg-white/70 backdrop-blur-md shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="relative w-32 h-12">
            <Image src="/logo.png" alt="Allianz Logo" fill className="object-contain" />
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {menuItems.map((item, idx) => (
            <div
              key={idx}
              className="relative"
              onMouseEnter={() => {
                if (item.submenu) {
                  setOpenDropdown(item.title);
                  setActiveMenu(item.title);
                } else {
                  setOpenDropdown(null);
                  setActiveMenu(null); // reset underline for previous submenu
                }
              }}
              onMouseLeave={() => {
                if (!item.submenu) setActiveMenu(null);
                setOpenDropdown(null);
              }}
            >
              {!item.submenu ? (
                <Link
                  href={item.href}
                  className={` cursor-pointer
                    relative font-semibold transition-all duration-300
                    text-gray-700 hover:text-blue-600
                    after:content-[''] after:absolute after:left-0 after:-bottom-1
                    after:h-[3px] after:rounded-full
                    after:bg-gradient-to-r after:from-blue-500 after:to-cyan-400
                    after:transition-all after:duration-300
                    hover:after:w-full
                  `}
                >
                  {item.title}
                </Link>
              ) : (
                <button
                  className={` cursor-pointer
                    relative pb-1 font-semibold transition-all duration-300
                    ${activeMenu === item.title ? "text-blue-600" : "text-gray-700 hover:text-blue-600"}
                    after:content-[''] after:absolute after:left-0 after:-bottom-1
                    after:h-[3px] after:rounded-full
                    after:bg-gradient-to-r after:from-blue-500 after:to-cyan-400
                    after:transition-all after:duration-300
                    ${activeMenu === item.title ? "after:w-full" : "after:w-0 hover:after:w-full"}
                  `}
                >
                  {item.title}
                </button>
              )}

              {/* Dropdown */}
             {item.submenu && (
  <AnimatePresence>
    {(openDropdown === item.title || activeMenu === item.title) && (
      <motion.div
        key={item.title}
        variants={dropdownVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={`
          absolute top-full left-1/2 -translate-x-1/2 mt-2
          w-max min-w-[200px] 
          bg-white/95 dark:bg-gray-900/95
          backdrop-blur-xl
          border border-blue-100 dark:border-blue-900
          rounded-2xl shadow-2xl
          p-6 z-50
        `}
        style={{ transform: `translateX(-50%)` }} // keeps it centered under the menu
        onMouseEnter={() => setOpenDropdown(item.title)}
        onMouseLeave={() => {
          setOpenDropdown(null);
          setActiveMenu(null);
        }}
      >
        <p className="
          mb-4 text-lg font-bold
          bg-gradient-to-r from-blue-600 to-cyan-500
          bg-clip-text text-transparent
        ">
          {item.title}
        </p>
        <div className={`grid gap-1 ${getGridCols(item.submenu.length)}`}>
          {item.submenu.map((sub, subIdx) => (
            <Link
              key={subIdx}
              href={sub.href}
              className="
                group flex items-start gap-1 p-2 rounded-lg
                transition-all duration-300
                hover:bg-gradient-to-r
                hover:from-blue-50 hover:to-cyan-50
                dark:hover:from-blue-950 dark:hover:to-cyan-950
              "
            >
              <span className="
                mt-1 w-2 h-2 rounded-full
                bg-gradient-to-r from-blue-500 to-cyan-400
                opacity-70 group-hover:opacity-100 transition
              " />
              <div>
                <p className="
                  font-semibold text-gray-800 dark:text-gray-100
                  group-hover:text-blue-600 dark:group-hover:text-cyan-400
                  text-sm
                ">
                  {sub.title}
                </p>
               
              </div>
            </Link>
          ))}
        </div>
      </motion.div>
    )}
  </AnimatePresence>
)}

            </div>
          ))}
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          {/* Add hamburger menu here */}
        </div>
      </div>
    </header>
  );
}
