import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "minibell.com",
  description: "Showcase of my PWAs and Blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="container" style={{ minHeight: '80vh', paddingTop: '2rem' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
