import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative w-full text-white">
      {/* Main footer content with secondary background */}
      <div className="bg-secondary">
        <div className="py-12">
 <div className="mx-auto max-w-6xl px-6 py-12  grid grid-cols-1 sm:grid-cols-4 gap-8">
          {/* Logo & description */}
          <div className="flex flex-col gap-4">
  {/* Logo and name */}
  <div className=" pl-10 flex items-center text-white font-semibold text-lg select-none">
    <div className="w-7 h-7 bg-white text-secondary font-bold text-base flex items-center justify-center rounded-md mr-2.5">
      P
    </div>
    Prime Capital
  </div>

  {/* Description perfectly aligned with “Prime Capital” */}
  <p className="text-sm text-white/80 pl-[calc(1.75rem+0.625rem)]">
    Empowering Ethiopia&apos;s financial future through innovative investment banking solutions.
  </p>
</div>


          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold">Quick Links</h3>
            <ul className="flex flex-col gap-2 text-sm text-white/80">
              <li><Link href="#">Home</Link></li>
              <li><Link href="#about">About Us</Link></li>
              <li><Link href="#services">Services</Link></li>
              <li><Link href="#contact">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 font-semibold">Services</h3>
            <ul className="flex flex-col gap-2 text-sm text-white/80">
              <li>Investment Banking</li>
              <li>M&A Advisory</li>
              <li>Capital Markets</li>
              <li>Corporate Restructuring</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-semibold">Contact</h3>
            <ul className="flex flex-col gap-2 text-sm text-white/80">
              <li>📍 Kirkos Sub-City, Woreda 08, Addis Ababa, Ethiopia</li>
              <li>✉️ info@primecapital.com</li>
              <li>📞 +251 (0) 116 629 000</li>
            </ul>
          </div>
          
        </div>
          <div className="w-full h-[1px] bg-white -left-5"></div>
        </div>
       

       
      

      
      </div>

      {/* Bottom section with gradient */}
      <div className="bg-gradient-to-b from-secondary via-secondary to-accent/90 ">
  <div  className="relative backdrop-blur-lg bg-white/5">
    <div className="mx-auto max-w-6xl px-6 py-4 flex flex-col sm:flex-row justify-between items-center text-xs">
      <p className="bg-gradient-to-r from-white/70 to-accent bg-clip-text text-transparent">
        © 2025 Prime Capital S.C. — All Rights Reserved
      </p>
      <div className="flex gap-4 mt-2 sm:mt-0">
        <Link href="#"><FaLinkedin className="h-4 w-4 hover:text-accent transition" /></Link>
        <Link href="#"><FaTwitter className="h-4 w-4 hover:text-accent transition" /></Link>
        <Link href="#"><FaFacebook className="h-4 w-4 hover:text-accent transition" /></Link>
      </div>
    </div>
  </div>
</div>

    </footer>
  );
}
