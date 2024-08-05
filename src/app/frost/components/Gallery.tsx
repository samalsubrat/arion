'use client'

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { motion } from "framer-motion";
import Image from "next/image";

const Gallery = () => {
  return (
    <MaxWidthWrapper className="py-40">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-200 text-left">
        <span className="text-[#A1E0DC]">Gallery.</span>
      </h1>
      <div className="pt-10 lg:pt-20 space-y-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <motion.div
            initial={{ opacity: 0, translateX: -10 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 1 },
              translateX: 0,
            }}
            viewport={{ once: true }}
          >
            <Image
              src="/Gallery/arionFrost01.webp"
              alt="arionfrost"
              width={1440}
              height={960}
              className="rounded-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, translateX: -10 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 1, delay: 0.25 },
              translateX: 0,
            }}
            viewport={{ once: true }}
          >
            <Image
              src="/Gallery/arionFrost02.webp"
              alt="arionfrost"
              width={1440}
              height={960}
              className="rounded-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, translateX: -10 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 1, delay: 0.5 },
              translateX: 0,
            }}
            viewport={{ once: true }}
          >
            <Image
              src="/Gallery/arionFrost03.webp"
              alt="arionfrost"
              width={1440}
              height={960}
              className="rounded-lg"
            />
          </motion.div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <motion.div
            initial={{ opacity: 0, translateX: -10 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 1, delay: 0 },
              translateX: 0,
            }}
            viewport={{ once: true }}
          >
          <Image
            src="/Gallery/arionFrost04.jpg"
            alt="arionfrost"
            width={1920}
            height={1080}
            className="rounded-lg"
          />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, translateX: -10 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 1, delay: 0.5 },
              translateX: 0,
            }}
            viewport={{ once: true }}
          >
          <Image
            src="/Gallery/arionFrost05.jpg"
            alt="arionfrost"
            width={1920}
            height={1080}
            className="rounded-lg"
          />
          </motion.div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Gallery;
