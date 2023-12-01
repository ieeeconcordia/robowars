import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";
import "./globals.css";
import LinkSea from "@/components/link-sea/link-sea";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const raleway = Raleway({ subsets: ["latin-ext"], variable: "--font-raleway" });

export const metadata: Metadata = {
  title: "IEEE Robowars 2024",
  description: "The official website for IEEE Robowars 2024",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + " " + raleway.className}>
        <LinkSea />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
