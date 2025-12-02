import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "minibell.com",
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
