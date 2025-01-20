"use client"
import { usePathname } from "next/navigation"; 
import React from "react";

export default function RootLayout({ children }) {
  const currentPath = usePathname(); 
  const lang = currentPath.split("/")[1] || "en"; 

  return (
    <html lang={lang}> 
      <body>
        {children}
      </body>
    </html>
  );
}
