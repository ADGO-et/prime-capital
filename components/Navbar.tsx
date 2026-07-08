"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import { useNavigation } from "@/hooks/queries/useNavigationQuery";
import { strapiMediaUrl } from "@/lib/strapi";

export default function Navbar() {
  const { data: navigation } = useNavigation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const closeTimeout = useRef<number | null>(null);

  const navLinks = [
    { id: "home", label: "Home", url: "/" },
    { id: "about", label: "About Us", url: "/about" },
    { id: "services", label: "Services", url: "/services" },
    { id: "our-team", label: "Our Team", url: "/our-team" },
  ];
  const resourcesLabel = "News and Resources";
  const resourcesLinks = [
    { id: "news", label: "News and Updates", url: "/news" },
    { id: "jobs", label: "Jobs", url: "/vacancy/jobs" },
  ];
  const ctaLabel = "Contact";
  const ctaHref = "/contact-us";
  const logoSrc = strapiMediaUrl(navigation?.logo?.url) || "/logoblack.png";

  const handleOpen = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    setDropdownOpen(true);
  };

  const handleClose = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
    }
    // slight delay to allow user to move into the dropdown without it vanishing
    closeTimeout.current = window.setTimeout(() => {
      setDropdownOpen(false);
      closeTimeout.current = null;
    }, 120);
  };

  // Add sticky behavior and shadow when scrolled
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
  <header className="w-full sticky top-0 z-50 isolate">
    <nav className={`w-full bg-linear-to-b from-[#01016F] to-[#2014FF] backdrop-blur-2xl px-6 md:px-10 lg:px-16 py-3 flex items-center justify-between transition-shadow duration-300 ${scrolled ? 'shadow-lg' : 'shadow-none'}`}>
        
          <div className="flex items-center gap-3">
            <Link href="/">
              <Image
                src={logoSrc}
                alt="Logo"
                width={150}
                height={40}
                className="object-contain"
              />
            </Link>
          </div>
          <div className="flex gap-4">
            {/* Desktop Navigation */}
            <ul className="hidden sm:flex items-center gap-8 text-sm ">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link href={link.url} className="font-semibold text-white hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li
                className="relative"
                onMouseEnter={handleOpen}
                onMouseLeave={handleClose}
              >
                <div className="flex items-center gap-1 font-semibold text-white hover:text-accent transition-colors cursor-pointer select-none">
                  {resourcesLabel}
                  <ChevronDownIcon className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
                </div>
                {dropdownOpen && (
                  <div
                    className="absolute top-full right-0 mt-3 w-72 rounded-2xl border border-white/20 bg-gradient-to-br from-[#3624ff] to-[#3624ff] backdrop-blur-2xl backdrop-saturate-150 shadow-2xl ring-1 ring-white/10 p-2 z-50 animate-in fade-in slide-in-from-top-1 overflow-visible"
                  >
                    {resourcesLinks.map((link) => (
                      <Link
                        key={link.id}
                        href={link.url}
                        className="block px-4 py-3 rounded-lg hover:bg-white/15 transition-colors duration-200 whitespace-normal"
                        onClick={() => setDropdownOpen(false)}
                      >
                        <div className="font-semibold text-white drop-shadow-sm">{link.label}</div>
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            </ul>

            <Link
              href={ctaHref}
              className="hidden sm:inline-block rounded-md bg-white text-primary font-semibold text-xs px-4 py-2 shadow hover:bg-accent/30 hover:text-primary transition-colors"
            >
              {ctaLabel}
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
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.url}
                className="font-semibold text-primary py-1 px-2 rounded hover:bg-white/10 transition"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center justify-between font-semibold text-primary py-1 px-2 rounded hover:bg-white/10 transition"
              >
                {navigation?.resourcesLabel}
                <ChevronDownIcon className="w-4 h-4" />
              </button>
              {dropdownOpen && (
                <div className="ml-4 flex flex-col space-y-1">
                  {resourcesLinks.map((link) => (
                    <Link
                      key={link.id}
                      href={link.url}
                      className="font-semibold text-primary py-2 px-3 rounded-lg hover:bg-primary/10 transition-all duration-200"
                      onClick={() => setDropdownOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              href={ctaHref}
              className="w-full rounded-2xl text-center font-semibold py-2 px-3 bg-white text-primary hover:bg-accent/50 transition-colors"
            >
              {ctaLabel}
            </Link>
          </div>
        )}
    </header>
  );
}
