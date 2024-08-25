import ShimmerButton from "@/components/magicui/shimmer-button";
import { FlipWords } from "@/components/ui/flip-words";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Link from "next/link";
import React from "react";
import {AllLinks} from './../../data/data'

const HeroSection = () => {
  const words = ["Full Stack Developer.", "Problem Solver.", "Programmer."];
  const wordslength = ` Passionate Full Stack Developer with a keen eagerness to
 learn and tackle complex tasks, continually striving for
 growth and new knowledge. Proven ability to turn
 challenges into opportunities for development.
`;

  return (
    <div className="flex min-h-[65vh] items-center lg:flex-row flex-col-reverse gap-14 lg:gap-0   justify-between relative">
      <div className="text-center lg:text-left">
        <h1 className="text-4xl lg:text-7xl font-bold">Nice to meet you!👋 </h1>
        <h1 className="text-3xl mb-[2vw] lg:text-7xl font-bold">
          I'm
          <span className="text-3xl lg:text-6xl font-bold">
            <FlipWords  words={words} className=" border-green-500 z-[1]" />
          </span>
        </h1>
        <TextGenerateEffect words={wordslength} className="md:w-96 lg:w-[72%] text-gray-300" />
        <Link href="#" className="inline-block group">
          <div className="mt-[2vw] mr-6">
            <h1 className="text-3xl group-hover:text-green-500 transition-all duration-100 ease-in font-bold">MY CV📖</h1>
            <div className="w-24 h-2 bg-green-500 rounded-full"></div>
            <div className="w-24 h-2 bg-indigo-500 translate-x-2 rounded-full"></div>
          </div>
        </Link>
        <Link href="#" className="inline-block group">
          <div className="mt-[2vw]">
            <h1 className="text-3xl group-hover:text-green-500 transition-all duration-100 ease-in font-bold">Contact Me📱</h1>
            <div className="w-40 h-2 bg-green-500 rounded-full"></div>
            <div className="w-40 h-2 bg-indigo-500 translate-x-2 rounded-full"></div>
          </div>
        </Link>
      </div>
      <div className="relative">
        <div className="w-72 h-72  space-y-3 -rotate-[30deg]">
          <div className="flex gap-3 translate-x-8">
                <div className="w-32 h-32 rounded-2xl bg-green-500"></div>
                <div className="w-32 h-32 rounded-full bg-indigo-500"></div>
          </div>
          <div className="flex gap-3 -translate-x-8">
                <div className="w-32 h-32 rounded-2xl bg-indigo-500"></div>
                <div className="w-32 h-32 rounded-full bg-green-500"></div>
          </div>
          
        <div className="glow absolute right-1/2 top-[40%] -z-10"></div>
        </div>
        <ShimmerButton className="shadow-xl sm:left-[10%] md:left-[10%] hover:scale-[1.1] px-4 py-2 absolute top-[60%] lg:-left-[20%]">
         <span className="whitespace-pre-wrap text-center font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
         👜 Available for Work</span>
      </ShimmerButton>
      </div>
    </div>
  );
};

export default HeroSection;
