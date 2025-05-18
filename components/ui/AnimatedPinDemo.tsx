"use client";
import React from "react";
import { PinContainer } from "../ui/3d-pin";
import { GoArrowUpRight } from "react-icons/go";
type ProjectItem = {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  link: string;
};

export function AnimatedPinDemo({item}:{item:ProjectItem}) {
   const{id, title,des, img, iconLists,link} = item;
  return (
    
      <PinContainer
        title={title}
        href={link}
      >
          {/* <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" /> */}
        <div className="flex basis-full flex-col gap-6 p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[27rem] ">
            <img src={img} alt="" />

          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            {title}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              {des}
            </span>
          </div >
                
          <div className="flex justify-between items-center">
            <div className="flex">
            {
                    iconLists.map((icon,i)=>(
                       <div key={i} className="bg-[#0C0E23] w-[35px] h-[35px] -ml-2 border flex items-center justify-center rounded-full"> <img className="w-[20px] h-[20px] rounded" src={icon} alt="icon"/></div>

                    ))
                }

          </div>

          <div className="flex items-center justify-center gap-1"><p className="hover:text-white">Click Live Site</p> <GoArrowUpRight /> </div>
          </div>
        </div>
      </PinContainer>
   
  );
}
