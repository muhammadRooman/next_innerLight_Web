"use client"
import DefaultTags from "@/app/default-tags";
import { useEffect, useState } from "react";

export default function Head() {
  const [lng, setLng] = useState(null); 

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('language')); 
    setLng(items);
  }, []); 

  if (lng === null) {
    return null; 
  }

  return (
    <>
      <DefaultTags
        title={lng === "en" ? "Contact | InnerLight" : "الاتصال | ضوء داخلي"}
        description="InnerLight is one of the best course and meditation websites"
        keywords="online InnerLight keywords"
      />
    </>
  );
}



