"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { projects, type Project } from "../data/projects";
import { ProjectModal } from "./ProjectModal";

const categories = ["ALL", "Featured", "Web", "Mobile", "Tools"] as const;

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState<typeof categories[number]>("ALL");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = filter === "ALL"
    ? projects
    : filter === "Featured"
      ? projects.filter((p) => p.featured)
      : projects;

  return (
    <>
      <section id="projects" className="section bg-section-dark">
        <div className="container">
          {/* Label */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mb-6"
          >
            <span className="section-label text-white">[ 03 — PROJECTS ]</span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
            className="font-heading text-[clamp(28px,4vw,48px)] font-bold text-white mb-2"
          >
            Things I've Built.
          </motion.h2>

          {/* Filter tabs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
            className="mb-8 flex flex-wrap gap-1.5 sm:gap-2"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`
                  font-mono text-[9px] font-bold uppercase tracking-[0.1em] px-2.5 py-1.5 sm:px-4 sm:py-2 sm:text-[11px] sm:tracking-[0.12em]
                  transition-all duration-150 border-2 border-white
                  ${filter === cat
                    ? "bg-white text-black shadow-[3px_3px_0px_#fff]"
                    : "bg-transparent text-white hover:bg-white hover:text-black shadow-[3px_3px_0px_#fff] hover:shadow-[1px_1px_0px_#fff] hover:translate-x-[2px] hover:translate-y-[2px]"
                  }
                `}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((proj, i) => (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.35 + i * 0.06, ease: "easeOut" }}
                whileHover={{ scale: 1.015, y: -3 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelected(proj)}
                className="
                  group cursor-pointer border-[3px] border-black bg-white
                  shadow-[6px_6px_0px_#000] overflow-hidden
                  transition-all duration-150 hover:shadow-[2px_2px_0px_#000]
                  hover:border-[#FFE500]
                "
              >
                {/* Image */}
                <div className="h-48 bg-gradient-to-br from-[#FFE500] to-[#FFD000] border-b-[3px] border-black flex items-center justify-center relative">
                  {proj.featured && (
                    <span className="absolute top-2 left-2 font-mono text-[9px] font-bold uppercase tracking-wider bg-black text-white px-2 py-0.5">
                      Featured
                    </span>
                  )}
                  <span className="font-mono text-[11px] text-black/60">[ preview ]</span>
                </div>

                {/* Tags */}
                <div className="p-4 border-b-[2px] border-dashed border-black/20 flex flex-wrap gap-1.5">
                  {proj.tags.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[9px] font-bold uppercase px-2 py-0.5 border-[1.5px] border-black"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Body */}
                <div className="p-4">
                  <h3 className="font-heading font-bold text-[16px] uppercase mb-1.5">
                    {proj.title}
                  </h3>
                  <p className="font-mono text-[11px] text-[#555] leading-relaxed line-clamp-2">
                    {proj.description}
                  </p>
                  <div className="mt-3 pt-3 border-t-[1px] border-dashed border-black/30 flex items-center justify-between">
                    <span className="font-mono text-[10px] font-bold uppercase text-[#888]">
                      View Project
                    </span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Load More */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.6, ease: "easeOut" }}
            className="mt-12 text-center"
          >
            <button className="btn btn-secondary">
              Load More
            </button>
          </motion.div>
        </div>
      </section>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </>
  );
}
