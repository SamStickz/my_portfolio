import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";
import { SiTailwindcss, SiFramer, SiTypescript } from "react-icons/si";
import "./TechOrbit.css"; // Create this file for animation

function TechnicalSkillsSection() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Git",
    "GitHub",
    "TypeScript",
    "Node.js",
    "Framer Motion",
  ];

  const orbitIcons = [
    <FaHtml5 />,
    <FaCss3Alt />,
    <FaJs />,
    <FaReact />,
    <SiTailwindcss />,
    <FaGitAlt />,
    <FaGithub />,
    <SiTypescript />,
    <FaNodeJs />,
    <SiFramer />,
  ];

  return (
    <section className="bg-[#020c1b] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-manrope text-white text-4xl mb-10">
          Technical Skills
        </h2>

        {/* Orbit Animation */}
        <div className="relative w-[300px] h-[300px] mx-auto mb-12">
          <div className="orbit">
            {orbitIcons.map((Icon, idx) => (
              <div
                key={idx}
                className="orbit-icon"
                style={{
                  transform: `rotate(${
                    (360 / orbitIcons.length) * idx
                  }deg) translateX(140px) rotate(-${
                    (360 / orbitIcons.length) * idx
                  }deg)`,
                }}
              >
                <span className="text-[#f9cb80] text-2xl">{Icon}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Grid of skills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="border border-[#f9cb80] text-[#f9cb80] py-3 px-4 text-center rounded-md shadow-md hover:scale-105 transition-transform duration-300"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechnicalSkillsSection;
