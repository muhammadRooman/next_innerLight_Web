"use client"
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ErrorPage() {
  const router = useRouter();
  const [lng, setLng] = useState(null); 

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('language')); 
    setLng(items);
  }, []); 

  if (lng === null) {
    return null;
  }

  const containerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    background: "linear-gradient(135deg, #f0f4f8, #d9e8ff)",
    fontFamily: "'Arial', sans-serif",
    padding: "20px",
  };

  const cardStyle = {
    backgroundColor: "#fff",
    borderRadius: "15px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    padding: "30px",
    maxWidth: "400px",
    textAlign: "center",
    width: "100%",
  };

  const headingStyle = {
    fontSize: "4rem",
    fontWeight: "bold",
    color: "#007bff",
    marginBottom: "15px",
    textShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)",
  };

  const subheadingStyle = {
    fontSize: "1.5rem",
    color: "#555",
    marginBottom: "10px",
  };

  const paragraphStyle = {
    fontSize: "1rem",
    color: "#666",
    marginBottom: "20px",
  };

  const buttonStyle = {
    padding: "12px 25px",
    fontSize: "1rem",
    color: "#fff",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "25px",
    cursor: "pointer",
    boxShadow: "0 4px 6px rgba(0, 123, 255, 0.3)",
    transition: "background-color 0.3s, transform 0.2s",
  };

  const buttonHoverStyle = {
    backgroundColor: "#0056b3",
    transform: "scale(1.05)",
  };

  const handleMouseOver = (e) => {
    Object.assign(e.target.style, buttonHoverStyle);
  };

  const handleMouseOut = (e) => {
    Object.assign(e.target.style, buttonStyle);
  };

  const goBackHandler = () =>{
      router.push("/")
  }
  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={headingStyle}>{lng === "en" ? "Oops!" : "عذرًا!"}</h1>
        <h2 style={subheadingStyle}>
          {lng === "en" ? "Something went wrong." : "حدث خطأ ما."}
        </h2>
        <p style={paragraphStyle}>
          {lng === "en" 
            ? "Sorry, we can't find the page you were looking for."
            : "عذرًا، لا يمكننا العثور على الصفحة التي كنت تبحث عنها."
          }
        </p>
        <button
          style={buttonStyle}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          onClick={goBackHandler}
        >
          {lng === "en" ? "Go to Home" : "الذهاب إلى الصفحة الرئيسية"}
        </button>
      </div>
    </div>
  );
}
