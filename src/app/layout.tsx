import type { Metadata } from "next";
import { Lato, Merriweather, Poppins } from "next/font/google";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
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
  metadataBase: new URL("https://fihindia.org"), // Replace with actual domain when available
  title: "Foundation for Innovations in Health",
  description:
    "Foundation for Innovations in Health (FIH) – Building a skilled health workforce and expanding access to primary care across rural India.",
  openGraph: {
    title: "Foundation for Innovations in Health",
    description:
      "Building a skilled health workforce and expanding access to primary care across rural India.",
    url: "https://fihindia.org",
    siteName: "Foundation for Innovations in Health",
    images: [
      {
        url: "/logos/logo_nav.png",
        width: 800,
        height: 800,
        alt: "FIH Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Foundation for Innovations in Health",
    description:
      "Building a skilled health workforce and expanding access to primary care across rural India.",
    images: ["/logos/logo_nav.png"],
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
      className={`${poppins.variable} ${lato.variable} ${merriweather.variable} h-full overflow-x-hidden antialiased`}
    >
      <body className="min-h-full overflow-x-hidden flex flex-col bg-surface text-black [font-family:var(--font-body)]">
        <Header />
        <main className="mx-auto w-full max-w-7xl flex-1 px-4 pt-8 pb-0 sm:px-6 lg:px-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
