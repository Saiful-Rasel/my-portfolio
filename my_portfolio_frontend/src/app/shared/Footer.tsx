
"use client";

export default function Footer() {
  return (
    <footer className="w-full px-6 py-8 border-t dark:bg-black bg-gray-50 border-gray-200 dark:text-white transition-colors duration-300 md:mt-16 mt-4">
      <div className="mt-6 text-center text-sm opacity-60">
        © {new Date().getFullYear()} Saiful Rasel. All rights reserved.
      </div>
    </footer>
  );
}
