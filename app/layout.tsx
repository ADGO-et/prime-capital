import type { Metadata } from "next";
// import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/wrappers/providers";
import SplashLayout from "@/components/SplashLayout";

export const metadata: Metadata = {
  title: "Prime Capital - Investment Bank",
  description: "",
  icons: {
    icon: '/logoblack.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-primary text-white min-h-screen ">
        <Providers>
          <SplashLayout>{children}</SplashLayout>
        </Providers>
      </body>
    </html>
  );
}
