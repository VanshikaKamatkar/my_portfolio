import {CardSpotlightDemo} from "@/components/CardSpotlightDemo";
// import Image from "next/image";
import {Spotlight} from "@/components/ui/Spotlight.tsx";
import GridBackgroundDemo from "@/components/GridBackgroundDemo";
import { FloatingNavDemo } from "@/components/ui/FloatingNavDemo";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import Grid from "@/components/Grid";
import { FloatingNav } from "@/components/ui/floating-navbar";
import RecentProjects from "@/components/RecentProjects";
import Footer from "@/components/footer";



export default function Home() {
  return (
    <>
    <main className="relative flex flex-col gap-20 items-center justify-center min-h-screen mx-auto overflow-x-hidden  py-4 bg-black">

          <FloatingNav navItems={[
            {
                  name: "About",
                  link: "#about",
                  icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
                },
                {
                  name: "Projects",
                  link: "#projects",
                  icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
                },
                {
                  name: "Contact",
                  link: "#contact",
                  icon: (
                    <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
                  ),
                }
          ]}/>
          <CardSpotlightDemo/>
          <Grid/>
          <RecentProjects/>

          <Footer/>

 
    </main>
    </>
  );
}
