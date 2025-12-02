import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "mini-bell.com",
  description: "Showcase of my PWAs and Blog",
};

import { ThemeProvider } from "@/context/ThemeContext";
import ThemeToggle from "@/components/ThemeToggle";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2875879574828967" crossOrigin="anonymous"></script>
      </head>
      <body>
        <ThemeProvider>
          <ThemeToggle />
          <Header />
          <main className="container" style={{ minHeight: '80vh', paddingTop: '2rem' }}>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
