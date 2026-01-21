"use client";

import React, { useState } from "react";
import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const Qualification = () => {
  const [activeTab, setActiveTab] = useState("education");
const education = [
  {
    title: "Bachelor of Business Administration (BBA)",
    subtitle: "Noakhali Government College",
    date: "2021 - 2022",
    location: "Noakhali, Bangladesh",
  },
  {
    title: "Higher Secondary Certificate (HSC)",
    subtitle: "Government Science College",
    date: "2019 - 2020",
    location: "Noakhali, Bangladesh",
  },
  {
    title: "Secondary School Certificate (SSC)",
    subtitle: "Noakhali Zilla School",
    date: "2017 - 2018",
    location: "Noakhali, Bangladesh",
  },
];

   

const experience = [
  {
    title: "Personal Portfolio Website",
    subtitle: "Self-Project",
    date: "2025",
    location: "Remote",
  },
  {
    title: "E-commerce Web App",
    subtitle: "Self-Project",
    date: "2025",
    location: "Remote",
  },
  {
    title: "Open Source Contributor",
    subtitle: "GitHub",
    date: "2025",
    location: "Remote",
  },

  {
    title: "TypeScript Mastery",
    subtitle: "Self-Learning",
    date: "2025",
    location: "Remote",
  },
];

  const data = activeTab === "education" ? education : experience;

  return (
    <section className="py-20 bg-transparent" id="qualification">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold dark:text-white mb-4">Qualification</h2>
          <p className="text-neutral-400">My personal journey</p>
        </div>

        <div className="flex justify-center gap-8 mb-16">
          <button
            onClick={() => setActiveTab("education")}
            className={`flex items-center gap-2 text-xl font-medium transition-colors ${
              activeTab === "education" ? "text-blue-500" : "text-neutral-500 hover:text-neutral-300"
            }`}
          >
            <GraduationCap size={24} />
            Education
          </button>
          <button
            onClick={() => setActiveTab("experience")}
            className={`flex items-center gap-2 text-xl font-medium transition-colors ${
              activeTab === "experience" ? "text-blue-500" : "text-neutral-500 hover:text-neutral-300"
            }`}
          >
            <Briefcase size={24} />
            Experience
          </button>
        </div>

        <div className="max-w-3xl mx-auto relative px-4">
          {/* Timeline center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-neutral-800 hidden md:block" />

          <div className="space-y-12">
            {data.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"} text-center ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                  <div className="dark:bg-neutral-900/50 bg-gray-50 backdrop-blur-sm border border-neutral-800 p-6 rounded-2xl hover:border-blue-500/50 transition-colors shadow-xl">
                    <h3 className="text-xl font-bold dark:text-white mb-2">{item.title}</h3>
                    <p className="dark:text-blue-400 text-blue-600 font-medium mb-4">{item.subtitle}</p>
                    
                    <div className={`flex items-center gap-4 text-neutral-400 text-sm justify-center ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}>
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {item.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {item.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-black z-10 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
