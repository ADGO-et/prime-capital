"use client";

import Hero2 from "../../components/Hero2";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

export default function Contact() {
  return (
    <main className="min-h-screen w-full bg-white  text-gray-900 ">
      <Hero2
        title="Let's Connect"
        description="We're here to guide your next investment journey"
      />

      {/* Get in Touch */}
      <section className="py-16 px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0E0066]">
          Get in Touch
        </h2>
        <p className="text-[#0E0066] mb-10 ">
          Whether you’re looking for investment banking services or strategic
          advisory, our team is ready to help you succeed.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {[
            {
              icon: <MapPin size={22} />,
              title: "Visit Us",
              line1: "Kirkos Sub-City, Woreda 08",
              line2: "Addis Ababa, Ethiopia",
            },
            {
              icon: <Mail size={22} />,
              title: "Email Us",
              line1: "info@primecapital.com",
              href: "mailto:info@primecapital.com",
            },
            {
              icon: <Phone size={22} />,
              title: "Call Us",
              line1: "+251 11 XXX XXXX",
              href: "tel:+251110000000",
            },
            {
              icon: <Clock size={22} />,
              title: "Business Hours",
              line1: "Monday - Friday",
              line2: "8:30 AM - 5:30 PM EAT",
            },
          ].map((c, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group p-6 bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-200 "
            >
              <div className="mb-4 mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full text-white bg-gradient-to-br from-[#0E0066] to-[#2014FF] shadow-sm transition-transform group-hover:scale-105">
                {c.icon}
              </div>
              <div className="font-semibold text-[#0E0066]">{c.title}</div>
              {c.href ? (
                <a
                  href={c.href}
                  className="mt-2 block text-sm text-[#504785] hover:underline break-words"
                >
                  {c.line1}
                </a>
              ) : (
                <div className="mt-2 text-sm text-[#504785]">
                  {c.line1}
                  {c.line2 ? <div>{c.line2}</div> : null}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Inquiry and Careers */}
      <section className="py-10 px-6 md:px-12">
        <div className="grid gap-6 md:grid-cols-2 max-w-6xl mx-auto">
          <motion.div
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="rounded-2xl p-6 bg-white  border border-gray-200 shadow"
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
                href="mailto:info@primecapital.com"
              >
                info@primecapital.com
              </a>
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="rounded-2xl p-6 bg-white border border-gray-200  shadow"
          >
            <h3 className="text-2xl font-bold text-[#0E0066] mb-3">
              Career Opportunities
            </h3>
            <p className="text-sm text-[#504785] mb-3">
              Join our team of talented professionals and help shape Ethiopia’s
              financial future. We value excellence, integrity, and innovation.
            </p>
            <p className="text-sm text-[#504785]  mb-3">
              We're always looking for exceptional individuals who share our
              commitment to excellence, integrity, and innovation.
            </p>
            <p className="text-sm text-[#2014FF]">
              <span className="font-semibold ">Email:</span>{" "}
              <a
                className="hover:underline"
                href="mailto:careers@primecapital.com"
              >
                careers@primecapital.com
              </a>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-[#0E0066]">
          Our Location
        </h2>
        <p className="text-[#504785] mb-10">
          Find us in the heart of Addis Ababa
        </p>

        <motion.div
          whileHover={{ y: -4, scale: 1.01 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="max-w-5xl mx-auto rounded-2xl p-10 bg-[#1B16FF1A]/70 border border-gray-200 shadow h-[400px] items-center justify-center flex flex-col"
        >
          <div className="mb-4 mx-auto inline-flex h-12 w-12 items-center justify-center text-[#0E0066]">
            <MapPin size={32} />
          </div>
          <div className="font-semibold text-[#0E0066] mb-2">
            Kirkos Sub-City, Woreda 08
          </div>
          <div className="text-sm text-[#504785]">Addis Ababa, Ethiopia</div>
        </motion.div>
      </section>
    </main>
  );
}
