/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { spring, springSnappy } from "@/lib/motion";

export interface NavItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

interface GlassNavbarProps {
  logoText?: string;
  logo?: string;
  logoAlt?: string;
  items: NavItem[];
  position?: "fixed" | "sticky" | "relative";
  mobileBreakpoint?: "sm" | "md" | "lg";
  className?: string;
}

export default function GlassNavbar({
  logoText = "Rafie",
  logo,
  logoAlt = "Logo",
  items = [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  position = "fixed",
  mobileBreakpoint = "md",
  className = "",
}: GlassNavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(items[0]?.href);
  const [hovered, setHovered] = useState<string | null>(null);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 24));

  // Track which section is on screen so the pill follows the reader
  useEffect(() => {
    const sections = items
      .filter((i) => i.href.startsWith("#"))
      .map((i) => document.querySelector(i.href))
      .filter((el): el is Element => !!el);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));

    const onTop = () => window.scrollY < 200 && setActive(items[0]?.href);
    window.addEventListener("scroll", onTop, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onTop);
    };
  }, [items]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  const toggle = () => setMenuOpen(!menuOpen);

  const bpShow = { sm: "sm:flex", md: "md:flex", lg: "lg:flex" }[
    mobileBreakpoint
  ];

  const bpHide = { sm: "sm:hidden", md: "md:hidden", lg: "lg:hidden" }[
    mobileBreakpoint
  ];

  // The pill sits under the hovered link, falling back to the active section
  const pillTarget = hovered ?? active;

  return (
    <>
      {/* Main Navbar */}
      <nav className={`${position} top-0 left-0 right-0 z-50 ${className}`}>
        <div className="max-w-[1400px] mx-auto px-6 py-4">
          <motion.div
            animate={{
              paddingTop: scrolled ? 10 : 16,
              paddingBottom: scrolled ? 10 : 16,
            }}
            transition={spring}
            className={`rounded-2xl px-4 md:px-6 border backdrop-blur-xl backdrop-saturate-150 transition-[background-color,border-color,box-shadow] duration-500 ${
              scrolled
                ? "bg-black/40 border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.08)]"
                : "bg-white/[0.04] border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
            }`}
          >
            <div className="flex items-center justify-between">
              {/* LOGO */}
              <a href="/" className="flex items-center gap-3 z-50 active:scale-[0.97] transition-transform duration-150">
                {logo ? (
                  <img
                    src={logo}
                    alt={logoAlt}
                    className="w-10 h-10 rounded-lg"
                  />
                ) : (
                  <div className="w-10 h-10 bg-linear-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white font-semibold text-lg shadow-[0_4px_16px_rgba(168,85,247,0.35)]">
                    {logoText.charAt(0)}
                  </div>
                )}

                <span className="text-white font-semibold text-lg tracking-[-0.01em]">
                  {logoText}
                </span>
              </a>

              {/* DESKTOP MENU */}
              <ul
                className={`hidden ${bpShow} items-center gap-1`}
                onMouseLeave={() => setHovered(null)}
              >
                {items.map((item) => {
                  const isActive = pillTarget === item.href;
                  return (
                    <li key={item.href} className="relative">
                      <a
                        href={item.href}
                        onMouseEnter={() => setHovered(item.href)}
                        className={`relative z-10 block px-5 py-2.5 rounded-xl text-sm font-medium transition-colors duration-200 active:scale-[0.97] ${
                          isActive ? "text-white" : "text-gray-400 hover:text-white"
                        }`}
                      >
                        {item.label}
                      </a>
                      {isActive && (
                        <motion.span
                          layoutId="nav-pill"
                          transition={springSnappy}
                          className="absolute inset-0 rounded-xl bg-white/10 border border-white/10"
                        />
                      )}
                    </li>
                  );
                })}
              </ul>

              {/* MOBILE HAMBURGER BUTTON */}
              <button
                className={`${bpHide} text-white p-2 rounded-xl hover:bg-white/10 active:scale-[0.94] transition-[transform,background-color] duration-150 z-50`}
                onClick={toggle}
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={menuOpen ? "close" : "open"}
                    initial={{ opacity: 0, rotate: -45, scale: 0.8 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 45, scale: 0.8 }}
                    transition={springSnappy}
                    className="block"
                  >
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                  </motion.span>
                </AnimatePresence>
              </button>
            </div>
          </motion.div>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <>
            {/* MOBILE MENU OVERLAY */}
            <motion.div
              key="scrim"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className={`${bpHide} fixed inset-0 z-40 bg-black/60 backdrop-blur-sm`}
              onClick={toggle}
            />

            {/* MOBILE MENU PANEL — enters and leaves along the same edge */}
            <motion.div
              key="panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className={`${bpHide} fixed top-0 right-0 h-full w-[280px] bg-black/80 backdrop-blur-2xl backdrop-saturate-150 border-l border-white/10 z-40`}
            >
              <motion.div
                className="flex flex-col h-full pt-24 px-6"
                initial="hidden"
                animate="visible"
                variants={{ visible: { transition: { staggerChildren: 0.04, delayChildren: 0.08 } } }}
              >
                <ul className="flex flex-col gap-2">
                  {items.map((item) => (
                    <motion.li
                      key={item.href}
                      variants={{ hidden: { opacity: 0, x: 24 }, visible: { opacity: 1, x: 0 } }}
                      transition={spring}
                    >
                      <a
                        href={item.href}
                        className={`flex items-center gap-3 px-5 py-4 rounded-xl font-medium transition-colors duration-200 active:scale-[0.98] ${
                          active === item.href
                            ? "text-white bg-white/10"
                            : "text-gray-300 hover:text-white hover:bg-white/10"
                        }`}
                        onClick={() => setMenuOpen(false)}
                      >
                        {item.icon && <span className="text-xl">{item.icon}</span>}
                        {item.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-auto pb-8 pt-8 border-t border-white/10">
                  <p className="text-gray-400 text-sm text-center">
                    © {new Date().getFullYear()} {logoText}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer for fixed navbar */}
      {position === "fixed" && <div className="h-20" />}
    </>
  );
}
