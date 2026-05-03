"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: "easeOut" as const },
    },
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] items-center pt-[calc(5.25rem+env(safe-area-inset-top,0px))] pb-10 sm:pb-14"
    >
      {/* Background decoration - left side geometric shape */}
      <div className="absolute left-0 top-0 bottom-0 hidden lg:block">
        <div className="absolute left-[10%] top-[15%] w-[500px] h-[500px] border-[4px] border-[#FFE500] bg-transparent rotate-[-15deg] opacity-30 pointer-events-none" />
      </div>

      <motion.div
        className="container relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 items-center gap-8 py-6 sm:py-10 lg:grid-cols-12 lg:gap-12 lg:py-12 min-h-[min(100dvh,920px)] lg:min-h-[85vh]">
          {/* Left Column - Text */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Top badge */}
            <motion.div variants={itemVariants}>
              <span className="
                inline-flex max-w-full items-center gap-2 px-3 py-1.5 rounded-full
                border-[2px] border-black font-mono text-[10px] font-bold sm:text-[11px]
                uppercase tracking-wider bg-[#FFE500] shadow-[3px_3px_0px_#000]
              ">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-black opacity-50"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-black"></span>
                </span>
                AVAILABLE FOR WORK
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="
                font-display text-[clamp(40px,9vw,110px)] leading-[0.9]
                font-bold tracking-tight text-black [overflow-wrap:anywhere]
              "
            >
              <span className="block">NAME</span>
              <span className="block pt-1 font-heading text-[clamp(22px,5vw,56px)] font-normal text-black/80">
                Mobile Application Developer
              </span>
            </motion.h1>

            {/* Sub heading */}
            <motion.p
              variants={itemVariants}
              className="
                font-mono text-[clamp(14px,2.2vw,18px)] text-[#111111] max-w-xl
                leading-relaxed
              "
            >
              Building digital experiences with code. Specialized in modern web
              technologies and scalable architectures.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2"
            >
              <Link
                href="#projects"
                className="
                  btn btn-primary
                "
              >
                View Projects
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
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>

              <Link
                href="#contact"
                className="
                  btn btn-secondary
                "
              >
                Say Hello &darr;
              </Link>
            </motion.div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative pb-8 sm:pb-10 lg:col-span-5">
            <motion.div
              variants={itemVariants}
              className="relative mx-auto w-full max-w-[340px]"
            >
              {/* Image frame - big border */}
              <div className="
                relative mx-auto w-full aspect-[4/5] max-w-[min(100%,340px)]
                border-[3px] border-black
                shadow-[8px_8px_0px_#000]
                bg-[#FFE500]
                overflow-hidden
              ">
                {/* Placeholder avatar area */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#FFE500] to-[#FFD000]">
                  <div className="w-32 h-32 rounded-full border-[3px] border-black bg-white flex items-center justify-center text-center">
                    <span className="font-display text-2xl font-bold text-black">
                      ME
                    </span>
                  </div>
                </div>

                {/* Caption below image */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-4 py-1 bg-white border-[2px] border-black shadow-[3px_3px_0px_#000]">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-black">
                    [ PHOTO ]
                  </span>
                </div>
              </div>

              {/* Decorative rotated badge */}
              <div className="absolute -right-2 top-6 z-10 hidden sm:block sm:-right-4 sm:top-8">
                <div className="
                  px-4 py-1.5 border-[2px] border-black bg-white
                  shadow-[4px_4px_0px_#000]
                  rotate-[-12deg] transform
                  whitespace-nowrap
                ">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wide text-black">
                    ★ Frontend Dev
                  </span>
                </div>
              </div>

              {/* Horizontal accent line */}
              <div className="absolute -left-6 top-20 hidden sm:block">
                <div className="w-20 h-[3px] bg-black shadow-[4px_4px_0px_#000]" />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-1"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="font-mono text-[10px] uppercase tracking-widest text-black/60">
          Scroll Down
        </span>
        <svg
          className="w-5 h-5 text-black"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  );
}
