"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>PostgreSQL</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Automotive Mechanics</li>
        <li>Heavy Duty Diesel Mechanics</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Davis Technical College</li>
        <li>Tooele Technical College</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Davis Technical College Welding Sciences Certification</li>
        <li>AWS Certified Welder #221014701W</li>
        <li>Tooele Technical College Diesel Technician Certification</li>
        <li>Air Brake Technician Certification</li>
        <li>Esco EPA Section 608 Certification #1246994778130</li>
        <li>
          Esco EPA Section 609 Type I - Type III Certification #1246994778130
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/code1719_computerstation.png"
          alt="future_computer"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base md:text-lg">
            I am a software development student on an exciting journey into the
            world of technology. With a diverse background that spans from IT
            support to engineering in medical facilities, welding, and diesel
            technologies, I bring a unique perspective to my work.
          </p>
          <br></br>
          <p className="text-base md:text-lg">
            My current focus lies in mastering a range of technologies including
            JavaScript, React, Redux, Node.js, PostgreSQL, HTML, CSS, and Git.
            As a quick learner with a tendency to hyperfocus on subjects that
            captivate my interest, I dive deep into each new concept and skill,
            constantly expanding my knowledge base.
          </p>
          <br></br>
          <p className="text-base md:text-lg">
            In addition to my studies, I&apos;m actively involved in education,
            teaching Industrial Automation, Welding, and Diesel Technologies.
            This hands-on experience not only reinforces my own learning but
            also allows me to share my passion for technology with others.
          </p>
          <br></br>
          <p className="text-base md:text-lg">
            Driven by a desire to create innovative solutions and contribute
            positively to the tech community, I&apos;m dedicated to honing my
            skills and taking on new challenges. Explore my portfolio to see
            some of the projects I&apos;ve been working on and get in touch to
            collaborate on exciting opportunities!
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
