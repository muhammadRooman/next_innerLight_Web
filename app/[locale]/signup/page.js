"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import SignUpNow from "@/components/Event/SignUpNow";   
import FullPageLoader from "@/components/fullPageLoader.js/FullPageLoader";

export default function ThankYou() {
  const [loader, setLoader] = useState(true);
  const router = useRouter(); // Use the router for navigation
  const token = localStorage.getItem("authToken");

  useEffect(() => {
    if (token) {
      setLoader(false); // Stop the loader if token exists

      // Redirect to the home page after 1 second
      setTimeout(() => {
        router.push("/");
      }, 1000);
    } else {
      setLoader(false); // If no token, stop the loader and show SignUpNow component
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
