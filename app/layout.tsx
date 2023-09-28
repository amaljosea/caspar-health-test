import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Patient management",
  description: "Generated by Caspar Health",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}