"use client";

import { useRef } from "react";
import { ProgressPercentage } from "./progress-percentage";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const variants = {
  initial: { opacity: 0, x: 50, y: 40 },
  animate: { opacity: 1, x: 0, y: 0, transition: { duration: 0.7 } },
};

export const CustomerServiceCard = () => {
  return (
    <motion.div
      initial="initial"
      variants={variants}
      whileInView="animate"
      className="bg-white rounded-3xl border border-[#F0F0F0] flex flex-col justify-between items-center gap-4 py-8 min-w-[210px] shadow-[#eaeaeaa7] shadow-xl "
    >
      <p className="text-ramos-black text-xs">Conversion rate</p>

      <div className="relative">
        <ProgressPercentage text="2,3%" />
        <div className="h-[22px] w-[22px] p-[2px] absolute -top-[8px] -left-[8px] border rounded-full bg-ramos-grey flex justify-center items-center">
          <Image
            alt="user-connecting"
            src="/images/chain-rain.png"
            width={15}
            height={0}
            className="rounded-full"
          />
        </div>
      </div>

      <p className="text-ramos-grey-100 text-xs font-light">
        Percentage of
        <br /> website visitors
      </p>
    </motion.div>
  );
};
