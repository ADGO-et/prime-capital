"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative w-full text-white">
      {/* Main footer section */}
      <div className="bg-gradient-to-b from-secondary to-[#1a259d]"
>
        <div className="py-12">
          <div className="mx-auto max-w-7xl px-6 py-12 grid grid-cols-1 sm:grid-cols-4 gap-8">
            {/* Logo & description */}
            <div className="flex flex-col gap-4">
              {/* Logo and name */}
              <div className="pl-4 flex items-center text-white font-semibold text-lg select-none">
                <Link href="/">
              <Image
                src="/logoblack.png"
                alt="Logo"
                width={200}
                height={100}
                className="object-contain"
              />
            </Link>
              </div>

              {/* Description */}
              <p className="text-sm text-white/80 pl-4">
                Empowering Ethiopia&apos;s financial future through innovative
                investment banking solutions.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="mb-4 font-semibold text-white">Quick Links</h3>
              <ul className="flex flex-col gap-2 text-sm text-white/80">
                <li>
                  <Link href="#" className="hover:text-accent transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="hover:text-accent transition">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="hover:text-accent transition"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="hover:text-accent transition"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="mb-4 font-semibold text-white">Services</h3>
              <ul className="flex flex-col gap-2 text-sm text-white/80">
                <li>Investment Banking</li>
                <li>M&amp;A Advisory</li>
                <li>Capital Markets</li>
                <li>Corporate Restructuring</li>
              </ul>
            </div>

            {/* Contact Section */}
            <div>
              <h3 className="mb-4 font-semibold text-white">Contact</h3>
              <ul className="flex flex-col gap-3 text-sm text-white/90">
                <li className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-white/10 flex items-center justify-center hover:bg-accent/20 transition">
                    <FaMapMarkerAlt className="text-accent text-base" />
                  </div>
                  <span>
                    Kirkos Sub-City, Woreda 08, Addis Ababa, Ethiopia
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-white/10 flex items-center justify-center hover:bg-accent/20 transition">
                    <FaEnvelope className="text-accent text-base" />
                  </div>
                  <span className="hover:text-accent transition cursor-pointer">
                    info@primecapital.com
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-white/10 flex items-center justify-center hover:bg-accent/20 transition">
                    <FaPhone className="text-accent text-base" />
                  </div>
                  <span>+251 (0) 116 629 000</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full h-[1px] bg-white/20 mt-8"></div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="bg-[#1a259d]">
  <div className="">
    {/* Add more padding and spacing here */}
    <div className="mx-auto max-w-7xl px-6 pb-8 flex flex-col sm:flex-row justify-between items-center text-xs">
      <p className="bg-gradient-to-r from-white/70 to-accent bg-clip-text text-transparent">
        © {new Date().getFullYear()} Prime Capital S.C. — All Rights Reserved
      </p>

      {/* Social Icons */}
      <div className="flex gap-4 mt-4 sm:mt-0">
        <Link
          href="#"
          className="p-2.5 rounded-md bg-white/10 hover:bg-accent/20 transition flex items-center justify-center"
        >
          <FaLinkedin className="h-5 w-5 text-accent" />
        </Link>
        <Link
          href="#"
          className="p-2.5 rounded-md bg-white/10 hover:bg-accent/20 transition flex items-center justify-center"
        >
          <FaTwitter className="h-5 w-5 text-accent" />
        </Link>
        <Link
          href="#"
          className="p-2.5 rounded-md bg-white/10 hover:bg-accent/20 transition flex items-center justify-center"
        >
          <FaFacebook className="h-5 w-5 text-accent" />
        </Link>
      </div>
    </div>

    
    <div className="h-10 sm:h-10"></div>
  </div>
</div>

    </footer>
  );
}
