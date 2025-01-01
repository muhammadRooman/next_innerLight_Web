"use client"
// app/layout.js (Root Layout for the app)
import React from 'react';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Header, Footer or common structure */}
        {children}
      </body>
    </html>
  );
}
