"use client";
import React from "react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

export function HoverBorderGradientButton() {
  return (
    <div className="flex justify-center text-center" onClick={event =>  window.location.href='https://www.meckeys.com/brand/arion/'}>
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="bg-gradient-to-b from-[#1A2331] to-[#0A1423] text-white flex items-center"
      >
        <span>Explore Now</span>
      </HoverBorderGradient>
    </div>
  );
}


