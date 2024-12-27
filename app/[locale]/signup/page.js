"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import SignUpNow from "@/components/Event/SignUpNow";   
import FullPageLoader from "@/components/fullPageLoader.js/FullPageLoader";

export default function ThankYou() {
  const [loader, setLoader] = useState(true);
  const router = useRouter(); 
  const token = localStorage.getItem("authToken");

  useEffect(() => {
    if (token) {
      setLoader(false); 
      setTimeout(() => {
        router.push("/");
      }, 1000);
    } else {
      setLoader(false); 
    }
  }, [router, token]);

  if (loader) {
    return <FullPageLoader />;
  }

  return (
    <>
      <SignUpNow />
    </>
  );
}
