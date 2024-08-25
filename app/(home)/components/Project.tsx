'use client'
import React from "react";
import { SiHtml5, SiJavascript, SiReact, SiTailwindcss } from "react-icons/si";
import Title from "./Title";
import { cn } from "@/lib/utils";
import Icon from "react-icons/si";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { ChevronRight } from "lucide-react";
import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
import Link from "next/link";
import { AllLinks } from "@/app/data/data";

const Project = () => {
  const project = [
    {
      title: "SIGNIFICO WEBSITE",
      tech: [SiHtml5, SiTailwindcss, SiJavascript],
      link: "https://significo-git-main-kirtangondaliyas-projects.vercel.app/",
      cover: "/project-1.png",
      background: "bg-indigo-500",
    },
    {
      title: "OCHI Design",
      tech: [, SiReact, SiTailwindcss, SiJavascript],
      link: "https://ochidesign-nz9jugtjc-kirtangondaliyas-projects.vercel.app/",
      cover: "/project-2.png",
      background: "bg-green-500",
    },
    {
      title: "LAZAREV WEBSITE",
      tech: [SiHtml5, SiTailwindcss, SiJavascript],
      link: "https://lazarev-website-clone-git-main-kirtangondaliyas-projects.vercel.app/",
      cover: "/project-3.png",
      background: "bg-purple-500",
    },
    {
      title: "OBYS AGENCY",
      tech: [SiHtml5, SiTailwindcss, SiJavascript],
      link: "https://github.com/KirtanGondaliya/Obys-Agency",
      cover: "/project-4.png",
      background: "bg-yellow-500",
    },
  ];

  return (
    <div className="py-10 p-5 sm:p-0">
      <Title
        text="Projects🖥️"
        className="flex flex-col items-center justify-center rotate-6"
      />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 pt-20">
        {project.map((project, i) => {
          return (
            <Link href={project.link} key={i}>
              <div className={cn("p-1 rounded-md", project.background)}>
                <DirectionAwareHover
                  imageUrl={project.cover}
                  className="w-full  cursor-pointer"
                >
                  <div className="space-y-5">
                    <h1 className="text-3xl font-bold">{project.title}</h1>
                    <div className="flex items-center gap-5">
                      {project.tech.map((Icon, index) => {
                        return (<Icon className="w-8 h-8" key={index} />)
                      })}
                    </div>
                  </div>
                </DirectionAwareHover>
              </div>
            </Link>
          );
        })}
      </div>
      <Link href={AllLinks.github} className="flex items-center justify-center mt-[4.5vw]">
      <AnimatedGradientText   className="text-[1vw] px-2 py-1">
        🎉 <hr className="mx-2 h-5 w-[1px] shrink-0 bg-gray-300" />{" "}
        <span
          className={cn(
            `inline  animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent text-[1.1vw]`,
          )}
        >
        View All Projects
        </span>
        <ChevronRight className="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
      </AnimatedGradientText>
      </Link>
    </div>
  );
};

export default Project;
