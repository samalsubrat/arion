"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const Bento = () => {
  return (
    <MaxWidthWrapper className="xl:px-20 2xl:px-60">
      {/* first row  */}
      <motion.div
        initial={{ opacity: 0, translateX: -10 }}
        whileInView={{
          opacity: 1,
          transition: { duration: 1 },
          translateX: 0,
        }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col lg:flex-row gap-6 justify-between">
          <div className="blue-gradient min-h-[300px] xl:h-[450px] w-full rounded-lg flex flex-col lg:flex-row">
            <div className=" text-white p-5 lg:p-10 w-full h-1/2 lg:h-full lg:w-1/2">
              <div className="text-2xl md:text-3xl lg:text-4xl mb-4 tracking-wide">
                Wired and Wireless
              </div>
              <p className="text-base text-slate-200 md:text-lg font-extralight">
                Multitask with Arion Frost&apos;s Bluetooth 5.1, connecting 3
                devices wirelessly for easy switching between your laptop,
                phone, and tablet on Mac and Windows. Wired USB-C connection
                also supported.
              </p>
            </div>
            <Image
              src="/ArionFrost01JPG.jpg"
              alt="Arion Frost"
              width={1765}
              height={962}
              className="max-lg:rounded-b-lg bottom-0 w-full h-1/2 lg:rounded-r-lg lg:right-0 lg:w-1/2 lg:h-full object-cover object-left"
            />
          </div>

          <div className="blue-gradient min-h-[300px] xl:h-[450px] w-full rounded-lg flex flex-col">
            <div className=" text-white p-5 lg:p-10 h-2/5">
              <div className="text-2xl md:text-3xl lg:text-4xl mb-4 tracking-wide">
                Ergonomic Support
              </div>
              <p className="text-base text-slate-200 md:text-lg font-extralight">
                Adjust your typing angle (3.5°, 7.5°, 10.5°) and enjoy ergonomic
                wrist support with curved OSA-profile keycaps.
              </p>
            </div>
            <Image
              src="/ArionFrost02.png"
              alt="Arion Frost"
              width={2553}
              height={960}
              className="rounded-b-lg bottom-0 w-full h-3/5 object-cover "
            />
          </div>
        </div>
      </motion.div>

      {/* second row  */}
      <motion.div
        initial={{ opacity: 0, translateX: -10 }}
        whileInView={{
          opacity: 1,
          transition: { duration: 1.5 },
          translateX: 0,
        }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col lg:flex-row gap-6 justify-between py-10 ">
          <div className="rounded-lg w-full bg-arion bg-cover p-10 min-h-[300px] xl:h-[550px] relative flex items-end">
            <div className="text-black font-medium w-full text-2xl md:text-3xl lg:text-4xl z-10 tracking-wide">
              Pre-lubed Gateron 3.0 Switches
            </div>
            <div className="bg-white/70 mask1 h-full w-full inset-x-0 absolute bottom-0 z-0 rounded-lg"></div>
          </div>
          <div className="blue-gradient rounded-lg w-full min-h-[300px] md:max-h-[550px] flex flex-col justify-between overflow-hidden">
            <div className=" text-white p-5 lg:p-10">
              <div className="text-2xl md:text-3xl lg:text-4xl mb-4 tracking-wide">
                Double-Shot OSA PBT Keycaps
              </div>
              <p className="text-base text-slate-200 md:text-lg font-extralight">
                They keycaps offer enhanced durability, resisting shine and
                wear, with high-quality legends that remain crisp and clear over
                time since they are molded into the keycap material.
              </p>
            </div>
            <Image
              src="/ArionFrost04.png"
              alt="Arion Frost"
              width={574}
              height={282}
              className="rounded-b-lg bottom-0 w-full  object-cover object-left md:block lg:hidden xl:block max-lg:h-[250px] flex-shrink"
            />
          </div>
          <div className="bg-arion2 rounded-lg w-full hidden lg:block"></div>
        </div>
      </motion.div>
    </MaxWidthWrapper>
  );
};

export default Bento;
