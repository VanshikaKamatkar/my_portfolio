"use client";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function AboutSection() {
  return (
    <section id="about" className="bg-black text-white flex flex-col items-center justify-center px-6 py-20">
      <h2 className="text-5xl font-extrabold mb-12 text-center bg-gradient-to-r from-pink-500 via-purple-400 to-blue-500 text-transparent bg-clip-text">
        About Me
      </h2>

      {/* Change: This is now a responsive 3-column grid container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        
        {/* Change: The image div has been removed */}
        
        {/* Change: The three cards are now direct children of the grid */}
        
        {/* Box 1 - Intro */}
        <motion.div {...fadeUp} className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-md border border-white/20 h-full">
          <h3 className="text-2xl font-bold text-pink-400">Hi, I'm Vanshika Kamatkar</h3>
          <p className="text-sm text-white/90 mt-3 leading-relaxed">
            I'm an enthusiastic <span className="text-sky-400 font-semibold">Computer Science Student</span> currently in my 7th semester. I thrive on creativity, innovation, and a desire to make technology accessible and impactful. My curiosity constantly pushes me to explore new domains, whether it's coding, design, or modern frameworks.
          </p>
        </motion.div>

        {/* Box 2 - What I Do */}
        <motion.div {...fadeUp} transition={{ delay: 0.2, duration: 0.6 }} className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-md border border-white/20 h-full">
          <h3 className="text-2xl font-bold text-cyan-400">What I Do</h3>
          <p className="text-sm text-white/90 mt-3 leading-relaxed">
            I specialize in building <span className="text-blue-400 font-semibold">full-stack web applications</span> using the <strong>MERN stack</strong>. I’ve worked on scalable UI/UX experiences, backend APIs, and responsive dashboards.
            Beyond coding, I’m actively exploring <span className="text-yellow-300 font-semibold">DevOps practices</span> and mastering <span className="text-green-300 font-semibold">Data Structures in Java</span>.
          </p>
        </motion.div>

        {/* Box 3 - Vision & Goals */}
        <motion.div {...fadeUp} transition={{ delay: 0.4, duration: 0.6 }} className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-md border border-white/20 h-full">
          <h3 className="text-2xl font-bold text-purple-400">Vision & Goals</h3>
          <p className="text-sm text-white/90 mt-3 leading-relaxed">
            I’m passionate about solving real-world challenges through tech. I'm currently seeking <span className="text-pink-300 font-semibold">internships</span> or <span className="text-teal-300 font-semibold">full-time roles</span> where I can collaborate, contribute, and grow both technically and creatively.
          </p>
        </motion.div>

      </div>
    </section>
  );
}