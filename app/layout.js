"use client"
import { usePathname } from "next/navigation"; 
import React from "react";
import { AuthProvider } from "./context/AuthContext";

export default function RootLayout({ children }) {
  const currentPath = usePathname(); 
  const lang = currentPath.split("/")[1] || "en"; 

  return (
    <html lang={lang}> 
      <body>
      <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
