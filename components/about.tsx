"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import profile from "@/public/profile.png"; // Replace with actual image path

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-20">
      <h2 className="text-5xl font-extrabold mb-12 text-center bg-gradient-to-r from-pink-500 via-purple-400 to-blue-500 text-transparent bg-clip-text">
        Who Am I?
      </h2>

      <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl w-full">
        {/* Left - Profile */}
        <motion.div {...fadeUp} className="flex justify-center relative">
          <div className="rounded-full overflow-hidden border-4 border-pink-500 shadow-xl w-60 h-60 md:w-72 md:h-72 transform hover:scale-105 transition-all duration-500">
            <img src={'/profile.jpg'}  alt="Prajakta" className="object-cover w-full h-full" />
          </div>
        </motion.div>

        {/* Right - Expanded Info Cards */}
        <motion.div {...fadeUp} className="grid gap-6">
          {/* Box 1 - Intro */}
          <motion.div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-md border border-white/20">
            <h3 className="text-2xl font-bold text-pink-400">Hi, I'm Prajakta Mondhe</h3>
            <p className="text-sm text-white/90 mt-3 leading-relaxed">
              I'm an enthusiastic <span className="text-sky-400 font-semibold">Information Technology Engineer</span> currently in my 4th semester. I thrive on creativity, innovation, and a desire to make technology accessible and impactful. My curiosity constantly pushes me to explore new domains, whether it's coding, design, or modern frameworks.
            </p>
          </motion.div>

          {/* Box 2 - What I Do */}
          <motion.div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-md border border-white/20">
            <h3 className="text-2xl font-bold text-cyan-400">What I Do</h3>
            <p className="text-sm text-white/90 mt-3 leading-relaxed">
              I specialize in building <span className="text-blue-400 font-semibold">full-stack web applications</span> using the <strong>MERN stack</strong>. I’ve worked on scalable UI/UX experiences, backend APIs, and responsive dashboards.
              Beyond coding, I’m actively exploring <span className="text-yellow-300 font-semibold">DevOps practices</span> and mastering <span className="text-green-300 font-semibold">Data Structures in C++</span>. My projects reflect a blend of clean design and efficient logic.
            </p>
          </motion.div>

          {/* Box 3 - Vision & Goals */}
          <motion.div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-md border border-white/20">
            <h3 className="text-2xl font-bold text-purple-400">Vision & Goals</h3>
            <p className="text-sm text-white/90 mt-3 leading-relaxed">
              I’m passionate about solving real-world challenges through tech. Whether it's streamlining workflows, designing intuitive UIs, or automating systems — I strive for scalable, maintainable solutions. 
              I'm currently seeking <span className="text-pink-300 font-semibold">internships</span> or <span className="text-teal-300 font-semibold">full-time roles</span> where I can collaborate, contribute, and grow both technically and creatively.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
