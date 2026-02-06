import type { Metadata } from "next";
import {  Poppins } from "next/font/google";
import "./globals.css";
import ClientProvider from "@/ClientProvider";



const popins = Poppins({
  subsets:['latin'],
  weight: ["400"]
})



export const metadata: Metadata = {
  title: "Shop Next App",
  description: "This is E-commerce Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${popins.className}`}
      >
  
        <ClientProvider>
        {children}
        </ClientProvider>
      </body>
    </html>
  );
}
