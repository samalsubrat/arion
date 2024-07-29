"use client";

import { motion, useTransform, useViewportScroll } from "framer-motion";
import MaxWidthWrapper from "../MaxWidthWrapper";

const About = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
  return (
    <>
      <MaxWidthWrapper className="py-40">
        <motion.div
          initial={{ opacity: 0, translateY: 10 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 1 },
            translateY: 0,
          }}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-200 text-left">
            Why <span className="text-[#A1E0DC]">Arion?</span>
          </h1>
        </motion.div>
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 lg:grid-cols-3 grid-rows-1 pt-20 max-lg:space-y-10 lg:space-x-10">
            {/* quality assurance */}
            <motion.div
              initial={{ opacity: 0, translateY: 10 }}
              whileInView={{
                opacity: 1,
                transition: { delay: 0.3, duration: 1 },
                translateY: 0,
              }}
              viewport={{ once: true }}
            >
              <div className="space-y-8">
                <div className="text-base md:text-lg lg:text-xl text-gray-400">
                  01
                </div>
                <div className="bg-gray-400 w-full h-[0.5px]" />
                <div className="text-xl md:text-2xl lg:text-3xl text-white">
                  Quality Assurance:
                </div>
                <p className="text-base md:text-lg lg:text-xl font-extralight text-white">
                  Arion provides top-quality mechanical keyboards and gaming
                  peripherals tested for performance and durability.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, translateY: 10 }}
              whileInView={{
                opacity: 1,
                transition: { delay: 0.8, duration: 1 },
                translateY: 0
              }}
              viewport={{ once: true }}
            >
              {/* customer service  */}
              <div className="space-y-8">
                <div className="text-base md:text-lg lg:text-xl text-gray-400">
                  02
                </div>
                <div className="bg-gray-400 w-full h-[0.5px]" />
                <div className="text-xl md:text-2xl lg:text-3xl text-white">
                  Customer Support:
                </div>
                <p className="text-base md:text-lg lg:text-xl font-extralight text-white">
                  Exceptional customer service and support to assist with any
                  queries or issues.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, translateY: 10 }}
              whileInView={{
                opacity: 1,
                transition: { delay: 1.3, duration: 1},
                translateY: 0
              }}
              viewport={{ once: true }}
            >
              {/* community engagement */}
              <div className="space-y-8">
                <div className="text-base md:text-lg lg:text-xl text-gray-400">
                  03
                </div>
                <div className="bg-gray-400 w-full h-[0.5px]" />
                <div className="text-xl md:text-2xl lg:text-3xl text-white">
                  Community Engagement:
                </div>
                <p className="text-base md:text-lg lg:text-xl font-extralight text-white">
                  Active engagement with the gaming community through events,
                  giveaways, and forums.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default About;
