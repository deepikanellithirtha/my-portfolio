import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Deepika | Full Stack Developer & Software Engineer",
  description: "Portfolio of Deepika, a Software Engineer specializing in Java, SQL, and Web Design. Explore my projects in medical imaging and web development.",
  openGraph: {
    title: "Deepika | Full Stack Developer Portfolio",
    description: "Software Engineer specializing in Java and Web Design. Check out my professional journey and projects.",
    url: "https://www.deepikanellithirtha.in",
    siteName: "Deepika Portfolio",
    images: [
      {
        url: "https://i.postimg.cc/DzBC6JKs/1743681579358-1.jpg", 
        width: 1200,
        height: 630,
        alt: "Deepika Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
