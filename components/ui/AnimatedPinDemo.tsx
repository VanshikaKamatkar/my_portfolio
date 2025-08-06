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

export function AnimatedPinDemo({ item }: { item: ProjectItem }) {
  const { title, des, img, iconLists, link } = item;

  return (
    <PinContainer title={title}>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full h-full"
      >
        <div className="flex flex-col gap-6 p-4 tracking-tight text-slate-100/50 w-[20rem] h-[27rem]">
          <img src={img} alt={title} className="rounded-md" />

          <h3 className="max-w-xs pb-2 m-0 font-bold text-base text-slate-100">
            {title}
          </h3>

          <div className="text-base m-0 p-0 font-normal">
            <span className="text-slate-500">{des}</span>
          </div>

          <div className="flex justify-between items-center mt-auto">
            <div className="flex">
              {iconLists.map((icon, i) => (
                <div
                  key={i}
                  className="bg-[#0C0E23] w-[35px] h-[35px] -ml-2 border flex items-center justify-center rounded-full"
                >
                  <img
                    className="w-[20px] h-[20px] rounded"
                    src={icon}
                    alt="tech-icon"
                  />
                </div>
              ))}
            </div>

            <div className="flex items-center gap-1 text-white opacity-60 hover:opacity-100">
              <span>Click Live Site</span>
              <GoArrowUpRight />
            </div>
          </div>
        </div>
      </a>
    </PinContainer>
  );
}
