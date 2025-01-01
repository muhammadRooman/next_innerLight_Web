"use client"
// app/not-found.js
import React from 'react';
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div>
      <h1>404 - Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <button onClick={() => router.push('/')}>Go to Home</button>
    </div>
  );
}
