import React from "react";
import Navbar from "./components/Navbar";
import { TracingBeam } from "@/components/ui/tracing-beam";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Scroll from "./components/Scroll";
import Project from "./components/Project";
import Sparkles from "./components/Sparkles";
import Preloader from "./components/Preloader";

const page = () => {
  return (
    <>
      <Preloader />
      <div className="min-h-screen overflow-hidden  bg-black">
        <TracingBeam className="relative">
          <div className=" max-w-7xl  mx-auto p-5  sm:p-5">
            <Navbar />
            <hr className="w-screen absolute -left-[3.4%]" />
            <HeroSection />
          </div>
          <div className="h-10 xl:h-32 bg-gradient-to-t form-black absolute -bottom-5 left-0 xl:bottom-0 w-full"></div>
          <div className="max-w-7xl mt-20  mx-auto  sm:p-5 p-5">
            <Skills />
          </div>
          <div className="mt-[3vw]">
            <Scroll />
          </div>
          <div className="max-w-7xl mt-20  mx-auto  sm:p-5 p-5">
            <Project />
          </div>
          <div>
            <Sparkles />
          </div>
        </TracingBeam>
      </div>
    </>
  );
};

export default page;
