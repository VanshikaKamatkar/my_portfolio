import { IconHome, IconMessage, IconUser, IconCode } from "@tabler/icons-react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Hero } from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import Footer from "@/components/footer";
import TechStack from "@/components/texhstack";
import AboutSection from "@/components/about";
import ContactMe from "@/components/contactme";

export default function Home() {
  const navItems = [
    {
      name: "About",
      link: "#about",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Tech Stack",
      link: "#tech-stack",
      icon: <IconCode className="h-4 w-4 text-neutral-500 dark:text-white" />,
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
    },
  ];

  return (
    <>
      <main className="relative flex flex-col items-center justify-center min-h-screen mx-auto overflow-x-hidden py-4 bg-black">
        <FloatingNav navItems={navItems} />

        <div id="hero">
          <Hero />
        </div>

        <div id="about">
          <AboutSection />
        </div>
        
        <div id="tech-stack" className="pt-20">
          <TechStack />
        </div>

        <div id="projects" className="pt-20">
          <RecentProjects />
        </div>

        <div id="contact" className="pt-20">
          <ContactMe />
        </div>
        
        <Footer />
      </main>
    </>
  );
}