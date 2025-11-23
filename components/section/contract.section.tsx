"use client";

import { motion } from "framer-motion";
import { SiGithub, SiLinkedin, SiFacebook, SiInstagram } from "react-icons/si";

export default function ContactSection() {
  return (
    <section className="max-w-[1400px] mx-auto px-6 py-20" id="contact">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-6xl font-light text-white mb-4">
          Get in{" "}
          <span className="bg-gradient-to-r from-purple-400 via-pink-300 to-purple-400 bg-clip-text text-transparent">
            Touch
          </span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto"></div>

        {/* Email */}
        <a
          href="mailto:your@email.com"
          className="mt-6 inline-block text-gray-300 hover:text-white transition-colors text-lg"
        >
          your@email.com
        </a>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          viewport={{ once: true }}
          className="space-y-6 bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl"
        >
          <div>
            <label className="text-sm text-gray-300 block mb-2">
              Your Name
            </label>
            <input
              type="text"
              className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-3 outline-none focus:border-purple-400 transition"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="text-sm text-gray-300 block mb-2">
              Your Email
            </label>
            <input
              type="email"
              className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-3 outline-none focus:border-purple-400 transition"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="text-sm text-gray-300 block mb-2">Message</label>
            <textarea
              className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-3 h-32 resize-none outline-none focus:border-pink-400 transition"
              placeholder="Write your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-400 to-pink-400 text-black font-medium hover:opacity-90 transition"
          >
            Send Message
          </button>
        </motion.form>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col items-center md:items-start gap-8"
        >
          <h3 className="text-2xl text-white font-light">Connect with me</h3>

          <div className="flex gap-6">
            {/* GitHub */}
            <a
              href="https://github.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md text-gray-300 hover:text-white hover:bg-white/10 transition text-2xl"
            >
              <SiGithub />
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md text-gray-300 hover:text-white hover:bg-white/10 transition text-2xl"
            >
              <SiLinkedin />
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md text-gray-300 hover:text-white hover:bg-white/10 transition text-2xl"
            >
              <SiFacebook />
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md text-gray-300 hover:text-white hover:bg-white/10 transition text-2xl"
            >
              <SiInstagram />
            </a>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
            Feel free to reach out for collaborations, projects, opportunities,
            or just to say hello — always happy to connect with fellow
            developers.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
