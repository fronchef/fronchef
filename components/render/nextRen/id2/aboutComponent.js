export const AboutComponentJsx=`import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

interface AboutProps {
  heading: string;
  description: string;
  subDescription: string;
  imageSrc: string;
  scrollTriggerSettings?: gsap.plugins.ScrollTriggerInstanceVars;
}

const About: React.FC<AboutProps> = ({
  heading = "Welcome to Zentry",
  description = "The Game of Games begins—your life, now an epic MMORPG",
  subDescription = "Zentry unites every player from countless games and platforms, both digital and physical, into a unified Play Economy",
  imageSrc = "img/about.webp",
  scrollTriggerSettings = {
    trigger: "#clip",
    start: "center center",
    end: "+=800 center",
    scrub: 0.5,
    pin: true,
    pinSpacing: true,
  },
}) => {
  useEffect(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: scrollTriggerSettings,
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });

    return () => {
      // Clean up GSAP animations and ScrollTrigger
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [scrollTriggerSettings]);

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="font-general text-sm uppercase md:text-[10px]">{heading}</p>
        <div className="absolute bottom-[-80dvh] left-1/2 w-full max-w-96 -translate-x-1/2 text-center font-circular-web text-lg md:max-w-[34rem]">
          <p>{description}</p>
          <p className="text-gray-500">{subDescription}</p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path absolute left-1/2 top-0 z-20 h-[60vh] w-96 origin-center -translate-x-1/2 overflow-hidden rounded-3xl md:w-[30vw];">
          <img
            src={imageSrc}
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
`
