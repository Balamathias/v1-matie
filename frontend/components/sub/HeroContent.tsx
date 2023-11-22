"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row gap-12 px-20 mx-auto mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="py-[8px] px-[7px] flex gap-4 rounded-lg shadow-lg border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-slate-100 mr-[10px] h-5 w-5" />
          <h1 className="welcome-text text-[20px]">
            Hi there! My name is <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Mathias</span>, I am a fullstack Web developer.
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            I provide
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              the best{" "}
            </span>
            project exprience for my clients.
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I understand that good design means good business and I don&apos;t take that for granted when it comes to my clients. I value the satisfaction of my clients for every service rendered, ranging from Web development, development of fullstack applications and technical writing.
        </motion.p>
        {/* <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-2xl max-w-[200px]"
        >
          Learn More!
        </motion.a> */}
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full justify-center items-center hidden md:flex"
      >
        <Image
          src="/static/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;