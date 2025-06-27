"use client";
import React from "react";
import { YouTubeEmbed } from "@next/third-parties/google";
import Link from "next/link";

const DuneSuccessSlider: React.FC = () => {
  return (
    <div className="w-full mx-auto py-12 md:py-24 bg-white">
      <div className="text-center mb-8 lg:mb-14">
        <h1 className="text-2xl md:text-[44px] font-bold mb-5">
          Dune's Secret to <span className="text-purple-400">Success</span>
        </h1>
        <h3 className="lg:text-[23px] text-lg text-[#1D1D1F] font-medium">
          Real students, real experiences - see how Dune made studying abroad possible
        </h3>
      </div>

      <div className="relative">
        <div className="relative rounded-3xl w-full  max-w-7xl mx-auto overflow-hidden aspect-video">
          <YouTubeEmbed
            videoid="tYLYYSIarjk"
            params="modestbranding=1&rel=0"
            
          />
        </div>

        <div className="absolute bottom-4 md:bottom-8 lg:bottom-20 xl:bottom-2 w-full p-4 xl:p-10 z-10 flex flex-row justify-end md:justify-between">
          <div className="hidden md:block">
            {/* Your logo SVG if needed */}
          </div>

          <div className="flex gap-4">
            <Link
              href="https://youtu.be/rv0KerNW4QE?si=ObYcwEiaqF0UD90P"
              target="_blank"
            >
              <button
                aria-label="Watch the Full Video"
                className="text-white bg-transparent rounded-full border-white border py-2 px-3 text-sm md:text-base md:py-2.5 md:px-4 hidden md:block cursor-pointer"
              >
                Watch the Full Video
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DuneSuccessSlider;
