"use client";

import { useState, useRef, FormEvent } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Send, Pin } from "lucide-react";

interface Comment {
  id: string;
  name: string;
  message: string;
  timestamp: string;
  pinned?: boolean;
}

const initialComments: Comment[] = [
  {
    id: "c1",
    name: "Sarah Chen",
    message: "Amazing portfolio! Love the neobrutalism aesthetic. The attention to detail is incredible.",
    timestamp: "2 hours ago",
    pinned: true,
  },
  {
    id: "c2",
    name: "Alex Rivera",
    message: "Your work on the UI kit is super clean. Keep building!",
    timestamp: "5 hours ago",
  },
  {
    id: "c3",
    name: "Maya Patel",
    message: "The animations are so smooth. Would love to collab on a project sometime!",
    timestamp: "1 day ago",
  },
];

export default function Comments() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ name?: string; message?: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: { name?: string; message?: string } = {};
    if (!name.trim()) newErrors.name = "Name is required";
    if (message.trim().length < 5)
      newErrors.message = "Message must be at least 5 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const newComment: Comment = {
      id: `c${Date.now()}`,
      name: name.trim(),
      message: message.trim(),
      timestamp: "Just now",
    };

    setComments([newComment, ...comments]);
    setName("");
    setMessage("");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      <section id="contact" className="section bg-section-muted">
        <div className="container">
          {/* Label */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mb-6"
          >
            <span className="section-label">[ 05 — COMMENTS ]</span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
            className="font-heading text-[clamp(28px,4vw,48px)] font-bold text-black mb-8"
          >
            Leave a Message.
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Comments feed */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
              className="space-y-4 max-h-[480px] overflow-y-auto pr-2"
            >
              {comments.map((comment, i) => (
                <motion.div
                  key={comment.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.25 + i * 0.05 }}
                  className={`
                    relative border-[2px] border-black bg-white p-4
                    shadow-[4px_4px_0px_#000] transition-all duration-150
                    ${comment.pinned ? "bg-[#FFE500]/10" : ""}
                  `}
                >
                  {comment.pinned && (
                    <div className="absolute -top-3 left-4 bg-[#FFE500] border-[2px] border-black px-2 py-0.5">
                      <span className="flex items-center gap-1 font-mono text-[9px] font-bold uppercase">
                        <Pin className="w-3 h-3" />
                        Pinned
                      </span>
                    </div>
                  )}

                  <div className="flex items-start gap-3">
                    {/* Avatar */}
                    <div className="w-10 h-10 border-[2px] border-black bg-[#F0F0F0] flex items-center justify-center flex-shrink-0">
                      <span className="font-mono text-[14px] font-bold text-black/60">
                        {comment.name.charAt(0).toUpperCase()}
                      </span>
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="mb-1 flex flex-col gap-0.5 sm:flex-row sm:items-center sm:justify-between sm:gap-2">
                        <span className="font-heading text-[14px] font-bold text-black">
                          {comment.name}
                        </span>
                        <span className="shrink-0 font-mono text-[10px] text-[#888] uppercase">
                          {comment.timestamp}
                        </span>
                      </div>
                      <p className="font-body text-[13px] text-[#333] leading-relaxed">
                        {comment.message}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name input */}
                <div className="space-y-1">
                  <label className="font-mono text-[11px] font-bold uppercase tracking-wider text-black">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name..."
                    className={`
                      w-full px-4 py-3 font-mono text-[14px] text-black
                      bg-white border-[2px] border-black outline-none
                      placeholder:text-[#888] placeholder:italic
                      transition-shadow duration-150
                      focus:shadow-[4px_4px_0px_#000]
                      ${errors.name ? "border-[#FF4D4D] shadow-[3px_3px_0px_#FF4D4D]" : "shadow-[3px_3px_0px_#000]"}
                    `}
                  />
                  {errors.name && (
                    <span className="font-mono text-[11px] text-[#FF4D4D]">
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Message textarea */}
                <div className="space-y-1">
                  <label className="font-mono text-[11px] font-bold uppercase tracking-wider text-black">
                    Your Message
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write something nice..."
                    rows={5}
                    className={`
                      w-full px-4 py-3 font-mono text-[14px] text-black
                      bg-white border-[2px] border-black outline-none resize-y
                      placeholder:text-[#888] placeholder:italic
                      transition-shadow duration-150
                      focus:shadow-[4px_4px_0px_#000]
                      ${errors.message ? "border-[#FF4D4D] shadow-[3px_3px_0px_#FF4D4D]" : "shadow-[3px_3px_0px_#000]"}
                    `}
                  />
                  {errors.message && (
                    <span className="font-mono text-[11px] text-[#FF4D4D]">
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn btn-primary justify-center"
                >
                  Send Message
                  <Send className="w-4 h-4" />
                </motion.button>

                {/* Success message */}
                <AnimatePresence>
                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="border-[2px] border-black bg-[#B8FF57] p-3 shadow-[3px_3px_0px_#000]"
                    >
                      <span className="font-mono text-[12px] font-bold text-black">
                        Message sent successfully!
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
