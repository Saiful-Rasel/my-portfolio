/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPrisma,
  SiMongodb,
} from "react-icons/si";
import raselImg from "../../../../public/Images/rasel.jpg"
const skills = [
  {
    name: "JavaScript",
    icon: <SiJavascript size={40} className="text-yellow-400" />,
  },
  { name: "React", icon: <SiReact size={40} className="text-cyan-400" /> },
  { name: "Next.js", icon: <SiNextdotjs size={40} className="text-white" /> },
  {
    name: "Node.js",
    icon: <SiNodedotjs size={40} className="text-green-600" />,
  },
  {
    name: "Express.js",
    icon: <SiExpress size={40} className="text-gray-600" />,
  },
  { name: "Prisma", icon: <SiPrisma size={40} className="text-indigo-400" /> },
  { name: "MongoDB", icon: <SiMongodb size={40} className="text-green-500" /> },
];

export default function AboutMe() {
  return (
    <section className="w-full min-h-screen  dark:text-white py-16 px-6">
      {/* Top Section: Image + About */}
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto mb-16">
        <div className="md:w-1/3 flex justify-center">
          <Image
            src={raselImg}
            alt="Saiful Rasel"
            width={300}
            height={300}
            className="rounded-full object-cover shadow-lg"
          />
        </div>
        <div className="md:w-2/3 space-y-4">
          <h2 className="text-4xl font-bold">Hi, I'm Saiful Rasel</h2>
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

      {/* Skills Section */}
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-8">My Skills</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 justify-items-center">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center gap-1 p-3 bg-gray-100 dark:bg-gray-800 rounded-xl shadow hover:scale-105 transition-transform"
            >
              {skill.icon}
              <span className="text-sm">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-6xl mx-auto mt-16 text-center">
        <h3 className="text-3xl font-bold mb-4">Let's Connect!</h3>
        <p className="mb-6 text-lg">
          I'm always excited to work on new projects or collaborate. Feel free
          to reach out!
        </p>
        <a
          href="https://mail.google.com/mail/?view=cm&to=ssaifulrasel737rf@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition-colors"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
