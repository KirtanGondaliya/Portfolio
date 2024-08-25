import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import ShineBorder from "@/components/magicui/shine-border";

const Navbar = () => {
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
    <nav className="py-10  flex items-center justify-between">
      <h1 className="text-3xl font-bold underline decoration-green-500 -rotate-2">
        Kirtan Gondaliya'🧑‍💻
      </h1>
      <div className="items-center flex  gap-4">
        {socials.map((socials, i) => {
          const Icon = socials.Icon;

          return (
            <Link
                key={i}
                className="hover:scale-[1.2] transition-all duration-200 ease-in"
                href={socials.Link}
                aria-label={socials.Label}
              >
                <ShineBorder
                className="relative flex  items-center justify-center  rounded-lg border  md:shadow-xl"
                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
              >
                <socials.Icon className="h-6 w-6" />
            </ShineBorder>
              </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
