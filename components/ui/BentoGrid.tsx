'use client';
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GraidentBg";
import {  GlobeDemo } from "./GridGlobe";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from '@/data/confetti.json';
import { IoCopyOutline } from "react-icons/io5";
import MagicButton from "./MagicButton";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-max md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
     const [copied, setCopied] = useState(false);

     const handleCopy = () => {
      navigator.clipboard.writeText('akayomide11@gmail.com');

      setCopied(true);
     }


  return (
    <div
      className={cn(
        "shadow-input flex flex-col justify-between space-y-4 relative overflow-hidden rounded-3xl group/bento  bg-white  transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none border border-white/[0.1]",
        className,
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div
        className={`${id == 6 && 'flex justify-center'} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover, object-center")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"}`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className={"object-cover, object-center w-full h-full"}
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 flex items-center justify-center text-white font-bold" />
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/ bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 py-5 lg:p-10",
          )}
        >
          <div className="font-sans text-sm font-extralight text-[#c1c2d3] md:text-xs lg:text-base z-10">
            {description}
          </div>
          <div className="transition duration-200 group-hover/bento:translate-x-2">
            <div className=" font-sans font-bold  dark:text-neutral-200 text-lg lg:text-2xl max-w-96 z-10">
              {title}
            </div>
          </div>
        

          {id === 2 && < GlobeDemo />}

          {id === 3 && (
            <div className="flex gap-2 lg:gap-2 w-fit absolute -right-3 lg:-right-0">
              <div className="flex flex-col gap-3 lg:gap-3 text-cyan-50  group-hover/bento:translate-x-2">
                {['React.js', 'Next.js', 'TypeScript'].map
                ((item) => (
                  <span key={item} className="py-2 lg:py-3 
                  lg:px-2 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg  group-hover/bento:translate-x-2
                  text-center bg-[#10132E]">
                    {item}
                  </span>
                ))}
                <span className="py-4 px-3 rounded-lg  group-hover/bento:translate-x-2 text-center bg-[#10132e]"/>

              </div>
              <div className="flex flex-col gap-3 lg:gap-3 text-cyan-50  group-hover/bento:translate-x-2">
                 <span className="py-4 px-3 rounded-lg  group-hover/bento:translate-x-2  text-center bg-[#10132e]"/>
                {['PostgreSql', 'Sequelize', 'AWS'].map
                ((item) => (
                  <span key={item} className="py-2 lg:py-3 
                  lg:px-2 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg  group-hover/bento:translate-x-2
                  text-center bg-[#10132E]">
                    {item}
                  </span>
                ))}
               
              </div>
            </div>


          )}


          {id === 6 && (
            <div className="mt-5 relative "> 
              <div className={`absolute -bottom-5 right-0`}>
               
               <Lottie options={{
                loop: copied,
                autoplay: copied,
                animationData,
                rendererSettings: {
                  preserveAspectRatio: 'xMidYMid slice',
                }
               }}/>
              </div>

              <MagicButton 
                title={copied ? 'Email Copied': 'Copy My Email'}
                    icon={<IoCopyOutline />}
                    position="left"
                    otherClasses="!bg-[#161a31]"
                    handleClick={handleCopy}
              />
            </div>
          )}
      </div>
    </div>
    </div>
  );
};
