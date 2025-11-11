import Image from 'next/image';
import Link from 'next/link';
// Change: Import the icons you need
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export function Hero() {
  return (
    <section id="home" className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 px-6 py-28 min-h-screen text-center md:text-left">
      {/* Image Container */}
      <div className="relative w-64 h-64 md:w-80 md:h-80 flex-shrink-0">
        <Image 
          src="/profile.jpg" 
          alt="Vanshika Kamatkar" 
          layout="fill"
          objectFit="cover"
          className="rounded-full border-4 border-purple-500/60"
        />
      </div>
      
      {/* Content Container */}
      <div className="flex flex-col gap-4 max-w-lg">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-200">
          Hi, I'm <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">Vanshika!</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300">
          A passionate Full-Stack Developer building modern, scalable, and impactful Web Applications.
        </p>
        <div className="flex justify-center md:justify-start gap-4 mt-4">
          <Link href="#projects" className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-lg transition-colors">
            My Projects
          </Link>
          <a href="/Vanshika Kamatkar Resume (23).pdf" download className="bg-transparent border border-purple-500 text-purple-400 hover:bg-purple-900/30 font-medium py-2 px-6 rounded-lg transition-colors">
            Resume
          </a>
        </div>
        
        {/* Change: New container for social media icons */}
        <div className="flex justify-center md:justify-start gap-6 mt-6">
          <a href="https://github.com/VanshikaKamatkar" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
            <FaGithub className="text-gray-400 hover:text-purple-400 text-3xl transition-colors" />
          </a>
          <a href="https://www.linkedin.com/in/vanshika-kamatkar-17556a28a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
            <FaLinkedin className="text-gray-400 hover:text-purple-400 text-3xl transition-colors" />
          </a>
        </div>

      </div>
    </section>
  );
}