/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPrisma,
  SiMongodb,
} from "react-icons/si";

import raselImg from "../../../../public/Images/rasel.jpg";

/**
 * Skills data
 * Keep data pure and separate from JSX logic
 */
const skills = [
  {
    name: "JavaScript",
    icon: <SiJavascript size={40} className="text-yellow-400" />,
  },
  {
    name: "React",
    icon: <SiReact size={40} className="text-cyan-400" />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs size={40} className="text-white" />,
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs size={40} className="text-green-600" />,
  },
  {
    name: "Express.js",
    icon: <SiExpress size={40} className="text-gray-600" />,
  },
  {
    name: "Prisma",
    icon: <SiPrisma size={40} className="text-indigo-400" />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb size={40} className="text-green-500" />,
  },
];

/**
 * Duplicate skills for seamless infinite scroll
 */
const scrollingSkills = [...skills, ...skills];

export default function AboutMe() {
  return (
    <section className="w-full py-16 px-6 dark:text-white">
      {/* ================= ABOUT SECTION ================= */}
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto mb-16">
        <div className="md:w-1/3 flex justify-center">
          <Image
            src={raselImg}
            alt="Saiful Rasel"
            width={300}
            height={300}
            className="rounded-full object-cover shadow-lg"
            priority
          />
        </div>

        <div className="md:w-2/3 space-y-4">
          <h2 className="text-4xl font-bold">Hi, I'm <span className="text-blue-600">Saiful Rasel</span></h2>

          <p className="text-lg leading-relaxed">
            I'm a passionate Full Stack Developer specializing in building
            modern web applications using React, Next.js, Node.js, Express,
            Prisma, and MongoDB. I enjoy turning complex problems into elegant
            solutions and crafting scalable, maintainable code.
          </p>

          <p className="text-lg leading-relaxed">
            I love learning new technologies, collaborating with teams, and
            building projects that make a real difference.
          </p>
        </div>
      </div>

      {/* ================= SKILLS SECTION ================= */}
      <div className="max-w-6xl mx-auto overflow-hidden">
        <h3 className="text-3xl font-bold text-center mb-8">My Skills</h3>

        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 8,
            ease: "linear",
          }}
        >
          {scrollingSkills.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="min-w-[120px] flex flex-col items-center gap-1 p-3 bg-gray-100 dark:bg-gray-800 rounded-xl shadow hover:scale-105 transition-transform"
            >
              {skill.icon}
              <span className="text-sm">{skill.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
