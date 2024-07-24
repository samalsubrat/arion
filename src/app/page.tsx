"use client";

import { HoverBorderGradientButton } from "@/components/GlowButton";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Grid } from "@/components/Landing Page/Grid";
import Image from "next/image";
import About from "@/components/Landing Page/About";
import Products from "@/components/Landing Page/Products";
import Reels from "@/components/Landing Page/Reels";

const page = () => {
  return (
    <>
      <div className="bg-black-100">
        <AuroraBackground className="w-full -top-10 ">
          <MaxWidthWrapper className="flex flex-col gap-4 items-center text-center justify-center w-full z-50 -top-20">
            <p className="uppercase tracking-widest text-center text-blue-100 max-w-80">
              A R I O N
            </p>
            <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center ">
              Elevate Your <span className="text-[#A1E0DC]">Experience.</span>
            </div>
            <div className="font-extralight text-base md:text-lg lg:text-2xl text-neutral-200 py-2">
              Premium Mechanical Keyboards and Accessories
            </div>
            <HoverBorderGradientButton />
          </MaxWidthWrapper>
        </AuroraBackground>
        <div className="relative -mt-32 z-40">
          <Grid />
        </div>
        <Image
          src="/BG.png"
          alt="grid"
          className="absolute bottom-0 opacity-10 mask1 bg-black-100"
          layout="fill"
          priority
        />
        <About />
        <Products/>
        <Reels/>
      </div>
    </>
  );
};

export default page;
