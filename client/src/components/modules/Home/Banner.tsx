/* eslint-disable react/no-unescaped-entities */
"use client";

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";

export function Banner() {
  return (
    <div className="w-full bg-white dark:bg-black">
      <Card className="w-full h-[600px] md:mt-10 bg-black/[0.96] relative overflow-hidden">
        <Spotlight
          className="md:-top-40 left-0 md:left-60 "
          fill="white"
        />

        <div className=" w-full flex flex-col md:flex-row  mx-auto md:w-[70%] ">
          {/* Left content */}
          <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
            <h1 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
             Hi, I'm <span className="text-blue-400">Saiful Rasel-</span>
            </h1>
            <p className="mt-4 text-neutral-300 max-w-lg">
             A passionate Full Stack Developer turning ideas into interactive web experiences using React, Next.js, and Node.js.
            </p>
            <div className="mt-8 flex gap-4">
              <a 
                href="/resume" 
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-700 active:scale-95 shadow-lg shadow-blue-500/20"
              >
                View Resume
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center rounded-xl border border-neutral-700 bg-transparent px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-neutral-800 active:scale-95"
              >
                Let's Talk
              </a>
            </div>
          </div>

          {/* Right content */}
          <div className="flex-1 relative w-full  md:h-[700px]   ">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full md:h-full"
            />
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Banner;
