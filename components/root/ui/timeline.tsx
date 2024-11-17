"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-neutral-950 font-sans md:px-10"
      ref={containerRef}
    >
    <div className="flex justify-center items-center gap-5 flex-col mx-4 py-5 md:py-20 px-4 md:px-8 lg:px-10 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 rounded-lg shadow-xl">
    <h2 className="text-3xl md:text-6xl md:mb-6 text-white max-w-4xl text-center font-bold tracking-wide transform transition duration-500 hover:scale-105 hover:text-yellow-300">
        Just for You Page
    </h2>
    <p className="block md:hidden text-white text-lg mb-6 max-w-5xl text-center leading-relaxed">
    Discover events, updates, and exclusive highlights curated for you. Stay updated on what&apos;s happening and never miss out on exciting moments.
    </p>
    <p className="hidden md:block text-white text-lg mb-6 max-w-5xl text-center leading-relaxed">
        Discover events, updates, and exclusive highlights curated for you. Stay updated on what&apos;s happening and never miss out on exciting moments. Our platform brings you the best of all worlds in one place, so you can focus on what truly matters to you. Whether it&apos;s the latest news, exclusive offers, or exciting events, we&apos;ve got something special waiting for you.
    </p>
    <p className="hidden md:block text-white text-lg max-w-xl text-center leading-relaxed">
        Join the community of like-minded individuals who are always in the loop and connected. Don&apos;t miss out on making unforgettable memories and taking part in the next big thing. We believe in curating experiences that matter, just for you!
    </p>
</div>



      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-800 border border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 ">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
      
    </div>
  );
};
