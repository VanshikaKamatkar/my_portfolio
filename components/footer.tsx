"use client";

import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram

} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer id='contact' className="text-white py-12 px-4 text-center w-full">
      <div className="max-full mx-auto md:px-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Just starting out, but eager to build amazing things!
        </h2>
        <p className="text-gray-400 mb-6">
          I'm a learner passionate about web development and open to internships,
          collaborations, or any opportunity to grow. Let’s connect!
        </p>
        {/* <a
          href="mailto:prajaktamondhe31@gmail.com"
          className="inline-flex items-center gap-2 px-6 py-2 bg-white/10 border border-white/20 rounded-lg text-sm text-white hover:bg-white/20 transition"
        >
          Contact Me Now
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </a> */}
        <div className="flex flex-row-reverse justify-between mt-10">
        <div className="mt-8 flex justify-center gap-4 text-xl">
          <a
            href="https://github.com/VanshikaKamatkar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/vanshika-kamatkar-17556a28a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <FaLinkedin />
          </a>
          {/* <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <FaTwitter />
          </a> */}
          {/* <a
            href="https://www.instagram.com/_prajakta_mondhe/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <FaInstagram />
          </a> */}

          
        </div>

        <div>
                <p className="text-sm text-gray-600 mt-6">
            © 2025 Vanshika Kamatkar. All rights reserved.
            </p>
          </div>
          </div>
        
      </div>
    </footer>
  );
};

export default Footer;
