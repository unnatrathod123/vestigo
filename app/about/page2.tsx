"use client";

import { useState } from "react";
import Abt from "./page";
import Link from 'next/link';
import Whopg from "./who/who";
import Whypg from "./why/why";
import Teampg from "./team/team";
import Partners from "./partners/partners";
import { Page } from "./page";

export default function About() {
  const [view, setView] = useState("about");

  return (
    <>
   
   {/* <div className="flex right gap-10 space-between p-5">
      
      <Link href="/about/who" className="hover:text-blue-500">Who Are We    </Link>
      <Link href="" className="hover:text-blue-500">Why Us   </Link>
      <Link href="/solutions" className="hover:text-blue-500">Our Team   </Link>
      <Link href="/blogs" className="hover:text-blue-500">Our Partners   </Link>
                        
    </div> */}

    
        <div className="p-6">
          {/* Navigation */}
          <nav className="flex gap-4 mb-6">
            <button onClick={() => setView("who")} className="hover:text-blue-500">Who are we</button>
            <button onClick={() => setView("why")} className="hover:text-blue-500">Why Us</button>
            <button onClick={() => setView("team")} className="hover:text-blue-500">Our Team</button>
             <button onClick={() => setView("partners")} className="hover:text-blue-500">Our Partners</button>
             <button onClick={() => setView("abc")} className="hover:text-blue-500">About</button>
          </nav>
    
          {/* Views */}
          {view === "who" && <Whopg />}
          {view === "why" && <Whypg />}
          {view === "team" && <Teampg />}
          {view === "partners" && <Partners />}
          {view === "abc" && <Page />}
          
        </div>
    </>


  );
}