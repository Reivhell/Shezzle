export type ProjectTag = "Next.js" | "React" | "Tailwind" | "TypeScript" | "Node.js" | "Supabase" | "Figma" | "AI";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: ProjectTag[];
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "E-Commerce Dashboard",
    description:
      "Dashboard admin modern untuk manajemen produk, pesanan, dan analitik penjualan real-time dengan role-based access control.",
    image: "/placeholder-project-1.png",
    tags: ["Next.js", "Tailwind", "TypeScript", "Supabase"],
    liveUrl: "https://demo.example.com",
    repoUrl: "https://github.com/example/ecom-dashboard",
    featured: true,
  },
  {
    id: "proj-2",
    title: "TaskFlow - Productivity App",
    description:
      "Aplikasi manajemen tugas kolaboratif dengan drag-and-drop board, notifikasi real-time, dan integrasi kalender.",
    image: "/placeholder-project-2.png",
    tags: ["React", "TypeScript", "Node.js", "Supabase"],
    liveUrl: "https://taskflow.example.com",
    repoUrl: "https://github.com/example/taskflow",
    featured: false,
  },
  {
    id: "proj-3",
    title: "AI Resume Optimizer",
    description:
      "Tool analisis CV berbasis AI untuk memberikan saran perbaikan konten dan desain agar lebih lolos seleksi otomatis HR.",
    image: "/placeholder-project-3.png",
    tags: ["Next.js", "AI", "Tailwind", "TypeScript"],
    liveUrl: "https://resume-ai.example.com",
    repoUrl: "https://github.com/example/ai-resume",
    featured: true,
  },
  {
    id: "proj-4",
    title: "Brand Website Studio",
    description:
      "Landing page studio kreatif dengan animasi halus dan CMS headless untuk update portofolio klien yang cepat.",
    image: "/placeholder-project-4.png",
    tags: ["Next.js", "Tailwind", "Figma", "TypeScript"],
    liveUrl: "https://studio.example.com",
    repoUrl: "https://github.com/example/brand-studio",
    featured: false,
  },
  {
    id: "proj-5",
    title: "Open Source UI Kit",
    description:
      "Kumpulan komponen UI neobrutalism siap pakai untuk mempercepat prototyping dan development aplikasi web.",
    image: "/placeholder-project-5.png",
    tags: ["React", "TypeScript", "Tailwind"],
    liveUrl: "https://ui-kit.example.com",
    repoUrl: "https://github.com/example/ui-kit",
    featured: false,
  },
  {
    id: "proj-6",
    title: "SaaS Analytics Portal",
    description:
      "Portal analytics customer self-service dengan metrik kunci, cohort analysis, dan ekspor data fleksibel.",
    image: "/placeholder-project-6.png",
    tags: ["Next.js", "Supabase", "Tailwind", "TypeScript"],
    liveUrl: "https://saas-analytics.example.com",
    repoUrl: "https://github.com/example/saas-analytics",
    featured: true,
  },
];
