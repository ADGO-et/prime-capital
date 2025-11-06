"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Elevate and subtly animate the navbar when the page is scrolled
  useEffect(() => {
    const onScroll = () => {
      // small threshold to trigger the floating state
      setScrolled(window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full">
  <div className="w-[95%] max-w-6xl mx-auto p-1.5">
        <nav
          className={`relative w-full rounded-xl transition-all duration-300 ease-out
                     ${scrolled
                       ? "bg-linear-to-r from-accent/90 to-primary/95 shadow-[0_10px_30px_rgba(0,0,0,0.35)] ring-1 ring-white/10 backdrop-blur-2xl"
                       : "bg-linear-to-r from-accent/85 to-primary shadow-[0_0_25px_rgba(0,0,0,0.3)] backdrop-blur-2xl"}
                     transform ${scrolled ? "scale-100" : "scale-[0.995]"}
                     flex items-center justify-between px-4 sm:px-6 py-3`}
        >
          <div className="flex items-center gap-3">
            <Link href="#">
              <Image
                src="/logo.png"
                alt="Logo"
                width={150}
                height={40}
                className="object-contain"
              />
            </Link>
          </div>
          <div className="flex gap-4">
            {/* Desktop Navigation */}
            <ul className="hidden sm:flex items-center gap-8 text-sm text-white/80 ">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link href="/vacancy" className="hover:text-white transition-colors">
                  Jobs
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-white transition-colors">
                  Blogs
                </Link>
              </li>
              {/* <li>
              <Link
                href="/contact-us"
                className="hover:text-white transition-colors"
              >
                Contact
              </Link>
            </li> */}
            </ul>

            <Link
              href="/contact-us"
              className="hidden sm:inline-block rounded-md bg-primary text-white font-semibold text-xs px-4 py-2 
                       shadow hover:bg-primary/10 transition-all"
            >
              Contact
            </Link>

            <button
              className="sm:hidden text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="sm:hidden mt-2 flex flex-col gap-2 px-4 py-3 rounded-xl bg-white text-primary shadow-md">
            <Link
              href="/"
              className=" font-semibold py-1 px-2 rounded hover:bg-white/10 transition"
            >
              Home
            </Link>
            <Link
              href="/about"
              className=" font-semibold py-1 px-2 rounded hover:bg-white/10 transition"
            >
              About Us
            </Link>
            <Link
              href="/services"
              className=" font-semibold py-1 px-2 rounded hover:bg-white/10 transition"
            >
              Services
            </Link>
            <Link
              href="/vacancy"
              className=" font-semibold py-1 px-2 rounded hover:bg-white/10 transition"
            >
              Jobs
            </Link>
            <Link
              href="/news"
              className=" font-semibold py-1 px-2 rounded hover:bg-white/10 transition"
            >
              Blogs
            </Link>
            {/* <Link
              href="/contact"
              className=" font-semibold py-1 px-2 rounded hover:bg-white/10 transition"
            >
              Contact
            </Link> */}
            <Link
              href="/contact-us"
              className="text-white w-full rounded-2xl text-center font-semibold py-1 px-2  bg-primary hover:bg-[#F3F4F6] transition"
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
