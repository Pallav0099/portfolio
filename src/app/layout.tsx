import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pallav Singh | Full-Stack Developer",
  description: "Full-Stack Developer specializing in web and app development. Production-ready web applications, system tools, and interactive UIs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-mono antialiased">
        {children}
      </body>
    </html>
  );
}
