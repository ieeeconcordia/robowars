import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar'
import LinkSea from '@/components/link-sea/link-sea'
import Header from '@/components/header/header'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <LinkSea />
        <Header />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
