import { gridItems, projects } from '@/data'
import { div } from 'motion/react-client'
import React from 'react'
import { AnimatedPinDemo } from './ui/AnimatedPinDemo'

const RecentProjects = () => {
  return (
    <div id="projects" className='py-10 '>
        <h1 className='text-3xl text-bold text-center'>A small selection of <span className='text-[#CBACF9]'>recent projects</span></h1>
   
        <div className='flex flex-wrap justify-center p-4 gap-5 '>
                {
                    projects.map((item,i)=>(
                            <div key={item.id} className='lg:min-h-[40rem] h-[30rem] flex items-center justify-center sm:w-96 w-[80vw] '> 
                               <AnimatedPinDemo item={item}/>
                               
                             </div>
                    ))
                }
        </div>
   
    </div>
  )
}

export default RecentProjects