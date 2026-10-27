/* eslint-disable @next/next/no-img-element */
"use client";

import { ReactNode, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaNodeJs } from "react-icons/fa";
import {
  SiGithub,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import SectionHeading from "../SectionHeading";
import Spotlight from "../Spotlight";
import GitHubContributions from "../GitHubContributions";
import { inViewOnce, reveal, spring, springSoft } from "@/lib/motion";

const stack = [
  { name: "React", icon: <SiReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "NestJS", icon: <SiNestjs /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
];

const building = [
  {
    name: "AgencyOS",
    detail: "All-in-one SaaS for agencies: project, HR, and agency management on one platform",
  },
  {
    name: "PresKribe",
    detail: "Digital prescription SaaS with everything doctors in Bangladesh need",
  },
  {
    name: "EdTech LMS",
    detail: "Learning management system for a Bangladeshi EdTech platform, with live courses and e-commerce in one place",
  },
];

function Tile({
  children,
  className = "",
  index,
  bare,
}: {
  children: ReactNode;
  className?: string;
  index: number;
  /** Full-bleed content, positioned against the tile itself */
  bare?: boolean;
}) {
  return (
    <motion.div
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={inViewOnce}
      transition={{ ...spring, delay: index * 0.06 }}
      className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl backdrop-saturate-150 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-colors duration-300 hover:border-white/20 ${className}`}
    >
      <Spotlight />
      {bare ? children : <div className="relative h-full">{children}</div>}
    </motion.div>
  );
}

function Label({ children }: { children: ReactNode }) {
  return (
    <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.18em] text-gray-500">
      {children}
    </p>
  );
}

function LocalTime() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Dhaka",
      hour: "2-digit",
      minute: "2-digit",
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 15_000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="tabular-nums">
      {time ?? "--:--"}
    </span>
  );
}

export default function AboutMeSection() {
  return (
    <section className="max-w-[1400px] mx-auto px-6 py-20" id="about">
      <SectionHeading eyebrow="Introduction" title="About" highlight="Me" className="mb-12" />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:auto-rows-[minmax(0,auto)]">
        {/* Intro */}
        <Tile index={0} className="md:col-span-2 md:row-span-2 flex flex-col">
          <Label>Hello</Label>
          <p className="text-lg md:text-xl leading-relaxed text-gray-200 font-light">
            I&apos;m a Full Stack Engineer with nearly 3 years of development
            experience, building products for clients in the UK, Norway, and
            Sweden.
          </p>
          <p className="mt-4 text-gray-400 leading-relaxed">
            I work mostly with React, Next.js, TypeScript, and Node.js, and
            I&apos;m going deeper into backend work with NestJS, microservices,
            and databases.
          </p>
          <div className="mt-auto flex flex-wrap gap-2 pt-6">
            {["Problem Solver", "Team Player", "Lifelong Learner"].map((label) => (
              <span
                key={label}
                className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-1.5 text-sm text-gray-300"
              >
                {label}
              </span>
            ))}
          </div>
        </Tile>

        {/* Photo */}
        <Tile index={1} bare className="md:row-span-2 p-0! min-h-72">
          <img
            src="/about.png"
            alt="M Rafiul Faisal"
            className="absolute inset-0 h-full w-full object-cover opacity-85 transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/70 to-transparent" />
        </Tile>

        {/* Current role */}
        <Tile index={2}>
          <Label>Now</Label>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(110,231,183,0.9)]" />
            <h3 className="text-xl font-light tracking-[-0.01em] text-white">GetOnNet AS</h3>
          </div>
          <p className="mt-1 text-sm text-purple-300">Junior Full Stack Engineer</p>
          <p className="mt-1 text-sm text-gray-400">Clients in Norway &amp; Sweden</p>
        </Tile>

        {/* Location & time */}
        <Tile index={3}>
          <Label>Based in</Label>
          <h3 className="text-xl font-light tracking-[-0.01em] text-white">Bangladesh</h3>
          <p className="mt-1 text-sm text-gray-400">Working remotely</p>
          <p className="mt-3 text-3xl font-light tracking-[-0.03em] text-white">
            <LocalTime />
            <span className="ml-2 text-sm tracking-normal text-gray-500">GMT+6</span>
          </p>
        </Tile>

        {/* Stack */}
        <Tile index={4} className="md:col-span-2">
          <Label>Core stack</Label>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
            {stack.map((s) => (
              <motion.div
                key={s.name}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.95 }}
                transition={springSoft}
                className="flex flex-col items-center gap-2 rounded-2xl border border-white/5 bg-white/[0.03] py-4 text-gray-300 hover:text-white hover:border-white/15 transition-colors"
              >
                <span className="text-2xl text-purple-300">{s.icon}</span>
                <span className="text-[11px]">{s.name}</span>
              </motion.div>
            ))}
          </div>
        </Tile>

        {/* Currently building */}
        <Tile index={5} className="md:col-span-2 md:row-span-2">
          <Label>Currently building</Label>
          <ul className="space-y-2.5">
            {building.map((b) => (
              <li
                key={b.name}
                className="flex gap-3 rounded-2xl border border-white/5 bg-white/[0.03] px-4 py-3 transition-colors duration-200 hover:border-white/15 hover:bg-white/[0.05]"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300 shadow-[0_0_8px_rgba(110,231,183,0.8)]" />
                <div>
                  <p className="text-white">{b.name}</p>
                  <p className="text-sm leading-relaxed text-gray-400">{b.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </Tile>

        {/* Education */}
        <Tile index={6} className="md:col-span-2">
          <Label>Education</Label>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-white">MS, Management Information Systems</p>
              <p className="text-sm text-gray-400">In progress</p>
            </div>
            <div>
              <p className="text-white">B.Sc. Computer Science &amp; Engineering</p>
              <p className="text-sm text-gray-400">Daffodil International University · 2024</p>
            </div>
          </div>
        </Tile>

        {/* GitHub */}
        <Tile index={7} className="md:col-span-4">
          <div className="flex items-start justify-between gap-4">
            <Label>GitHub activity</Label>
            <a
              href="https://github.com/Rafiul007"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 -mt-1 inline-flex items-center gap-1.5 text-sm text-purple-300 hover:text-purple-200 active:scale-[0.97] transition-[color,transform] duration-150"
            >
              <SiGithub /> Rafiul007
            </a>
          </div>
          <GitHubContributions />
        </Tile>
      </div>
    </section>
  );
}
