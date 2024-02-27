"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            Cody
            <br></br>
            <TypeAnimation
              sequence={[
                "Cody",
                1000,
                "A Web Developer",
                1000,
                "A Mobile Developer",
                1000,
                "A UI/UX Designer",
                1000,
                "An Engineer",
                1000,
                "An Educator",
                1000,
                "A Welder",
                1000,
                "A Mechanic",
                1000,
                "A Volunteer",
                1000,
              ]}
              wrapper="span"
              speed={25}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl pr-10">
            Lorem ipsum dolar sit amet consectetur adipisicing elit. Other stuff
            otherstuff VOluptatum.
          </p>
          <div>
            <Link href="#contact">
              <div className="px-6 py-3 rounded-full w-full h-full sm:w-fit mr-4 bg-gradient-to-br from-blue-700 via-purple-600 to-[#d10000]  text-white group relative">
                Hire Me
                <span className="absolute top-0 left-0 w-full h-full rounded-full -z-1 opacity-0 bg-gradient-to-br from-blue-700 via-purple-600 to-[#d10000] group-hover:buttonPulse"></span>
              </div>
            </Link>

            <button className="inline-block px-1 py-1 rounded-full w-full sm:w-fit mr-4 bg-gradient-to-br from-blue-700 via-purple-600 to-[#d10000] text-white  mt-3 relative group">
              <div className="block rounded-full w-full bg-[#181818] z-10 hover:bg-slate-800 px-5 py-2">
                <a
                  href="docs/resume-2024.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Resume
                </a>
              </div>
            </button>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/code1719avatarredo.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
