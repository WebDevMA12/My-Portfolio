import type { Metadata } from "next";
import { Inter } from "next/font/google"
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});


export const metadata: Metadata = {
  title: "MA | Full-Stack Developer",
  description: "Full-Stack Web Developer specialized in modern web applications.",
};

export default function RootLayout({ 
  children 
}: Readonly<{ 
  children: React.ReactNode; 
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined&display=optional" rel="stylesheet" />
      </head>
      <body className="bg-background font-inter text-on-surface antialiased selection:bg-secondary-container selection:text-primary-container">
        {children}
      </body>
    </html>
  );
}
