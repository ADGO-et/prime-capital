"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

export default function Contact() {
  return (
    <main className="min-h-screen w-full bg-white text-gray-900 ">
      {/* Top: Get in touch text list + Map side by side */}
      <section className="py-10 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          {/* Left: Get in Touch as text (no cards) */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[#0E0066]">Let&apos;s Connect</h2>
            <p className="text-[#504785] mb-8">
              Weapos;d love to help you start exceeding your goals. Reach us using the details below.
            </p>

            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <span className="mt-1 text-[#2014FF]"><MapPin size={20} /></span>
                <div>
                  <div className="font-semibold text-[#0E0066]">Visit Us</div>
                  <p className="text-sm text-[#504785]">Bole Road, Abyssinia Real Estate bldg<br/>(12th floor) adjacent to Ethio Ceramics</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-[#2014FF]"><Mail size={20} /></span>
                <div>
                  <div className="font-semibold text-[#0E0066]">Email Us</div>
                  <a href="mailto:Info@primecapitalsc.com" className="text-sm text-[#504785] hover:underline">Info@primecapitalsc.com</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-[#2014FF]"><Phone size={20} /></span>
                <div>
                  <div className="font-semibold text-[#0E0066]">Call Us</div>
                  <a href="tel:+251 (0)91122 2911" className="text-sm text-[#504785] hover:underline">6309</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-[#2014FF]"><Clock size={20} /></span>
                <div>
                  <div className="font-semibold text-[#0E0066]">Business Hours</div>
                  <p className="text-sm text-[#504785]">Monday - Friday<br/>8:00 AM - 5:00 PM EAT</p>
                  <p className="text-sm text-[#504785]">Saturday<br/>8:00 AM - 12: 00 PM EAT</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Right: Map embed */}
          <div className="w-full h-[420px] rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
            <iframe
              title="Prime Capital Location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=38.77,8.98,38.79,9.00&layer=mapnik&marker=8.991646,38.782494"
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Bottom: two cards */}
      <section className="py-10 px-6 md:px-12">
        <div className="grid gap-6 md:grid-cols-2 max-w-6xl mx-auto">
          <motion.div
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="rounded-2xl p-6 bg-white  border border-gray-200 shadow hover:border-[#0E0066]"
          >
            <h3 className="text-2xl font-bold text-[#0E0066] mb-3">
              New Client Inquiries
            </h3>
            <p className="text-sm text-[#504785]  mb-3">
              Interested in our investment banking and advisory services? We’d
              love to hear from you. Our team will respond within 24 hours to
              discuss how we can support your business objectives.
            </p>
            <p className="text-sm text-[#0E0066]">
              <span className="font-semibold ">Email:</span>{" "}
              <a
                className=" hover:underline"
                href="mailto:Info@primecapitalsc.com"
              >
                Info@primecapitalsc.com
              </a>
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="rounded-2xl p-6 bg-white border border-gray-200  shadow hover:border-[#0E0066]"
          >
            <h3 className="text-2xl font-bold text-[#0E0066] mb-3">
              Career Opportunities
            </h3>
            <p className="text-sm text-[#504785] mb-3">
              Join our team of talented professionals and help shape Ethiopia’s
              financial future. We value excellence, integrity, and innovation.
            </p>
            <p className="text-sm text-[#504785]  mb-3">
              We&apos;re always looking for exceptional individuals who share
              our commitment to excellence, integrity, and innovation.
            </p>
            <p className="text-sm text-[#2014FF]">
              <span className="font-semibold ">Email:</span>{" "}
              <a
                className="hover:underline"
                href="mailto:Info@primecapitalsc.com"
              >
                Info@primecapitalsc.com
              </a>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Removed separate 'Location' section since map is now beside the contact details */}
    </main>
  );
}
