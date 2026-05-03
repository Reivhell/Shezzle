import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Using next/font local (fonts downloaded to public/font) for better performance & offline builds
const bebasNeue = localFont({
  src: "../public/font/BebasNeue-Regular.ttf",
  variable: "--font-display",
  weight: "400",
  display: "swap",
  fallback: ["Impact", "Arial Black"],
});

const syne = localFont({
  src: "../public/font/Syne-Regular.ttf",
  variable: "--font-heading",
  weight: "400 800",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

const spaceMono = localFont({
  src: [
    { path: "../public/font/SpaceMono-Regular.ttf", weight: "400", style: "normal" },
    { path: "../public/font/SpaceMono-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-mono",
  display: "swap",
  fallback: ["Courier New", "monospace"],
});

const dmSans = localFont({
  src: [
    { path: "../public/font/DMMono-Regular.ttf", weight: "400", style: "normal" },
    { path: "../public/font/DMMono-Medium.ttf", weight: "500", style: "normal" },
  ],
  variable: "--font-body",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  title: {
    default: "Portfolio · Neobrutalism",
    template: "%s | Portfolio",
  },
  description: "Personal portfolio — neobrutalism design system with Next.js + Tailwind",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio.example.com",
    siteName: "Portfolio",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FFE500",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${syne.variable} ${spaceMono.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans selection:bg-[#FFE500] selection:text-black">
        {children}
      </body>
    </html>
  );
}
