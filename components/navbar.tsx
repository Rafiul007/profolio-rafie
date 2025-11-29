/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

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

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
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

  return (
    <>
      {/* Main Navbar */}
      <nav className={`${position} top-0 left-0 right-0 z-50 ${className}`}>
        <div className="max-w-[1400px] mx-auto px-6 py-4">
          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl px-6 py-4">
            <div className="flex items-center justify-between">
              {/* LOGO */}
              <a href="/" className="flex items-center gap-3 z-50">
                {logo ? (
                  <img
                    src={logo}
                    alt={logoAlt}
                    className="w-10 h-10 rounded-lg"
                  />
                ) : (
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                    {logoText.charAt(0)}
                  </div>
                )}

                <span className="text-white font-semibold text-lg">
                  {logoText}
                </span>
              </a>

              {/* DESKTOP MENU */}
              <ul className={`hidden ${bpShow} items-center gap-2`}>
                {items.map((item, idx) => (
                  <li key={idx}>
                    <a
                      href={item.href}
                      className="px-5 py-2.5 text-gray-300 hover:text-white rounded-xl hover:bg-white/10 transition-all duration-300 font-medium"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>

              {/* MOBILE HAMBURGER BUTTON */}
              <button
                className={`${bpHide} text-white p-2 rounded-xl hover:bg-white/10 transition-all duration-300 z-50`}
                onClick={toggle}
                aria-label="Toggle menu"
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      {menuOpen && (
        <div
          className={`${bpHide} fixed inset-0 z-40 bg-black/60 backdrop-blur-sm`}
          onClick={toggle}
        />
      )}

      {/* MOBILE MENU PANEL */}
      <div
        className={`${bpHide} fixed top-0 right-0 h-full w-[280px] bg-black/95 backdrop-blur-xl border-l border-white/10 z-40 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-24 px-6">
          <ul className="flex flex-col gap-2">
            {items.map((item, idx) => (
              <li key={idx}>
                <a
                  href={item.href}
                  className="flex items-center gap-3 px-5 py-4 text-gray-300 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300 font-medium"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.icon && <span className="text-xl">{item.icon}</span>}
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Optional: Add social links or additional info */}
          <div className="mt-auto pb-8 pt-8 border-t border-white/10">
            <p className="text-gray-400 text-sm text-center">
              © 2024 {logoText}
            </p>
          </div>
        </div>
      </div>

      {/* Spacer for fixed navbar */}
      {position === "fixed" && <div className="h-20" />}
    </>
  );
}
