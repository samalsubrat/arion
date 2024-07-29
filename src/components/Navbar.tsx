'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const Navbar = () => {
  const {scrollY} = useScroll();

  const [hidden,setHidden] = useState(false);

  useMotionValueEvent(scrollY,"change", (latest) => {
    const previous = scrollY.getPrevious(); 
    if(latest>previous! && latest > 100){
      setHidden(true)
    }
    else{
      setHidden(false)
    }
  })

  return (
    <motion.nav 
    variants={{
      visible : {y:0},
      hidden: {y:"-150%"}
    }}
    animate = {hidden ? "hidden":"visible"}
    transition = {{duration:0.35, ease:"easeInOut"}}

    className=" flex justify-center mx-auto max-w-fit sticky rounded-full border border-gray-700/60 bg-black/25 top-5 z-[99999] backdrop-blur-xl transition-all duration-300 ">
      <div className="inline-block fit-content text-gray-300 ease-in-out duration-300">
        <div className="flex gap-5 p-2 px-8 items-center z-30">
          <Link
            href="/"
            className="flex z-40 font-regular hover:font-semibold hover:text-white ease-in-out duration-300"
          >
            Home
          </Link>
          <Link
            href="/"
            className="flex z-40 font-regular hover:font-semibold hover:text-white ease-in-out duration-300"
          >
            Frost
          </Link>
          <Link
            href="/"
            className="flex z-40 font-regular hover:font-semibold hover:text-white ease-in-out duration-300"
          >
            Coiled Cable
          </Link>
          <Link
            href="/"
            className="flex z-40 font-regular hover:font-semibold hover:text-white ease-in-out duration-300"
          >
            Deskmat
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
