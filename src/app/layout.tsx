import type { Metadata } from "next";
import { Lato, Merriweather, Poppins } from "next/font/google";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { SanityLive } from "@/sanity/lib/live";
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
  metadataBase: new URL("https://fih-zeta.vercel.app"),
  title: "Foundation for Innovations in Health",
  description:
    "Foundation for Innovations in Health (FIH) – Building a skilled health workforce and expanding access to primary care across rural India.",
  icons: {
    icon: [
      { url: "/favicon_io/favicon.ico" },
      {
        url: "/favicon_io/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon_io/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: [{ url: "/favicon_io/apple-touch-icon.png" }],
    other: [{ rel: "manifest", url: "/favicon_io/site.webmanifest" }],
  },
  openGraph: {
    title: "Foundation for Innovations in Health",
    description:
      "Building a skilled health workforce and expanding access to primary care across rural India.",
    url: "https://fih-zeta.vercel.app",
    siteName: "Foundation for Innovations in Health",
    images: [
      {
        url: "/favicon_io/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Foundation for Innovations in Health",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Foundation for Innovations in Health",
    description:
      "Building a skilled health workforce and expanding access to primary care across rural India.",
    images: ["/favicon_io/android-chrome-512x512.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${lato.variable} ${merriweather.variable} antialiased overflow-x-clip`}
    >
      <body className="flex flex-col bg-surface text-black text-[16px] [font-family:var(--font-body)] overflow-x-clip">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <SanityLive />
      </body>
    </html>
  );
}
