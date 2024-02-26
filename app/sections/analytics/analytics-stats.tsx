import AnimatedProgressBar from "@/app/components/animated-progress-bar";
import { motion } from "framer-motion";
import Image from "next/image";
import { LiveUpdateMeter } from "./live-update-meter";
import { AnimatedCounter } from "@/app/components/animated-counter";
import { Button } from "@/app/components/button";

export const AnalyticsStats = () => {
  return (
    <div className="bg-white pt-8 pl-8  border border-[#e6e6e67b] rounded-[50px] shadow-xl shadow-[#eaeaea84] flex justify-between items-center gap-8 overflow-hidden flex-[60%]">
      <div className="flex flex-col self-start">
        <Button className="self-start bg-ramos-yellow text-ramos-black rounded-lg py-2 px-3 text-[10px]  shadow-lg">
          Setting up reports
        </Button>
        <h4 className="text-[#1A1A1A] text-[20px] mt-14">
          Fast and easy access
          <br /> to analytics
        </h4>
        <p className="self-end text-[#9C9C9C] mt-6 text-sm leading-[20px] font-light">
          One platform is a comprehensive <br /> system of solution that will be the <br /> first
          step towards digitalization of <br /> your business!
        </p>
      </div>
      <div className="border rounded-[25px] border-b-0 rounded-bl-none rounded-r-none p-4 flex flex-col gap-2">
        <p className="text-ramos-black text-sm">Sales statistic</p>

        <div className="flex justify-between items-center gap-4">
          <div className="flex justify-center items-center gap-3">
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex rounded-[50px] bg-ramos-orange justify-center items-center w-[45px] h-[45px]"
            >
              <Image
                alt="user-connecting"
                src="/images/connecting-orange.png"
                width={25}
                height={0}
              />
            </motion.span>
            <div className="flex flex-col gap-1">
              <p className="text-[#9C9C9C] text-xs">Total profit</p>
              <p className="text-[#1A1A1A] text-2xl">$ 264.2k</p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-start gap-3 bg-[#F6F6F6] p-3 rounded-[20px] min-w-[115px]">
            <p className="text-[#1A1A1A] text-xs">Visitors</p>
            <AnimatedProgressBar />
            <div className="relative">
              <div className="absolute -right-[35px] -top-[3px]">
                <LiveUpdateMeter size="small" />
              </div>
              <AnimatedCounter
                from={24}
                to={56}
                suffix={"K"}
                className="text-[#1A1A1A] text-2xl font-light inline-flex min-w-[40px]"
              />
            </div>
          </div>
        </div>
        <div className="relative">
          <Image alt="graph" src="/images/graph.png" width={270} height={0} objectFit="cover" />
          <div className="px-[15px] py-[5px] flex flex-col justify-between absolute bottom-[16px] right-[19px] h-[64px] w-[100px] rounded-2xl bg-ramos-orange">
            <div className="flex justify-between items-center">
              <p className="text-white text-[10px]">Rate</p>
              <Image alt="bar-code" src="/images/pentagon.png" width={18} height={0} />
            </div>
            <AnimatedCounter
              from={10}
              to={58}
              suffix={"%"}
              prefix="+"
              className="text-white text-[20px] font-light inline-flex"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
