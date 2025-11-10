"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { FaTiktok, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import {
  Linkedin,
  Instagram,
  Youtube,
  Facebook,
  Send,
  Mail,
} from "lucide-react";

type SocialLink = { platform: string; url: string };
export type Member = {
  name: string;
  role: string;
  email?: string;
  education?: string[];
  exposure?: string[];
  qualifications?: string;
  occupation?: string;
  bio?: string;
  socialLinks?: SocialLink[];
  img?: string; // image path
  edu?: string; // short education summary
};

function getPlatformIcon(platform: string) {
  switch (platform.toLowerCase()) {
    case "linkedin":
      return <Linkedin size={16} />;
    case "instagram":
      return <Instagram size={16} />;
    case "twitter":
      return <FaXTwitter size={16} />;
    case "youtube":
      return <Youtube size={16} />;
    case "telegram":
      return <Send size={16} />;
    case "facebook":
      return <Facebook size={16} />;
    case "whatsapp":
      return <FaWhatsapp size={16} />;
    case "tiktok":
      return <FaTiktok size={16} />;
    case "email":
      return <Mail size={16} />;
    default:
      return null;
  }
}

export default function MemberModal({
  open,
  member,
  onClose,
}: {
  open: boolean;
  member: Member | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && member && (
        <motion.div
          aria-modal
          role="dialog"
          className="fixed inset-0 z-100 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="w-full max-w-xl rounded-2xl overflow-hidden bg-white shadow-2xl"
            initial={{ y: 24, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 12, opacity: 0, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 380, damping: 28 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative bg-primary text-white px-6 py-5">
              <h3 className="text-2xl font-bold leading-tight">
                {member.name}
              </h3>
              <p className="opacity-90">{member.role}</p>
              <button
                aria-label="Close"
                className="absolute right-3 top-3 rounded-full p-2 hover:bg-white/10"
                onClick={onClose}
              >
                <X size={18} />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 space-y-5 text-[#0E0066]">
              {/* Contact */}
              {member.email && (
                <div>
                  <h4 className="font-semibold">Contact</h4>
                  <a
                    href={`mailto:${member.email}`}
                    className="text-sm text-[#2014FF] hover:underline break-all"
                  >
                    {member.email}
                  </a>
                </div>
              )}

              {/* Education */}
              {(member.education?.length ?? 0) > 0 && (
                <div>
                  <h4 className="font-semibold">Education</h4>
                  <ul className="mt-1 list-disc list-inside text-sm text-[#4A5565] space-y-1">
                    {member.education!.map((e, idx) => (
                      <li key={idx}>{e}</li>
                    ))}
                  </ul>
                </div>
              )}

              {member.qualifications && (
                <div>
                  <h4 className="font-semibold">Qualifications</h4>
                  <p className="text-sm text-[#4A5565] mt-1">
                    {member.qualifications}
                  </p>
                </div>
              )}
              {member.occupation && (
                <div>
                  <h4 className="font-semibold">Primary Occupation</h4>
                  <p className="text-sm text-[#4A5565] mt-1">
                    {member.occupation}
                  </p>
                </div>
              )}
              {member.bio && (
                <div>
                  <h4 className="font-semibold">Biography</h4>
                  <p className="text-sm text-[#4A5565] mt-1">{member.bio}</p>
                </div>
              )}

              {/* Experience & Exposure */}
              {(member.exposure?.length ?? 0) > 0 && (
                <div>
                  <h4 className="font-semibold">Experience & Exposure</h4>
                  <ul className="mt-1 list-disc list-inside text-sm text-[#4A5565] space-y-1">
                    {member.exposure!.map((x, idx) => (
                      <li key={idx}>{x}</li>
                    ))}
                  </ul>
                </div>
              )}

              {(member.socialLinks?.length ?? 0) > 0 && (
                <div className="pt-2">
                  <h4 className="font-semibold mb-3">Connect</h4>
                  <div className="flex flex-wrap gap-3">
                    {member.socialLinks!.map((s) => {
                      const Icon = getPlatformIcon(s.platform);
                      if (!Icon) return null;
                      const isPrimary = s.platform.toLowerCase() === "linkedin";
                      return (
                        <button
                          key={s.platform}
                          onClick={() =>
                            window.open(s.url, "_blank", "noopener")
                          }
                          className={
                            "px-4 py-2 rounded-full text-sm font-semibold transition " +
                            (isPrimary
                              ? "bg-[#0E0066] text-white hover:bg-[#0E0066]"
                              : "bg-gray-100 text-[#0E0066] hover:bg-gray-200")
                          }
                        >
                          <span className="inline-flex items-center gap-2">
                            {s.platform.charAt(0).toUpperCase() +
                              s.platform.slice(1)}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
