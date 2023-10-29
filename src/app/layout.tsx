import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pocket Bank",
  description: "All you need in your pocket."
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
