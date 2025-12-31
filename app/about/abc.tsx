"use client";
import { useState } from "react";
import Whypg from "./why/why";
import Whopg from "./who/who";
import Teampg from "./team/team";
import Partners from "./partners/partners";

type InfoCardProps = {
  id: string;
  title: string;
  description: string;
};

export default function InfoCard({ title, description }: InfoCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
       
        <p className="text-gray-600">{description}</p>
        
     
      
    </div>
  );
}


export function Page() {
  const cards = [
    {
      id:Whopg,
      title: "Who We Are",
      description: "Allianz SE is a German multinational financial services and insurance company headquartered in Munich, Germany."+
      "It is one of the largest insurance and asset management firms in the world. "+
      "Its core operations include:"+ 
      `• Life insurance 
      • Health insurance 
      • Property & casualty (P&C) insurance 
      • Vehicle insurance 
      • Travel insurance 
      • Investment management & asset management 
      • Specialized global corporate insurance solutions
       The company serves customers in over 70 countries and manages hundreds of billions in assets while offering tailored coverage for both individuals and corporations.
      `
    },
    {
      id:Whypg,
      title: "Why Choose Us",
      description: "We focus on performance, design, and scalability.",
    },
    {
      id:Teampg,
      title: "Our Mission",
      description: "Deliver high-quality digital experiences.",
    },
    {
      id:Partners,
      title: "Who We Are",
      description: "We are a team building modern web applications.",
    },
  ];

  return (
    <div className="max-w-5xl l-5 mx-auto px-4 py-12">
      {/*<h1 className="text-5xl l-5 font-bold mb-8">About Us</h1>*/}

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-2">
        {cards.map((card, index) => (
          <InfoCard
            key={index}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
}
