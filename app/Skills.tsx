"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { skills, type Skill } from "./data/skills";

const categories = ["ALL", "Frontend", "Backend", "Tools", "Database", "Design", "AI"] as const;

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState<typeof categories[number]>("ALL");

  const filtered: Skill[] = filter === "ALL"
    ? skills
    : skills.filter((s: Skill) => s.category === filter);

  return (
    <section id="skills" className="section bg-section-light">
      <div className="container">
        {/* Label */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mb-6"
        >
          <span className="section-label">[ 02 — SKILLS ]</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
          className="font-heading text-[clamp(28px,4vw,48px)] font-bold text-black mb-2"
        >
          Tech I Work With.
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
                transition-all duration-150 border-2 border-black
                ${filter === cat
                  ? "bg-black text-white shadow-[3px_3px_0px_#000]"
                  : "bg-white hover:bg-[#FFE500] shadow-[3px_3px_0px_#000] hover:shadow-[1px_1px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px]"
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
          className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 sm:gap-3"
        >
          {filtered.map((skill: Skill, i: number) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: 0.35 + i * 0.04, ease: "easeOut" }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="
                group border-[2px] border-black bg-white shadow-[4px_4px_0px_#000]
                p-2.5 sm:p-3 flex flex-col items-center justify-center gap-1 sm:gap-1.5
                cursor-pointer transition-all duration-150
                hover:shadow-[1px_1px_0px_#000] hover:bg-[#FFE500]
              "
            >
              <div className="w-8 h-8 flex items-center justify-center text-xl">
                {/* Icon placeholder using emoji based on category */}
                <span className="text-[22px]">
                  {skill.category === "Frontend" && "⚛️"}
                  {skill.category === "Backend" && "⚙️"}
                  {skill.category === "Database" && "🗄️"}
                  {skill.category === "Tools" && "🔧"}
                  {skill.category === "Design" && "🎨"}
                  {skill.category === "AI" && "🧠"}
                </span>
              </div>
              <span className="font-mono text-[9px] font-bold uppercase leading-tight tracking-tight text-center text-black sm:text-[10px]">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
