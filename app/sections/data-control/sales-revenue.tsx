"use client";

import Image from "next/image";
import { ProgressTripleBar } from "./progress-triple-bar";
import { motion } from "framer-motion";
import { AnimatedCounter } from "@/app/components/animated-counter";

const variants = {
  initial: { opacity: 0, x: -50, y: 40 },
  animate: { opacity: 1, x: 0, y: 0, transition: { duration: 0.7 } },
};

export const SalesRevenue = () => {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      variants={variants}
      className="bg-white min-w-[210px] rounded-3xl border border-[#F0F0F0] shadow-[#eaeaeaa7] shadow-xl relative top-[20px] -left-[20px] flex flex-col justify-between items-start gap-2 px-3 py-4"
    >
      <p className="text-ramos-grey-100 text-xs">Sales revenue</p>
      <div>
        <span>$ </span>
        <AnimatedCounter
          from={100}
          to={131}
          suffix="K"
          className="text-ramos-black  text-2xl mb-2"
        />
      </div>
      <ProgressTripleBar />
      <div className="flex flex-col w-full">
        <div className="flex justify-between items-center gap-10">
          <div className="flex justify-center items-center gap-1 relative -left-[5px]">
            <Image alt="user-female" src="/images/female-user.png" width={40} height={20} />
            <p className="text-ramos-grey-100 text-[10px]">Min. Price</p>
          </div>
          <p className="text-ramos-black text-[10px]">1,200 $</p>
        </div>
        <div className="flex justify-between items-center gap-10">
          <div className="flex justify-center items-center gap-1 relative -left-[5px]">
            <Image alt="user-female" src="/images/male-user.png" width={40} height={20} />
            <p className="text-ramos-grey-100 text-[10px]">Max. Price</p>
          </div>
          <p className="text-ramos-black text-[10px]">2,320 $</p>
        </div>
      </div>
      <hr className="border-[#eeeeee] border-[0.5px] w-full my-1 block" />
      <div className="flex justify-between items-center w-full">
        <p className="text-ramos-grey-100 text-[10px]">Engagement rate</p>
        <p className="text-ramos-black text-[10px]">47.84%</p>
      </div>
    </motion.div>
  );
};
