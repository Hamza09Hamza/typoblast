"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Logo from "@/images/TypoBlast.png";
import HeroImage from "@/images/mac 2.png";

const HeroSec = () => {
  return (
    <section className="relative min-h-screen ">
      <header className="p-4 sm:p-6 md:p-8">
        <Image
          src={Logo}
          alt="Typo Blast"
          width={80}
          height={80}
          className="w-16 h-16 sm:w-20 sm:h-20"
        />
      </header>
      <div className="flex flex-col lg:flex-row justify-center items-center px-4 sm:px-6 md:px-8 lg:px-16 py-8 lg:py-0">
        <div className="w-full lg:w-[60%] flex flex-col gap-6 lg:gap-8 mb-8 lg:mb-0">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] font-bold text-white leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Unleash Your Typing Speed with TypoBlast
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg text-purple-300 max-w-2xl"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Challenge yourself, improve your skills, and become a typing master.
            Join thousands of users who have transformed their typing abilities
            with TypoBlast.
          </motion.p>
          <motion.button
            onClick={() => window.location.assign("start")}
            className="cursor-pointer py-3 px-6 text-sm sm:text-base rounded-full font-sans font-medium text-white w-full sm:w-auto max-w-xs"
            style={{
              background: "linear-gradient(165deg, #550176 5%, #9F01DC 100%)",
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Start Typing Challenge
          </motion.button>
        </div>
        <motion.div
          className="w-full lg:w-[40%] flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Image
            src={HeroImage}
            alt="Hero Image"
            width={400}
            height={800}
            className=" lg:max-w-lg xl:max-w-xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSec;
