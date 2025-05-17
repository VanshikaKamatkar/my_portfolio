import React from 'react'
import { cn } from "@/lib/utils";
import { TextGenerateEffectDemo } from './ui/TextGenerateEffectDemo';
import Link from 'next/link';

const GridBackgroundDemo = () => {
  return (
    <div className="relative flex h-full w-full items-center justify-center bg-transparent">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none z-30 absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
            <div className='max-w-[89vw] z-50 text-center'>
                     <p className="text-sm tracking-widest text-neutral-400 uppercase">
                        Full-Stack Web Development with MERN Stack
                        </p>

                        <TextGenerateEffectDemo className="mt-4 text-4xl sm:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent" words='Building Scalable Web Apps'/>


                        <p className="mt-6 max-w-xl mx-auto text-neutral-300 text-lg">
                        Hi! I'm <span className="text-white font-semibold">Prajakta</span>, a Full-Stack Developer skilled in React, Node.js & Express — passionate about turning ideas into functional and aesthetic digital products.
                        </p>

                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <Link href={`/projects`}>
                        <button className="relative rounded-lg font-semibold text-white group bg-black overflow-hidden px-0.5 py-0.5">
                        <span className="absolute inset-0 rounded-lg p-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 group-hover:from-green-400 group-hover:via-blue-500 group-hover:to-teal-400 transition-all duration-500 ease-in-out"></span>
                       <Link href='#projects'> <span className="relative z-10 block bg-black rounded-lg px-6 py-2">
                            Show my work
                        </span></Link>
                        </button>
                        </Link>
                        <Link href={""}  download="Prajakta_Mondhe_Resume.pdf" className="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition">
                            Download Resume
                        </Link>
        </div>

            </div>
    </div>
  )
}

export default GridBackgroundDemo