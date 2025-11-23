"use client";

import { SiGithub, SiLinkedin, SiFacebook, SiInstagram } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-white/10 bg-white/5 backdrop-blur-lg">
      <div className="max-w-[1400px] mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left - Brand */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-light text-white">
            M Rafiul <span className="text-purple-300">Faisal</span>
          </h3>
          <p className="text-gray-400 text-sm mt-1">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Center - Nav */}
        <div className="flex gap-8 text-gray-300 text-sm">
          <a href="#projects" className="hover:text-white transition">
            Projects
          </a>
          <a href="#skills" className="hover:text-white transition">
            Skills
          </a>
          <a href="#about" className="hover:text-white transition">
            About
          </a>
          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </div>

        {/* Right - Social */}
        <div className="flex gap-4">
          <a
            href="https://github.com/your-profile"
            target="_blank"
            className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition text-xl"
          >
            <SiGithub />
          </a>

          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition text-xl"
          >
            <SiLinkedin />
          </a>

          <a
            href="https://facebook.com/your-profile"
            target="_blank"
            className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition text-xl"
          >
            <SiFacebook />
          </a>

          <a
            href="https://instagram.com/your-profile"
            target="_blank"
            className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition text-xl"
          >
            <SiInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}
