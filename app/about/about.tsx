"use client";

import { useState } from "react";
import Whopg from "./who/who";
import Whypg from "./why/why";
import Teampg from "./team/team";
import Partners from "./partners/partners";

export default function Abt() {
  const [view, setView] = useState("about");

  const menuItems = [
    { id: "who", title: "Who Are We" },
    { id: "why", title: "Why Us" },
    { id: "team", title: "Our Team" },
    { id: "partners", title: "Our Partners" },
  ];

  return (
    <div className="p-4 w-full">
      {/* group wrapper */}
      <div className="group grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 scale-100 h-100">
        {menuItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setView(item.id)}
            className={`
              relative cursor-pointer rounded-xl border p-6 text-center
              bg-white
              transform-gpu transition-all duration-300 ease-out w-full min-h-[280px] 
                l-300 
              /* Dim all cards when group is hovered */
              group-hover:opacity-50

              /* Hovered card effects */
              hover:scale-110 hover:z-20 hover:opacity-100 hover:shadow-2xl

              ${
                view === item.id
                  ? "bg-blue-500 text-gray-700"
                  : "hover:bg-blue-100"
              }
            `}
          >
            <h3 className="text-lg font-semibold mb-4 scale-100 focus center">
              {item.title}
            </h3>

            <div className="text-left text-sm text-blue-300 max-h-[300px] overflow-y-auto pr-4">
              {view === "who" && item.id === "who" && <Whopg />}
              {view === "why" && item.id === "why" && <Whypg />}
              {view === "team" && item.id === "team" && <Teampg />}
              {view === "partners" && item.id === "partners" && <Partners />}
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}
