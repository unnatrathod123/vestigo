"use client";

import { useState } from "react";

import Link from 'next/link';
import Chemical from "./chemical";

export default function About() {
  const [view, setView] = useState("industries");

  return (
    <>
   <div className="flex w-full p-30">
      <Chemical/>
    </div>
    
    </>


  );
}



