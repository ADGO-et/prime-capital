import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/wrappers/providers";
import SplashLayout from "@/components/SplashLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prime Capital - Investment Bank",
  description: "Drive Ethiopia's capital market development",
  icons: {
    icon: '/prime.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-primary text-white min-h-screen `}>
        <Providers>
          <SplashLayout>{children}</SplashLayout>
        </Providers>
      </body>
    </html>
  );
}
