"use client"
import React from "react";
import Footer from "../components/Footer/page";
import Com from "../components/CommonNav/page";
import Link from "next/link";

const Cancel = () => {
  return (
    <div className="bg-[#0d0d0d] text-white min-h-screen">
      <Com />
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-[#1a1a1a] p-8 rounded-lg shadow-2xl max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-red-500 mb-4">Payment Cancelled</h2>
          <p className="text-lg mb-4">Your payment was not processed. Please try again or contact support.</p>
          <Link href="mainpage"><button className="bg-[#FF9F0D] text-white py-3 px-6 rounded-md">
            Try Again
          </button></Link> 
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cancel;