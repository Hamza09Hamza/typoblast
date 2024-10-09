"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Logo from "@/images/TypoBlast.png";
import HeroImage from "@/images/mac 2.png";

const HeroSec = () => {
  return (
    <section className="relative">
      <header className="pl-8 pt-4">
        <Image src={Logo} alt="Typo Blast" width={80} height={80} />
      </header>
      <div className="flex lg:pl-16 justify-center items-center">
        <div className="w-[60%] flex flex-col gap-8 h-64">
          <motion.h1
            className="text-[4rem] max-w-[80%] font-bold text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Unleash Your Typing Speed with TypoBlast
          </motion.h1>
          <motion.p
            className="text-lg max-w-[80%] text-purple-300"
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
            className=" cursor-pointer py-3 px-6 text-sm rounded-full max-w-[30%] font-sans font-medium text-white"
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
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Image src={HeroImage} alt="Hero Image" width={400} height={800} />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSec;
