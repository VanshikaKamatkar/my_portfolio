"use client"


import { cn } from "@/lib/utils";
import { div, span } from "motion/react-client";
import { BackgroundGradientAnimation } from "./BackgroundGradientAnimation";
import { Globe } from "./globe";
import { GlobeDemo } from "./globeDemo";
import { useState } from "react";


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
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  key,
  id,
  img,
  spareImg,
  imgClassName,
  titleClassName,
  className,
  title,
  description,
  header,
  icon,
}: {
  key : number;
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  spareImg?: string;
  imgClassName?: string;
  titleClassName?: string;

}) => {

  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("prajaktamondhe31@gmail.com");
    setCopied(true);

    // Reset after 2 seconds
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={cn(
        ` group/bento shadow-input row-span-1 flex flex-col overflow-hidden   justify-between space-y-4 rounded-3xl relative bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none border-2 border-red-50`,
        className,
      )}
      style={{
        background : 'rgb(4,7,13)',
        backgroundColor: ''
      }}
    >

      {
        !(id === 6) && (
          <>
          <div className={`${id===6 ?"flex justify-center h-full gradient-animate":""}`}>
          <div className="w-full h-full left-0 top-0 bottom-0 right-0 absolute">
            {
              img && (
                <img src={img} alt={img} className={cn(imgClassName, `object-center`)}/>
              )
            }
          </div>
          <div className={`absolute right-0 -bottom-5 ${id===5 ? 'w-full opacity-80' : ""}`}>
              {
              spareImg && (
                <img src={spareImg} alt={spareImg} className={`object-cover object-center`}/>
              )
            }
          </div>
        </div>
      
      <div className={cn(titleClassName, "transition duration-200 group-hover/bento:translate-x-2 relative md:h-full min-h-40 flex-col justify-between px-5 ")}>
          <div className="flex- flex-col mb-5">
            <div className="font-sans  font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10 dark:text-neutral-300">
            {
              description
            }
          </div>

          <div className="font-sans lg:text-2xl max-w-96 z-100  font-bold text-neutral-600 dark:text-neutral-200">
          {title}
        </div>
          </div>

        {
          id === 2 &&(
            <GlobeDemo/>
          )
        }

        {
          id == 4 &&(
            <>
            <div className="flex gap-3 flex-wrap">
                {
                   ["React.js","Node.js","Express.js","Redux", "Next.js","MongoDB","JWT","Typescript", "C++","DSA",].map((item,i)=>(
                  <span key={i} className="py-2 min-w-[100px] lg:py-4 px-3 text-xs  opacity-50  rounded-lg text-center bg-[#10132E]">

                    {item}
                  </span>
                ))
                }
            </div>
            </>
          )
        }
       
      </div>
          </>
        )
      }

      {
        id === 6 &&(
          <>
          <div className={`flex justify-around h-full w-full gradient-animate`}>
          
      
            <div className={cn(titleClassName, "transition w-full  duration-200 group-hover/bento:translate-x-2 relative md:h-full min-h-40 flex flex-col justify-around items-center")}>

                <div className="font-sans lg:text-xl  w-full z-100  font-bold text-neutral-600 dark:text-neutral-200">
                {title}
                </div>

                <button onClick={copyToClipboard} className="bg-[#272A3C80] w-max px-4 py-2 rounded-xl flex items-center justify-center gap-3">
                  <img className="" src="/Card.png" alt="" />
                  <p className="whitespace-nowrap">Copy my email address</p>
                </button>

            </div>
            
            </div>
          </>
        )
      }

        
    </div>
  );
};
