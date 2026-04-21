import type { Metadata } from "next";
// import { GeistSans } from "geist/font/sans";
// import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Providers } from "@/wrappers/providers";
import SplashLayout from "@/components/SplashLayout";

export const metadata: Metadata = {
  metadataBase: new URL("https://primecapitalsc.com"),
  title: {
    default: "Prime Capital SC - Investment Banking",
    template: "%s | Prime Capital SC",
  },
  description:
    "Drive Ethiopia's capital market development",
  applicationName: "Prime Capital SC",
  keywords: [
    "Prime Capital",
    "Prime Capital SC",
    "primecapitalsc.com",
    "Prime Investment",
    "prime investment",
    "investment bank",
    "capital market",
    "securities trading",
    "corporate finance advisory",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: "https://primecapitalsc.com",
    siteName: "Prime Capital SC",
    title: "Prime Capital SC | Investment Bank",
    description:
      "Drive Ethiopia's capital market development",
    locale: "en_US",
    images: [
      {
        url: "/prime.png",
        width: 512,
        height: 512,
        alt: "Prime Capital SC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prime Capital SC | Investment Bank",
    description:
      "Drive Ethiopia's capital market development",
    images: ["/prime.png"],
  },
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
