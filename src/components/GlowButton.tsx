"use client";
import React from "react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { cn } from "@/lib/utils";

export function HoverBorderGradientButton({className, text}:{className?:string,text:string}) {
  return (
    <div className={cn("flex justify-center text-center",className)} onClick={event =>  window.location.href='https://www.meckeys.com/brand/arion/'}>
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="bg-gradient-to-b from-[#1A2331] to-[#0A1423] text-white flex items-center text-sm md:text-base"
      >
        <span>{text}</span>
      </HoverBorderGradient>
    </div>
  );
}


