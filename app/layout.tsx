import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aaryan Kulkarni | EE Portfolio",
  description:
    "Georgia Tech Electrical Engineering student building AI hardware, RTL systems, computer vision, embedded systems, and semiconductor technology."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
