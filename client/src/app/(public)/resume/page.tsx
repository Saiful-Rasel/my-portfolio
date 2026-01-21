"use client";

import React from "react";
import Image from "next/image";
import {
  Download,
  Mail,
  MapPin,
  Phone,
  Github,
  Linkedin,
  ExternalLink,
  GraduationCap,
  Briefcase,
  User,
  Sparkles,
} from "lucide-react";
import raselImg from "../../../../public/Images/rasel.jpg";
import { motion } from "framer-motion";

const ResumePage = () => {
  const skills = [
    "JavaScript (ES6+)",
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "Prisma",
    "MongoDB",
    "Postgres",
    "Tailwind CSS",
    "TypeScript",
    "HTML",
    "CSS",
  ];

  // Updated experience section with projects & learning achievements
  const experience = [
    {
      title: "Personal Portfolio Website",
      company: "Self-Project",
      date: "2025",
      description:
        "Built a responsive and modern portfolio website using Next.js, Tailwind CSS, and TypeScript. Implemented dark/light mode, animations, and responsive design.",
    },
    {
      title: "E-commerce Web App",
      company: "Personal Project",
      date: "2025",
      description:
        "Developed a full-stack e-commerce application with Next.js and Node.js. Integrated payment gateways, product search, and admin dashboard.",
    },
    {
      title: "Open Source Contributor",
      company: "GitHub",
      date: "2025",
      description:
        "Contributed to multiple open-source projects by fixing bugs, writing documentation, and implementing new features in React and Node.js libraries.",
    },
  
    {
      title: "TypeScript Mastery",
      company: "Self-Learning",
      date: "2025",
      description:
        "Completed multiple projects using TypeScript with a focus on type-safety and clean architecture, including building a full-stack digital wallet app.",
    },
  ];

  const education = [
    {
      degree: "BBA",
      school: "Noakhali Government College",
      date: "2021 - 2022",
    },
    {
      degree: "Higher Secondary Certificate",
      school: "Government Science College",
      date: "2019 - 2020",
    },
    {
      degree: "Secondary Certificate",
      school: "Noakhali Zilla School",
      date: "2017 - 2018",
    },
  ];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-black rounded-xl text-neutral-200 pt-32 pb-20 px-4 sm:px-6 lg:px-8 selection:bg-blue-500/30">
      {/* Background Accents */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none no-print">
        <div className="absolute -top-[25%] -left-[10%] w-[50%] h-[50%] bg-blue-500/10 blur-[120px] rounded-full" />
        <div className="absolute -bottom-[25%] -right-[10%] w-[50%] h-[50%] bg-purple-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header Actions */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-12 no-print">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-400">
              Professional Resume
            </h1>
            <p className="text-neutral-500 mt-2">
              Available for viewing and download
            </p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={handlePrint}
              className="group flex items-center gap-2 bg-white text-black px-8 py-4 rounded-2xl font-bold transition-all hover:scale-105 active:scale-95 shadow-xl shadow-white/10"
            >
              <Download size={20} className="group-hover:bounce" />
              Download Resume
            </button>
          </div>
        </div>

        {/* Resume Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-neutral-900/50 backdrop-blur-xl border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl print:bg-white print:border-none print:shadow-none print:text-black print:rounded-none"
        >
          {/* Upper Profile Section */}
          <div className="relative border-b border-white/10 p-8 md:p-14 print:p-0 print:border-none">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-14">
              {/* Image with Decorative Ring */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 print:hidden"></div>
                <div className="relative w-44 h-44 md:w-52 md:h-52 rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl print:border-2 print:border-black/10">
                  <Image
                    src={raselImg}
                    alt="Saiful Rasel"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Info */}
              <div className="flex-1 text-center md:text-left space-y-6">
                <div className="space-y-2">
                  <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight print:text-black">
                    Saiful Rasel
                  </h2>
                  <p className="text-blue-400 text-xl md:text-2xl font-semibold flex items-center justify-center md:justify-start gap-2 print:text-blue-600">
                    <Sparkles size={20} className="text-yellow-400 no-print" />
                    Full Stack Web Developer
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-neutral-400 print:text-neutral-700">
                  <a
                    href="mailto:ssaifulrasel737rf@gmail.com"
                    className="flex items-center justify-center md:justify-start gap-3 hover:text-white transition-colors"
                  >
                    <div className="p-2 bg-white/5 rounded-lg print:p-0">
                      <Mail size={18} />
                    </div>
                    ssaifulrasel737rf@gmail.com
                  </a>
                  <div className="flex items-center justify-center md:justify-start gap-3">
                    <div className="p-2 bg-white/5 rounded-lg print:p-0">
                      <MapPin size={18} />
                    </div>
                    Dhaka, Bangladesh
                  </div>
                  <a
                    href="tel:+8801624616583"
                    className="flex items-center justify-center md:justify-start gap-3 hover:text-white transition-colors"
                  >
                    <div className="p-2 bg-white/5 rounded-lg print:p-0">
                      <Phone size={18} />
                    </div>
                    +880 1624616583
                  </a>
                  <div className="flex items-center justify-center md:justify-start gap-4 pt-2 no-print">
                    <a
                      href="https://github.com"
                      target="_blank"
                      className="p-2.5 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/saiful-rasel-b57860378"
                      target="_blank"
                      className="p-2.5 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
                    >
                      <Linkedin size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 print:block">
            {/* Left Sidebar */}
            <div className="lg:col-span-4 border-r border-white/10 bg-white/[0.02] p-8 md:p-12 space-y-12 print:p-0 print:border-none print:bg-white">
              {/* Profile Summary */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <User size={20} className="text-blue-400" />
                  <h3 className="text-lg font-bold uppercase tracking-widest text-white print:text-black">
                    Profile
                  </h3>
                </div>
                <p className="text-neutral-400 leading-relaxed text-sm print:text-neutral-800">
                  Enthusiastic and detail-oriented Full Stack Web Developer with
                  a strong foundation in modern web technologies. Proven ability
                  to deliver high-quality, scalable applications using React,
                  Next.js, and Node.js.
                </p>
              </section>

              {/* Skills */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <Sparkles size={20} className="text-blue-400" />
                  <h3 className="text-lg font-bold uppercase tracking-widest text-white print:text-black">
                    Expertise
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2 print:block">
                  {skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-white/5 rounded-lg text-xs font-medium text-neutral-300 border border-white/5 print:bg-none print:border-none print:text-black print:px-0 print:after:content-[',_'] last:after:content-none"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </section>

              {/* Education */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <GraduationCap size={20} className="text-blue-400" />
                  <h3 className="text-lg font-bold uppercase tracking-widest text-white print:text-black">
                    Education
                  </h3>
                </div>
                <div className="space-y-8">
                  {education.map((edu, i) => (
                    <div key={i} className="space-y-1">
                      <h4 className="text-white font-bold text-sm print:text-black">
                        {edu.degree}
                      </h4>
                      <p className="text-blue-400 text-xs font-medium print:text-blue-600">
                        {edu.school}
                      </p>
                      <p className="text-neutral-500 text-[10px] print:text-neutral-600">
                        {edu.date}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Right Main Content */}
            <div className="lg:col-span-8 p-8 md:p-12 space-y-12 print:p-0 print:pt-8">
              <section>
                <div className="flex items-center gap-3 mb-10">
                  <Briefcase size={22} className="text-blue-400" />
                  <h3 className="text-xl font-bold uppercase tracking-widest text-white print:text-black">
                    Experience & Projects
                  </h3>
                </div>

                <div className="space-y-12">
                  {experience.map((exp, i) => (
                    <div key={i} className="relative pl-8 group">
                      {/* Timeline Line */}
                      <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/10 group-last:bg-gradient-to-b group-last:from-white/10 group-last:to-transparent print:bg-black/10"></div>
                      {/* Timeline Dot */}
                      <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-blue-500 ring-4 ring-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>

                      <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-4">
                        <div>
                          <h4 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors print:text-black">
                            {exp.title}
                          </h4>
                          <p className="text-blue-400 font-semibold print:text-blue-600">
                            {exp.company}
                          </p>
                        </div>
                        <span className="px-3 py-1 bg-white/5 rounded-full text-[10px] uppercase tracking-widest text-neutral-500 border border-white/5 print:border-none print:text-black">
                          {exp.date}
                        </span>
                      </div>
                      <p className="text-neutral-400 leading-relaxed print:text-neutral-800">
                        {exp.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="p-8 bg-blue-500/5 rounded-[2rem] border border-blue-500/10 no-print">
                <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                  <ExternalLink size={18} className="text-blue-400" />
                  Live Portfolio
                </h3>
                <p className="text-neutral-400 text-sm mb-6">
                  Check out my latest projects and full technical stack on my
                  personal website.
                </p>
                <a
                  href="https://my-portfolio-frontend-rosy-gamma.vercel.app/"
                  className="inline-flex items-center gap-2 text-blue-400 font-bold hover:underline"
                >
                  saiful-rasel.vercel.app
                </a>
              </section>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        @media print {
          .no-print {
            display: none !important;
          }
          body {
            background-color: white !important;
            color: black !important;
          }
          nav,
          footer,
          .navbar,
          .footer {
            display: none !important;
          }
          @page {
            margin: 15mm;
            size: A4;
          }
        }

        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-3px);
          }
        }
        .group:hover .group-hover\:bounce {
          animation: bounce 0.6s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default ResumePage;
