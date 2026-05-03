export interface Skill {
  id: string;
  name: string;
  category: "Frontend" | "Backend" | "Tools" | "Database" | "Design" | "AI";
  icon?: string;
}

export const skills: Skill[] = [
  // Frontend
  { id: "s1", name: "Next.js", category: "Frontend" },
  { id: "s2", name: "React", category: "Frontend" },
  { id: "s3", name: "TypeScript", category: "Frontend" },
  { id: "s4", name: "Tailwind CSS", category: "Frontend" },
  { id: "s5", name: "Framer Motion", category: "Frontend" },
  { id: "s6", name: "HTML5", category: "Frontend" },
  { id: "s7", name: "CSS3", category: "Frontend" },

  // Backend
  { id: "s8", name: "Node.js", category: "Backend" },
  { id: "s9", name: "Express", category: "Backend" },
  { id: "s10", name: "Edge Runtime", category: "Backend" },
  { id: "s11", name: "Server Actions", category: "Backend" },

  // Database / Data
  { id: "s12", name: "Supabase", category: "Database" },
  { id: "s13", name: "PostgreSQL", category: "Database" },
  { id: "s14", name: "Prisma", category: "Database" },

  // Tools
  { id: "s15", name: "Vercel", category: "Tools" },
  { id: "s16", name: "Git", category: "Tools" },
  { id: "s17", name: "GitHub", category: "Tools" },
  { id: "s18", name: "Figma", category: "Tools" },

  // AI / Advanced
  { id: "s19", name: "OpenAI API", category: "AI" },
  { id: "s20", name: "LangChain", category: "AI" },
  { id: "s21", name: "AI SDK", category: "AI" },
];
