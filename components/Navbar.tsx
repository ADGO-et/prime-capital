"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="w-[95%] max-w-6xl mx-auto p-[6px]">
        <nav
          className="relative w-full rounded-xl  
                     bg-gradient-to-r from-accent/85 to-primary
                     backdrop-blur-2xl shadow-[0_0_25px_rgba(0,0,0,0.3)] 
                     flex items-center justify-between px-4 sm:px-6 py-3"
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

          {/* Desktop Navigation */}
          <ul className="hidden sm:flex items-center gap-8 text-sm text-white/80">
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="hover:text-white transition-colors">
                Contact
              </Link>
            </li>
          </ul>

         
          <Link
            href="#get-started"
            className="hidden sm:inline-block rounded-md bg-primary text-white font-semibold text-xs px-4 py-2 
                       shadow hover:bg-primary/10 transition-all"
          >
            Get Started
          </Link>

       
          <button
            className="sm:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="sm:hidden mt-2 flex flex-col gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-[accent] to-[secondary00] backdrop-blur-xl shadow-md">
            <Link href="#" className="text-white font-semibold py-1 px-2 rounded hover:bg-white/10 transition">
              Home
            </Link>
            <Link href="#about" className="text-white font-semibold py-1 px-2 rounded hover:bg-white/10 transition">
              About Us
            </Link>
            <Link href="#services" className="text-white font-semibold py-1 px-2 rounded hover:bg-white/10 transition">
              Services
            </Link>
            <Link href="#contact" className="text-white font-semibold py-1 px-2 rounded hover:bg-white/10 transition">
              Contact
            </Link>
            <Link href="#get-started" className="text-[secondary] font-semibold py-1 px-2 rounded bg-white hover:bg-[#F3F4F6] transition">
              Get Started
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
