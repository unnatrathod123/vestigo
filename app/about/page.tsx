"use client";

import { useState } from "react";
import Abt from "./about"
import Link from 'next/link';
import Whopg from "./who/who";
import Whypg from "./why/why";
import Teampg from "./team/team";
import Partners from "./partners/partners";
//import { Page } from "./abc";

export default function About() {
  const [view, setView] = useState("about");

  return (
    <>
   <div className="flex w-full p-30">
      <Abt/>
    </div>
    
    </>


  );
}



