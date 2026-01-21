"use client";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { Menu, MenuItem } from "@/components/ui/navbar-menu";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState } from "react";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="h-[100px]">
      <div
        className={cn(
          "fixed top-5 md:top-10 inset-x-0 md:max-w-4xl mx-auto z-50 bg-gray-50 rounded-full shadow-sm", // added bg-gray-50 + optional shadow
          className
        )}
      >
        <Menu setActive={setActive}>
          <Link href="/">
            <MenuItem setActive={setActive} active={active} item="Home" />
          </Link>
          <Link href="/blog">
            <MenuItem setActive={setActive} active={active} item="Blog" />
          </Link>
          <Link href="/project">
            <MenuItem setActive={setActive} active={active} item="Project" />
          </Link>
          <Link href="/about">
            <MenuItem setActive={setActive} active={active} item="About" />
          </Link>
          <Link href="/resume">
            <MenuItem setActive={setActive} active={active} item="Resume" />
          </Link>
          <Link href="/dashboard">
            <MenuItem setActive={setActive} active={active} item="Dashboard" />
          </Link>
          <div className="w-full text-end">
            <AnimatedThemeToggler />
          </div>
        </Menu>
      </div>
    </div>
  );
}

export default Navbar;
