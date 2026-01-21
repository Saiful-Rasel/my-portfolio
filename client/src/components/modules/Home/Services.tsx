"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Palette, Globe, Smartphone, Megaphone, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: <Code2 className="text-blue-500" size={32} />,
    title: "Web Development",
    description: "Building responsive, high-performance websites using modern technologies like Next.js, React, and Node.js.",
  },
  {
    icon: <Palette className="text-purple-500" size={32} />,
    title: "UI/UX Design",
    description: "Creating intuitive and visually stunning user interfaces with a focus on user experience and conversion.",
  },
  {
    icon: <Globe className="text-green-500" size={32} />,
    title: "Full-Stack Solutions",
    description: "End-to-end development of complex web applications, from database design to frontend implementation.",
  },
  {
    icon: <Smartphone className="text-orange-500" size={32} />,
    title: "Responsive Design",
    description: "Ensuring your website looks and works perfectly on all devices, from mobile phones to large desktops.",
  },
  
  {
    icon: <ShieldCheck className="text-cyan-500" size={32} />,
    title: "Website Maintenance",
    description: "Keeping your web applications secure, up-to-date, and running smoothly with regular updates and monitoring.",
  },
];

const Services = () => {
  return (
    <section className="py-24" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold dark:text-white text-black mb-4"
          >
            My Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-neutral-500 max-w-2xl mx-auto"
          >
            I provide a wide range of digital services to help you bring your ideas to life and scale your business.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl border bg-gray-50 border-neutral-800 dark:bg-neutral-900/50 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 group text-black dark:text-white"
            >
              <div className="w-16 h-16 rounded-2xl bg-neutral-800 flex items-center justify-center mb-6 group-hover:bg-blue-500/10 group-hover:scale-110 transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-neutral-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
