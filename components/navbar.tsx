"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import GlassSurface from "./GlassSurface";

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
  logoText = "Brand",
  logo,
  logoAlt = "Logo",
  items,
  position = "fixed",
  mobileBreakpoint = "md",
  className = "",
}: GlassNavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggle = () => setMenuOpen(!menuOpen);

  const bpShow = { sm: "sm:flex", md: "md:flex", lg: "lg:flex" }[
    mobileBreakpoint
  ];

  const bpHide = { sm: "sm:hidden", md: "md:hidden", lg: "lg:hidden" }[
    mobileBreakpoint
  ];

  return (
    <>
      <GlassSurface
        height={64}
        width="100%"
        className={`${position} ${className} z-50`}
        borderRadius={18}
        backgroundOpacity={0.05}
        saturation={1}
        brightness={50}
        blur={12}
      >
        <nav className="w-full flex items-center justify-between">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3">
            {logo ? (
              <Image
                src={logo}
                alt={logoAlt}
                width={36}
                height={36}
                className="rounded-lg"
              />
            ) : (
              <div className="w-10 h-10 bg-linear-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
                {logoText.charAt(0)}
              </div>
            )}

            <span className="hidden sm:block text-white font-semibold">
              {logoText}
            </span>
          </Link>

          {/* DESKTOP MENU */}
          <ul className={`hidden ${bpShow} items-center gap-3`}>
            {items.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.href}
                  className="px-4 py-2 text-white/80 hover:text-white rounded-lg hover:bg-white/10 transition"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* MOBILE BUTTON */}
          <button
            className={`${bpHide} text-white p-2 rounded-lg hover:bg-white/10`}
            onClick={toggle}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className={`${bpHide} mt-4`}>
            <ul className="flex flex-col gap-2">
              {items.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-lg"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </GlassSurface>

      {position === "fixed" && <div className="h-24" />}
    </>
  );
}
