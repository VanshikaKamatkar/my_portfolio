// components/TechStack.tsx
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaDocker } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiTailwindcss, SiMongodb, SiFirebase, SiRedux, SiExpress, SiJsonwebtokens, SiGooglecloud } from 'react-icons/si';


const TechStack = () => {
  const stack = [
    { name: 'HTML5', icon: <FaHtml5 className="text-orange-400" /> },
    { name: 'CSS3', icon: <FaCss3Alt className="text-blue-400" /> },
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-300" /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-blue-300" /> },
    { name: 'React.js', icon: <FaReact className="text-cyan-300" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-400" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-300" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: 'Redux', icon: <SiRedux className="text-purple-500" /> },
{ name: 'Express.js', icon: <SiExpress className="text-gray-200" /> },
{ name: 'JWT', icon: <SiJsonwebtokens className="text-yellow-400" /> },
    { name: 'Firebase', icon: <SiFirebase className="text-yellow-400" /> },
    { name: 'GCP', icon: <SiGooglecloud className="text-blue-200" /> },
    { name: 'Git', icon: <FaGitAlt className="text-red-400" /> },
    { name: 'Docker', icon: <FaDocker className="text-blue-300" /> },
  ];

  return (
    <section className="py-16 px-6 max-w-6xl mx-auto" id="tech-stack">
      <h2 className="text-4xl font-extrabold mb-10 text-center bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
        💻 Tech Stack
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
        {stack.map((tech, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center p-6 rounded-xl backdrop-blur-md bg-[#1a1a1a]/60 hover:bg-[#2c2c2c]/80 hover:shadow-[0_0_10px_rgba(255,0,255,0.3)] transition-all duration-300"
          >
            <div className="text-4xl mb-3">{tech.icon}</div>
            <p className="text-sm font-medium text-gray-200">{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
