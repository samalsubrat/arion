"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

const Ending = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, translateY: 20 }}
        whileInView={{
          opacity: 1,
          transition: { duration: 1 },
          translateY: 0,
        }}
        viewport={{ once: true }}
      >
        <MaxWidthWrapper className="flex flex-col gap-4 items-center text-center justify-center w-full z-50 py-40 bg-gradient-to-t from-[#020A16]">
          <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center ">
            Take your setup to{" "}
            <span className="text-[#A1E0DC]">next level.</span>
          </div>
          <div className="font-extralight text-base md:text-lg lg:text-2xl text-neutral-200 py-2">
            There&apos;s no need to wait further.
          </div>
          <button className="pl-8 pr-6 py-3 font-medium transform transition-all duration-300 hover:bg-[#A1E0DC] hover:text-black rounded-full text-white border-2 border-[#A1E0DC] flex text-center justify-end items-center">
            Buy now
            <ChevronRight className="h-6 w-6" />
          </button>
        </MaxWidthWrapper>
      </motion.div>
      
    </>
  );
};

export default Ending;
