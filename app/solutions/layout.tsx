import type { Metadata } from "next";
//import { Geist, Geist_Mono } from "next/font/google";
//import "./globals.css";
import About from "../about/page";
import Abt from "../about/about";

export const metadata: Metadata = {
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   
   <main className="pt-30">
          {children}
        </main>
       
        
       
   
  
  );
}
