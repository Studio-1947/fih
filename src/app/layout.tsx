import type { Metadata } from "next";
import { Lato, Merriweather, Poppins } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const lato = Lato({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

const merriweather = Merriweather({
  variable: "--font-quote",
  subsets: ["latin"],
  style: ["italic"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "NGO Website",
  description: "Modern NGO website built with Next.js and Sanity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${lato.variable} ${merriweather.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-surface text-black [font-family:var(--font-body)]">
        <Header />
        <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
