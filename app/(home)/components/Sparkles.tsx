'use client'
import { SparklesCore } from "../../../components/ui/sparkles";
import { ButtonsCard } from "@/components/ui/tailwindcss-buttons";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import ShineBorder from "@/components/magicui/shine-border";
import { useRef, useState } from "react";


const Sparkles = () => {
  const [buttonText, setButtonText] = useState("COPY");
  const h3Ref =useRef<HTMLHeadingElement>(null);
  const copy = () => {
    if (h3Ref.current) {
      const textToCopy = h3Ref.current.innerText;
      copyToClipboard(textToCopy);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setButtonText("COPIED!");
    setTimeout(() => {
      setButtonText("COPY");
    }, 3000);
  };
  const button = [
    {
      name: {buttonText},
      description: "Button featured on Tailwindcss Connect website",
      showDot: false,
      component: (
        <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
          </span>
          <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
            <span>{buttonText}</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M10.75 8.75L14.25 12L10.75 15.25"
              ></path>
            </svg>
          </div>
          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
        </button>
      ),
    },
  ];
  const socials = [
    {
      Link: "https://www.linkedin.com/in/kirtan-gondaliya/",
      Label: "LinkedIn",
      Icon: FaLinkedin,
    },
    {
      Link: "https://github.com/kirtangondaliya",
      Label: "GitHub",
      Icon: FaGithub,
    },
    {
      Link: "https://leetcode.com/u/venom_kirtan/",
      Label: "LeetCode",
      Icon: SiLeetcode,
    },
    {
      Link: "https://x.com/Kirtan_2926",
      Label: "X",
      Icon: FaXTwitter,
    },
  ];
  return (
    <div className="h-[40rem] mt-[-5vw]  w-full flex  flex-col items-center justify-center overflow-hidden rounded-md relative">
      <h1 className="md:text-8xl sm:text-7xl text-5xl lg:text-9xl text-center  font-bold bg-clip-text text-transparent bg-gradient-to-b  dark:from-neutral-800 dark:to-neutral-800 ">
        Kirtan Gondaliya
      </h1>

      <div className="w-[40rem] h-40 relative">
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm"></div>
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4"></div>
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm"></div>
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4"></div>
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>

      <div className="flex items-center mt-5 justify-center gap-6">
        <h3 className="text-center" ref={h3Ref}>kirtangondaliya999@gmail.com</h3>
        <div>
          {button.map((button, idx) => (
            <ButtonsCard key={idx} onClick={()=>copy()}>
                {button.component}
              </ButtonsCard>
          ))}
        </div>
      </div>

      <div className="flex gap-4 items-center justify-center mt-6 mb-0">
        {socials.map((socials, idx) => {
          const Icon = socials.Icon;
          return (
            <Link href={socials.Link} key={idx}>
              <ShineBorder className="px-[0.9vw] py-[0.7vw]" color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}>
                
                  <Icon className="h-6 w-6" />
              </ShineBorder>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sparkles;
function copyToClipboard(textToCopy: any) {
  throw new Error("Function not implemented.");
}
