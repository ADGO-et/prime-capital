"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "./Navbar";
import Footer from "./Footer";

const SPLASH_DURATION_MS = 3000;

export default function SplashLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (prefersReducedMotion.matches) {
      const instantHide = window.setTimeout(() => {
        setIsSplashVisible(false);
      }, 0);

      return () => window.clearTimeout(instantHide);
    }

    const timeout = window.setTimeout(() => {
      setIsSplashVisible(false);
    }, SPLASH_DURATION_MS);

    return () => {
      window.clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      {isSplashVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
          <Image
            src="/logo.png"
            alt="Prime Capital logo"
            width={200}
            height={80}
            priority
            className="sparkle-logo"
          />
          <style jsx>{`
            .sparkle-logo {
              animation: sparkle 1500ms ease-in-out infinite;
              filter: drop-shadow(0 0 0 rgba(20, 28, 255, 0));
            }

            @keyframes sparkle {
              0%,
              100% {
                filter: drop-shadow(0 0 0 rgba(20, 28, 255, 0));
                transform: scale(1);
              }
              50% {
                filter: drop-shadow(0 0 18px rgba(20, 28, 255, 0.5));
                transform: scale(1.04);
              }
            }

            @media (prefers-reduced-motion: reduce) {
              .sparkle-logo {
                animation: none;
                filter: none;
              }
            }
          `}</style>
        </div>
      )}

      <div
        className={`min-h-screen transition-opacity duration-500 ease-out ${
          isSplashVisible ? "opacity-0" : "opacity-100"
        }`}
        aria-hidden={isSplashVisible}
        aria-busy={isSplashVisible}
      >
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
}
