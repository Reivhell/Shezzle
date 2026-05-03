export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  image: string;
  credentialUrl?: string;
}

export const certificates: Certificate[] = [
  {
    id: "c1",
    title: "Next.js App Router Deep Dive",
    issuer: "Vercel",
    issueDate: "2025-03",
    image: "/certificate-1.png",
    credentialUrl: "https://vercel.com/cert/xyz",
  },
  {
    id: "c2",
    title: "TypeScript Fundamentals",
    issuer: "Total TypeScript",
    issueDate: "2025-02",
    image: "/placeholder-cert-2.png",
    credentialUrl: "https://totaltypescript.com/cert/xyz",
  },
  {
    id: "c3",
    title: "Advanced React Patterns",
    issuer: "Frontend Masters",
    issueDate: "2025-01",
    image: "/placeholder-cert-3.png",
    credentialUrl: "https://frontendmasters.com/cert/xyz",
  },
  {
    id: "c4",
    title: "UI/UX Design for Developers",
    issuer: "DesignCourse",
    issueDate: "2024-12",
    image: "/placeholder-cert-4.png",
    credentialUrl: "https://designcourse.com/cert/xyz",
  },
  {
    id: "c5",
    title: "Supabase Crash Course",
    issuer: "Supabase",
    issueDate: "2024-11",
    image: "/placeholder-cert-5.png",
    credentialUrl: "https://supabase.com/cert/xyz",
  },
  {
    id: "c6",
    title: "Neobrutalism in Web Design",
    issuer: "Brutalist UI Weekly",
    issueDate: "2024-10",
    image: "/placeholder-cert-6.png",
    credentialUrl: "https://brutalistui.com/cert/xyz",
  },
];
