import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full">
     
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[linear-gradient(to_bottom,theme(colors.secondary)/40_40%,theme(colors.secondary)/0_100%)]" />

      <nav className="relative mx-auto mt-2 w-[95%] max-w-6xl rounded-2xl border border-white/15 bg-white/10 px-4 py-2 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] backdrop-blur-md">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
           
            <span className="hidden text-xs text-white/80 sm:block">Your Growth Partner</span>
          </div>
          <ul className="hidden items-center gap-6 text-sm text-white/85 sm:flex">
            <li><Link href="#" className="hover:text-white">Home</Link></li>
            <li><Link href="#about" className="hover:text-white">About Us</Link></li>
            <li><Link href="#services" className="hover:text-white">Services</Link></li>
            <li><Link href="#contact" className="hover:text-white">Contact</Link></li>
          </ul>
          <div>
            <Link href="#get-started" className="rounded-md bg-white px-4 py-2 text-xs font-semibold text-primary shadow hover:bg-gray-100">
              Get Started
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}


