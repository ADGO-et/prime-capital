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
  FaArrowUp,
} from "react-icons/fa";
import { useContactPage } from "@/hooks/queries/usePagesQuery";
import { useFooter } from "@/hooks/queries/useFooterQuery";

export default function Footer() {
  const { data: contact } = useContactPage();
  const { data: footer } = useFooter();

  const socialLinks = [
    { key: "linkedin", url: footer?.linkedinUrl, Icon: FaLinkedin },
    { key: "twitter", url: footer?.twitterUrl, Icon: FaTwitter },
    { key: "facebook", url: footer?.facebookUrl, Icon: FaFacebook },
  ].filter((s) => s.url);

  return (
    <footer className="relative w-full text-white">
      <div className="bg-gradient-to-b from-secondary to-[#1a259d]">
        <div className="py-4">
          <div className="mx-auto max-w-7xl px-6 py-6 grid grid-cols-1 sm:grid-cols-4 gap-8">
            <div className="flex flex-col gap-4">
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
              <p className="text-sm text-white/80 pl-4">
                {footer?.tagline}
              </p>
            </div>

            <div>
              <h3 className="mb-4 font-semibold text-white">Quick Links</h3>
              <ul className="flex flex-col gap-2 text-sm text-white/80">
                <li>
                  <Link href="/" className="hover:text-accent hover:underline transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-accent hover:underline transition">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="hover:text-accent hover:underline transition"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact-us"
                    className="hover:text-accent hover:underline transition"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 font-semibold text-white">
                {" "}
                <Link href="/services">Services</Link>
              </h3>
              <ul className="flex flex-col gap-2 text-sm text-white/80">
                <li>
                  <Link href="/services" className="hover:underline">Investment Banking</Link>
                </li>
                <li>
                  <Link href="/services" className="hover:underline">M&amp;A Advisory</Link>
                </li>
                <li>
                  <Link href="/services" className="hover:underline">Capital Markets</Link>
                </li>
                <li>
                  <Link href="/services" className="hover:underline">Corporate Restructuring</Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 font-semibold text-white">
                {" "}
                <Link href="/contact-us">Contact</Link>
              </h3>
              <ul className="flex flex-col gap-3 text-sm text-white/90">
                {contact?.address && (
                  <li className="flex items-center gap-3">
                    <div className="p-2 rounded-md bg-white/10 flex items-center justify-center hover:bg-accent/20 transition">
                      <FaMapMarkerAlt className="text-accent text-base" />
                    </div>
                    <span>{contact.address}</span>
                  </li>
                )}
                {contact?.email && (
                  <li className="flex items-center gap-3">
                    <div className="p-2 rounded-md bg-white/10 flex items-center justify-center hover:bg-accent/20 transition">
                      <FaEnvelope className="text-accent text-base" />
                    </div>
                    <a href={`mailto:${contact.email}`} className="hover:text-accent transition cursor-pointer">
                      {contact.email}
                    </a>
                  </li>
                )}
                {contact?.phone && (
                  <li className="flex items-center gap-3">
                    <div className="p-2 rounded-md bg-white/10 flex items-center justify-center hover:bg-accent/20 transition">
                      <FaPhone className="text-accent text-base" />
                    </div>
                    <span>{contact.phone}</span>
                  </li>
                )}
              </ul>
            </div>
          </div>

          <div className="w-full h-[1px] bg-white/20 mt-2"></div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="bg-[#1a259d]">
        <div className="">
          <div className="mx-auto max-w-7xl px-6 pb-2 flex flex-col sm:flex-row justify-between items-center text-xs">
            <p className="bg-gradient-to-r from-white/70 to-accent bg-clip-text text-transparent">
              © {new Date().getFullYear()} Prime Capital S.C. — All Rights
              Reserved
            </p>

            {/* Scroll to Top Button */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="p-3 rounded-full bg-white/10 hover:bg-accent/20 transition flex items-center justify-center mt-4 sm:mt-0"
              aria-label="Scroll to top"
            >
              <FaArrowUp className="h-5 w-5 text-accent" />
            </button>

            {/* Social Icons */}
            {socialLinks.length > 0 && (
              <div className="flex gap-4 mt-4 sm:mt-0">
                {socialLinks.map(({ key, url, Icon }) => (
                  <Link
                    key={key}
                    href={url!}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-md bg-white/10 hover:bg-accent/20 transition flex items-center justify-center"
                  >
                    <Icon className="h-5 w-5 text-accent" />
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
