"use client"

import DefaultTags from "@/app/default-tags"; // Import DefaultTags component
import { useEffect, useState } from "react";

export default function Head() {
  const [lng, setLng] = useState(null); 

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('language')); 
    setLng(items);
  }, []); 


  if (lng === null) {
    return null; // Return null or a loading state until 'lng' is fetched
  }

  return (
    <>
      <DefaultTags
        title={lng === "en" ? "Home | InnerLight" : "الصفحة الرئيسية | ضوء داخلي"} // Dynamically set title based on language
        description="InnerLight is one of the best course and meditation websites"
        keywords="online InnerLight keywords"
      />
    </>
  );
}