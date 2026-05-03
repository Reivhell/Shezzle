"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import type { Project } from "../data/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-4"
        onClick={onClose}
      >
        {/* Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/85"
        />

        {/* Modal */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative z-10 max-h-[min(90dvh,880px)] w-full max-w-2xl overflow-y-auto overflow-x-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative border-[3px] border-black bg-white shadow-[10px_10px_0px_#FFE500]">
            {/* Close button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute right-2 top-2 z-20 flex h-9 w-9 items-center justify-center border-[2px] border-black bg-white
                shadow-[3px_3px_0px_#000] transition-all duration-150 hover:bg-[#FF4D4D]
                hover:text-white sm:right-4 sm:top-4 sm:h-10 sm:w-10"
            >
                <X className="w-5 h-5" />
              </button>

            {/* Image */}
            <div className="relative flex h-52 items-center justify-center border-b-[3px] border-black bg-gradient-to-br from-[#FFE500] to-[#FFD000] pt-10 sm:h-64 sm:pt-0 md:h-80">
              <span className="px-4 text-center font-mono text-[12px] font-bold text-black/70 sm:text-[14px]">
                [ {project.title.toUpperCase()} ]
              </span>
              {project.featured && (
                <span className="absolute top-4 left-4 font-mono text-[10px] font-bold uppercase tracking-wider bg-black text-white px-3 py-1">
                  Featured
                </span>
              )}
            </div>

            {/* Content */}
            <div className="p-4 sm:p-6 md:p-8">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] font-bold uppercase px-3 py-1 border-[2px] border-black"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h2 className="font-heading text-[28px] md:text-[36px] font-bold uppercase mb-3">
                {project.title}
              </h2>

              {/* Description */}
              <p className="font-body text-[15px] md:text-[16px] text-[#222] leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h3 className="font-mono text-[11px] font-bold uppercase tracking-wider mb-3">
                  Key Features
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0" />
                    <span className="font-body text-[14px] text-[#444]">
                      Modern architecture with clean separation of concerns
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0" />
                    <span className="font-body text-[14px] text-[#444]">
                      Fully responsive design tested across all devices
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0" />
                    <span className="font-body text-[14px] text-[#444]">
                      Optimized performance with lazy loading and code splitting
                    </span>
                  </li>
                </ul>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-3 pt-4 border-t-[2px] border-dashed border-black">
                <a
                  href={project.liveUrl || "#"}
                  onClick={(e) => e.stopPropagation()}
                  className="btn btn-primary flex items-center gap-2"
                >
                  Live Demo
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    onClick={(e) => e.stopPropagation()}
                    className="btn btn-secondary flex items-center gap-2"
                  >
                    GitHub
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
