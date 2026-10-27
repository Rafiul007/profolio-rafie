"use client";

import { motion } from "framer-motion";
import { spring } from "@/lib/motion";
import { SiGithub, SiLinkedin, SiFacebook, SiInstagram } from "react-icons/si";

export default function ContactSection() {
  // No backend: open the visitor's mail client with the message pre-filled
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\n${name} (${email})`);
    window.location.href = `mailto:rafiul.faisal@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="max-w-[1400px] mx-auto px-6 py-20" id="contact">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={spring}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-6xl font-light tracking-[-0.03em] text-white mb-4">
          Get in{" "}
          <span className="bg-gradient-to-r from-purple-400 via-pink-300 to-purple-400 bg-clip-text text-transparent">
            Touch
          </span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto"></div>

        {/* Email */}
        <a
          href="mailto:rafiul.faisal@gmail.com"
          className="mt-6 inline-block text-gray-300 hover:text-white transition-colors text-lg"
        >
          rafiul.faisal@gmail.com
        </a>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ ...spring, delay: 0.15 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-6 bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl"
        >
          <div>
            <label className="text-sm text-gray-300 block mb-2">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              required
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
              name="email"
              required
              className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-3 outline-none focus:border-purple-400 transition"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="text-sm text-gray-300 block mb-2">Message</label>
            <textarea
              name="message"
              required
              className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-3 h-32 resize-none outline-none focus:border-pink-400 transition"
              placeholder="Write your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-400 to-pink-400 text-black font-medium hover:opacity-90 active:scale-[0.98] transition-[transform,opacity] duration-150 ease-out"
          >
            Send Message
          </button>
        </motion.form>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ ...spring, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col items-center md:items-start gap-8"
        >
          <h3 className="text-2xl text-white font-light">Connect with me</h3>

          <div className="flex gap-6">
            {/* GitHub */}
            <a
              href="https://github.com/Rafiul007"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md text-gray-300 hover:text-white hover:bg-white/10 hover:-translate-y-1 active:scale-[0.94] transition-[transform,background-color,color] duration-200 ease-out text-2xl"
            >
              <SiGithub />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/rafiul007/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md text-gray-300 hover:text-white hover:bg-white/10 hover:-translate-y-1 active:scale-[0.94] transition-[transform,background-color,color] duration-200 ease-out text-2xl"
            >
              <SiLinkedin />
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/rafiul.faisal007"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md text-gray-300 hover:text-white hover:bg-white/10 hover:-translate-y-1 active:scale-[0.94] transition-[transform,background-color,color] duration-200 ease-out text-2xl"
            >
              <SiFacebook />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/being_rafie/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md text-gray-300 hover:text-white hover:bg-white/10 hover:-translate-y-1 active:scale-[0.94] transition-[transform,background-color,color] duration-200 ease-out text-2xl"
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
