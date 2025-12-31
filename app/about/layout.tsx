import type { Metadata } from "next";
//import { Geist, Geist_Mono } from "next/font/google";
//import "./globals.css";
import About from "../about/page";
import Abt from "./about";
export const metadata: Metadata = {
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   
   <main className="">
          {children}
        </main>
       
        
       
   
  
  );
}
