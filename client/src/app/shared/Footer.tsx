
"use client";

import { Linkedin, MessageSquare, Github, Twitter } from "lucide-react";

export default function Footer() {
  const socials = [
    {
      icon: <Github size={20} />,
      link: "https://github.com",
      label: "GitHub",
    },
    {
      icon: <Linkedin size={20} />,
      link: "https://www.linkedin.com/in/saiful-rasel-b57860378",
      label: "LinkedIn",
    },
    {
      icon: <MessageSquare size={20} />,
      link: "https://wa.me/8801624616583",
      label: "WhatsApp",
    },
    {
      icon: <Twitter size={20} />,
      link: "https://twitter.com/saifulrasel",
      label: "Twitter",
    },
  ];

  return (
    <footer className="w-full px-6 py-12 border-t dark:bg-black bg-gray-50 border-gray-200 dark:text-white transition-colors duration-300 md:mt-16 mt-4">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex gap-6 mb-8">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="p-3 rounded-full border border-neutral-800 hover:border-blue-500 hover:text-blue-500 transition-all duration-300"
            >
              {social.icon}
            </a>
          ))}
        </div>
        
        <div className="text-center text-sm opacity-60">
          © {new Date().getFullYear()} Saiful Rasel. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
