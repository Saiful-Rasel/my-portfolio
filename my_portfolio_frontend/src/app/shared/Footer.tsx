// components/Footer.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Footer() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null; // avoid hydration mismatch

  return (
    <footer
      className={`w-full px-6 py-8 border-t transition-colors duration-300 md:mt-16 mt-4 ${
        theme === "dark"
          ? "bg-black border-gray-700 text-gray-300"
          : "bg-gray-50 border-gray-200 text-gray-700"
      }`}
    >
     

      <div className="mt-6 text-center text-sm opacity-60">
        © {new Date().getFullYear()} Saiful Rasel. All rights reserved.
      </div>
    </footer>
  );
}
