import React from 'react'
// import { Skeleton } from 'three';
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { gridItems } from "@/data/index";
const Grid = () => {



    



  return (
    <section id='about' className='min-h-screen py-10'>
        <BentoGrid className="max-w-4xl mx-auto">
            {gridItems.map((item, i) => (
                <BentoGridItem
                key={item.id}
                id={item.id}
                title={item.title}
                description={item.description}
                // className={item.className}
                spareImg={item.spareImg}
                imgClassName={item.imgClassName}
                titleClassName={item.titleClassName}
                img={item.img}
                // className={item.className}
                className={i === 4 || i ===3 ? "md:col-span-2"  :  i=== 2 ?"md:row-span-2" :""}
                />
            ))}
    </BentoGrid>
    </section>
  )
}

export default Grid