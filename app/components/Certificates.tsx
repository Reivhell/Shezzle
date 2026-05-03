"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { certificates, type Certificate } from "../data/certificates";

export default function Certificates() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [lightbox, setLightbox] = useState<Certificate | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (cert: Certificate, idx: number) => {
    setCurrentIndex(idx);
    setLightbox(cert);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightbox(null);
    document.body.style.overflow = "";
  };

  const showPrev = () => {
    const prev = (currentIndex - 1 + certificates.length) % certificates.length;
    setCurrentIndex(prev);
    setLightbox(certificates[prev]);
  };

  const showNext = () => {
    const next = (currentIndex + 1) % certificates.length;
    setCurrentIndex(next);
    setLightbox(certificates[next]);
  };

  return (
    <>
      <section id="certificates" className="section bg-section-light">
        <div className="container">
          {/* Label */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mb-6"
          >
            <span className="section-label">[ 04 — CERTIFICATES ]</span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
            className="font-heading text-[clamp(28px,4vw,48px)] font-bold text-black mb-2"
          >
            What I've Earned.
          </motion.h2>

          {/* Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {certificates.map((cert, i) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.35 + i * 0.05, ease: "easeOut" }}
                whileHover={{ translateY: -4, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => openLightbox(cert, i)}
                className="
                  group relative border-[2px] border-black bg-white
                  shadow-[4px_4px_0px_#000] cursor-pointer overflow-hidden
                  transition-all duration-150 hover:shadow-[6px_6px_0px_#000]
                  aspect-[3/2]
                "
              >
                {/* Placeholder image area */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FFE500] to-[#FFD000] flex items-center justify-center">
                  <span className="font-mono text-[10px] font-bold text-black/50">
                    CERT
                  </span>
                </div>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-[#FFE500]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-150 flex items-center justify-center">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 p-3 sm:p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-h-[min(90dvh,900px)] w-full max-w-5xl overflow-y-auto overflow-x-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image area */}
              <div className="relative flex aspect-[4/3] w-full max-w-full items-center justify-center border-[3px] border-black bg-gradient-to-br from-[#FFE500] to-[#FFD000] shadow-[8px_8px_0px_#000]">
                <span className="px-4 text-center font-heading text-[clamp(1rem,4vw,1.5rem)] font-bold text-black/70">
                  {lightbox.title}
                </span>
                <button
                  type="button"
                  onClick={closeLightbox}
                  className="absolute right-2 top-2 flex h-9 w-9 items-center justify-center border-[2px] border-black bg-white shadow-[3px_3px_0px_#000] transition-all hover:bg-[#FF4D4D] hover:text-white sm:right-4 sm:top-4 sm:h-10 sm:w-10"
                >
                  ✕
                </button>
              </div>

              {/* Info */}
              <div className="border-[3px] border-black bg-white p-4 shadow-[8px_8px_0px_#000] sm:p-5">
                <h3 className="mb-1 font-heading text-[clamp(1.125rem,4vw,1.5rem)] font-bold uppercase">
                  {lightbox.title}
                </h3>
                <p className="font-mono text-[12px] text-[#666] mb-3">
                  {lightbox.issuer} · {lightbox.issueDate}
                </p>
                <div className="flex gap-3">
                  {lightbox.credentialUrl && (
                    <a
                      href={lightbox.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary text-sm py-2 px-4"
                    >
                      View Credential
                    </a>
                  )}
                </div>
              </div>

              {/* Nav buttons */}
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); showPrev(); }}
                className="absolute left-1 top-[38%] z-30 flex h-9 w-9 -translate-y-1/2 items-center justify-center border-[2px] border-black bg-white shadow-[3px_3px_0px_#000] transition-all hover:bg-[#FFE500] sm:left-2 sm:top-1/2 sm:h-10 sm:w-10"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); showNext(); }}
                className="absolute right-1 top-[38%] z-30 flex h-9 w-9 -translate-y-1/2 items-center justify-center border-[2px] border-black bg-white shadow-[3px_3px_0px_#000] transition-all hover:bg-[#FFE500] sm:right-2 sm:top-1/2 sm:h-10 sm:w-10"
              >
                ›
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

