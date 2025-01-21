"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import SignUpNow from "@/components/Event/SignUpNow";   
import FullPageLoader from "@/components/fullPageLoader.js/FullPageLoader";
import Head from "../signup/head";

export default function ThankYou() {
  const [loader, setLoader] = useState(true);
  const router = useRouter(); 
  const [token, setToken] = useState(false);

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    setToken(authToken !== null);
  }, []);

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
      <Head/>
      <SignUpNow />
    </>
  );
}
