"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "../components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="pt-32 pb-24 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-8">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500 text-purple-300 text-sm mb-6">
              <span className="bg-purple-400 w-2 h-2 rounded-full mr-2"></span>
              start for free
            </span>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Manage Your Finances <br /> with <span className="text-green-400">FinanceJini</span>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-2xl mb-10">
            An AI-powered financial management platform that helps you track,
            analyze, and optimize your spending with real-time insights.
            </p>
            
            <div className="flex justify-center space-x-4">
              <Link href="/dashboard">
                <Button size="lg" className="px-6">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
  );
};

export default HeroSection;
