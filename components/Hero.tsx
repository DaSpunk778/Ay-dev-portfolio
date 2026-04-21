import { cn } from "@/lib/utils";
import { FaBeer, FaLocationArrow } from 'react-icons/fa';
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="flex h-screen  w-full items-center justify-center bg-white dark:bg-grid-white/[0.03] dark:bg-[#000319] absolute top-0 left-0">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:80px_80px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_0.8px,transparent_0.5px),linear-gradient(to_bottom,#e4e4e7_0.5px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#404040_0.5px,transparent_0.5px),linear-gradient(to_bottom,#404040_0.5px,transparent_0.5px)]",
            "opacity-20",
          )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)] dark:bg-[#000319]" />
      </div>
      {/* Content */}
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-w[89vw] md:max-w-2xl lg:max-w-[60vw] flex-col items-center justify-center text-center">
          <h2
            className="uppercase tracking-widest
        text-xs text-center text-blue-100 mx-auto"
          >
            Dynamic Web Magic with Ay_Dev
          </h2>

          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-5xl"
            words="Transforming Concepts and Ideas into seamless Web Experiences"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-1xl text-zinc-400">
            Hi, I&apos;m Ayomide, a Next.js Developer based in Lagos, Nigeria.
          </p>


          <a href="#about">
            <MagicButton 
            title="Show my work"
            icon={<FaLocationArrow />}
            position='right'
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
