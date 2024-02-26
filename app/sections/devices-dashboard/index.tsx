"use client";

import Image from "next/image";
import { MotionProps, motion } from "framer-motion";
import { AnimatedScaledText } from "./animated-scaled-text";
import { Reveal } from "@/app/components/reveal";

export const DevicesDashboard = () => {
  return (
    <section className="bg-[#F9F9F9]  overflow-hidden rounded-[100px]  h-full">
      <div className="pt-[100px]  pl-10 relative z-[2]">
        <div className="flex justify-between items-start">
          <div>
            <Reveal>
              <p className="text-4xl text-ramos-black">
                Turning data into real
                <br /> actions and ideas.
              </p>
            </Reveal>

            <div className="flex flex-col gap-4 mt-20">
              <AccordionHeader
                initialTransition={{ y: "75px" }}
                whileInViewTransition={{ y: 0 }}
                title="Instant Insights"
              />

              <AccordionHeader
                initialTransition={{ y: "-25px" }}
                whileInViewTransition={{ y: 0 }}
                title="AI technology"
              />

              <AccordionHeader
                initialTransition={{ y: "-90px" }}
                whileInViewTransition={{ y: 0 }}
                title="Easy integration"
              />
            </div>
          </div>

          <div className="relative left-[40px]">
            <motion.div
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              exit={{ opacity: 0 }}
              className="absolute -left-[250px] -bottom-[100px] z-10"
            >
              <Image
                alt="laptop"
                src="/images/phone.png"
                width={290}
                height={0}
                className="relative left-[100px] top-0"
              />
            </motion.div>
            <motion.div
              initial={{ y: 200 }}
              whileInView={{ y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="relative h-[700px] w-[700px]"
            >
              <Image alt="laptop" src="/images/laptop.png" fill className="relative" />
              <div className="absolute -left-[22px] top-[33px] h-[635px] w-[900px] ">
                <div className="absolute h-[19px] w-[19px] bg-white top-0 left-[50px] z-20 " />
                <Image
                  alt="laptop"
                  src="/images/dashboard.png"
                  fill
                  objectFit="contain"
                  className="absolute left-[50px] top-0 rounded-3xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="h-[220px] relative top-[-65px] rotate-[180deg]  bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]" />
      <div className="h-[120px]  bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <AnimatedScaledText
          className="relative  text-[380px]  -top-[400px] left-[30px]"
          text="Ramos"
        />
      </div>
    </section>
  );
};

const AccordionHeader = ({
  title,
  initialTransition,
  whileInViewTransition,
}: {
  title: string;
  initialTransition: MotionProps["initial"];
  whileInViewTransition: MotionProps["whileInView"];
}) => {
  return (
    <motion.div
      initial={initialTransition}
      whileInView={whileInViewTransition}
      transition={{ duration: 0.5 }}
      viewport={{ amount: 0.5 }}
      exit={{ opacity: 0 }}
      className="bg-white flex justify-between items-center py-4 px-8 rounded-3xl shadow-[#eaeaeaa7] shadow-xl"
    >
      <p className="text-lg text-ramos-black">{title}</p>
      <button className="text-ramos-black text-lg bg-[#f0f0f0] h-[40px] w-[40px]  flex items-center justify-center rounded-full">
        +
      </button>
    </motion.div>
  );
};
