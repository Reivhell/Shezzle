"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section bg-section-muted">
      <div className="container">
        {/* Section label */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mb-6"
        >
          <span className="section-label">[ 01 — ABOUT ]</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
          className="font-heading text-[clamp(28px,4vw,48px)] font-bold text-black leading-tight mb-8"
        >
          A little about me.
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
            className="space-y-5"
          >
            <p className="font-body text-[clamp(15px,1.6vw,18px)] text-[#111111] leading-relaxed">
              I'm a frontend-focused developer who loves building fast, accessible,
              and visually bold interfaces. With a background in design systems
              and component architecture, I bridge the gap between design and code
              to create cohesive, delightful experiences.
            </p>
            <p className="font-body text-[clamp(15px,1.6vw,18px)] text-[#111111] leading-relaxed">
              When I'm not shipping features, you'll find me exploring new
              frameworks, contributing to open-source, or experimenting with
              neobrutalism layouts. I believe in writing clean, maintainable
              code and designing with intention.
            </p>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="pt-2"
            >
              <a
                href="/resume.pdf"
                download
                className="btn btn-primary inline-flex items-center gap-2"
              >
                Download CV
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                  />
                </svg>
              </a>
            </motion.div>
          </motion.div>

          {/* Stats card - brutalist */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
            className="border-[3px] border-black bg-white shadow-[8px_8px_0px_#000] p-0 overflow-hidden"
          >
            <div className="border-b-[1px] border-dashed border-black px-4 py-4 sm:px-5">
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-[#888888]">
                Profile
              </span>
            </div>

            <div className="divide-y-[1px] divide-dashed divide-black">
              <div className="flex flex-col gap-1 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-5">
                <span className="shrink-0 font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-[#888888] sm:text-[11px]">
                  Name
                </span>
                <span className="font-heading text-left text-[15px] font-bold text-black sm:text-right sm:text-[16px]">
                  NAME
                </span>
              </div>

              <div className="flex flex-col gap-1 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-5">
                <span className="shrink-0 font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-[#888888] sm:text-[11px]">
                  Role
                </span>
                <span className="break-words font-heading text-left text-[15px] font-bold text-black sm:text-right sm:text-[16px]">
                  Frontend Developer
                </span>
              </div>

              <div className="flex flex-col gap-1 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-5">
                <span className="shrink-0 font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-[#888888] sm:text-[11px]">
                  Based
                </span>
                <span className="font-heading text-left text-[15px] font-bold text-black sm:text-right sm:text-[16px]">
                  Indonesia
                </span>
              </div>

              <div className="flex flex-col gap-1 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-5">
                <span className="shrink-0 font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-[#888888] sm:text-[11px]">
                  Stack
                </span>
                <span className="break-words font-mono text-[12px] font-medium text-black sm:text-right sm:text-[13px]">
                  Next.js · Tailwind · TS
                </span>
              </div>

              <div className="flex flex-col gap-1 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-5">
                <span className="shrink-0 font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-[#888888] sm:text-[11px]">
                  Status
                </span>
                <span className="flex flex-wrap items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FFE500] opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FFE500]"></span>
                  </span>
                  <span className="font-mono text-[13px] font-bold uppercase text-black">
                    Open to Work
                  </span>
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
