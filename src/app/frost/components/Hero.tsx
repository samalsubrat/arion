"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Spotlight } from "@/components/ui/Spotlight";
import { HoverBorderGradientButton } from "@/components/GlowButton";
const Hero = () => {
  return (
    <div className="-top-12 w-full rounded-md flex md:items-center md:justify-center bg-black-100 antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
        fill="white"
      />
      <Spotlight
        className="-top-40 left-full h-[80vh] w-[50vw]"
        fill="purple"
      />
      <div className="opacity-80">
        <Spotlight
          className="top-0 md:top-28 left-10 md:left-80 h-[80vh] w-[50vw]"
          fill="#A1E0DC"
        />
      </div>
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0 flex flex-col items-center mt-20 md:mt-40">
        <motion.div
          initial={{ opacity: 0, translateY: 10 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 1 },
            translateY: 0,
          }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-7xl font-bold text-center tracking-widest bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            FROST
          </h1>
          <p className="mt-4 font-normal text-base md:text-lg lg:text-xl text-neutral-300 max-w-lg text-center mx-auto">
            A masterpiece of modern engineering and design that&apos;s set to
            redefine your keyboard experience.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateY: 10 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 1 },
            translateY: 0,
          }}
          viewport={{ once: true }}
        >
          <Image
            src="/ArionFrost.png"
            alt="arionfrost"
            width={1285}
            height={432}
            className="my-10"
            priority
            draggable="false"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateY: 15 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 1.5,delay:0.5 },
            translateY: 0,
          }}
          viewport={{ once: true }}
        >
          <HoverBorderGradientButton text="Buy" />
        </motion.div>
      </div>
      <div className="bg-black-100 mask3 h-lvh w-lvw inset-x-0 absolute bottom-0" />
    </div>
  );
};

export default Hero;
