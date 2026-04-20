import type { Metadata } from "next";
// import { GeistSans } from "geist/font/sans";
// import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Providers } from "@/wrappers/providers";
import SplashLayout from "@/components/SplashLayout";

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
      <body className={`bg-primary text-white min-h-screen `}>
        <Providers>
          <SplashLayout>{children}</SplashLayout>
        </Providers>
      </body>
    </html>
  );
}
