"use client";

import { motion } from "framer-motion";

export default function NewsletterSection() {
  return (
    <section className="w-full py-20 bg-gradient-to-r from-purple-600/30 via-pink-500/20 to-purple-700/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-[900px] mx-auto px-6 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-light text-white mb-3">
          Subscribe to my{" "}
          <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
            Newsletter
          </span>
        </h2>

        <p className="text-gray-300 text-base md:text-lg mb-8 max-w-xl mx-auto">
          Get updates on new projects, insights, tutorials, and developer
          content.
        </p>

        {/* Subscribe Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-xl border border-white/20 p-4 md:p-6 rounded-2xl shadow-xl max-w-xl mx-auto"
        >
          <form className="flex flex-col md:flex-row gap-4 items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 w-full bg-white/10 border border-white/20 text-white rounded-xl px-4 py-3 outline-none focus:border-purple-300 transition placeholder-gray-400"
            />

            <button
              type="submit"
              className="w-full md:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-purple-400 to-pink-400 text-black font-medium hover:opacity-90 transition"
            >
              Subscribe
            </button>
          </form>
        </motion.div>

        <p className="text-gray-400 text-xs mt-4">
          No spam — unsubscribe anytime.
        </p>
      </motion.div>
    </section>
  );
}
