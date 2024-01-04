import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fitstark",
  description: "Your workout marketplace",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <Link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
