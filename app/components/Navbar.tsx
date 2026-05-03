"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-200
          ${scrolled ? "shadow-[0_6px_0px_#000]" : ""}
        `}
        style={{ backgroundColor: "#FAFAFA" }}
      >
        <div className="max-w-[1280px] mx-auto px-3 sm:px-5 pb-1 max-[380px]:px-2">
          {/* Floating pill inner */}
          <div
            className="
              relative mt-3 sm:mt-4 flex h-14 items-center justify-between gap-2
              border-[3px] border-black bg-white px-3 sm:px-4
              shadow-[6px_6px_0px_#000]
              transition-all duration-200
              md:mx-4
            "
          >
            {/* Floating pill inner */}

            <Link href="/" className="flex items-center">
              <span
                className="
                  font-display text-[22px] font-bold leading-none
                  tracking-[-0.02em] text-black
                "
              >
                N.
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden items-center gap-8 md:flex">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="
                    font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-black
                    relative after:absolute after:bottom-[-4px] after:left-0 after:h-[3px]
                    after:w-0 after:bg-[#FFE500] after:transition-all after:duration-200
                    hover:after:w-full
                  "
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right area */}
            <div className="hidden items-center gap-4 md:flex">
              <span
                className="
                  hidden items-center gap-1.5 rounded-full border-[2px] border-black
                  bg-[#FFE500] px-3 py-1 font-mono text-[10px] font-bold uppercase
                  shadow-[3px_3px_0px_#000] md:flex
                "
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-black opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-black"></span>
                </span>
                OPEN
              </span>
              <span className="font-mono text-[12px] font-bold text-black">NAME</span>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden rounded-none border-[2px] border-black bg-white p-1.5 shadow-[3px_3px_0px_#000] transition-all hover:shadow-[1px_1px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px]"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-white md:hidden pt-[env(safe-area-inset-top)]">
          <div className="container flex h-full min-h-0 flex-col pt-28 pb-[env(safe-area-inset-bottom)]">
            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="
                    border-b-[1px] border-dashed border-black py-4 font-mono text-[16px]
                    font-bold uppercase tracking-[0.12em] text-black transition-colors
                    hover:bg-[#FFE500]
                  "
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-auto pb-8">
              <div className="flex items-center gap-3">
                <span
                  className="
                    flex items-center gap-1.5 rounded-full border-[2px] border-black
                    bg-[#FFE500] px-3 py-1 font-mono text-[10px] font-bold uppercase
                    shadow-[3px_3px_0px_#000]
                  "
                >
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-black opacity-50"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-black opacity-75"></span>
                  </span>
                  OPEN
                </span>
                <span className="font-mono text-[14px] font-bold">NAME</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
