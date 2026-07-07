"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import MemberModal, { Member as MemberType } from "@/components/Member";
import { useState } from "react";
import { useTeamMembers } from "@/hooks/queries/useTeamQuery";
import { TeamMember } from "@/services/team";
import { strapiMediaUrl } from "@/lib/strapi";
import { AlertCircle } from "lucide-react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { margin: "-50px" },
  transition: { duration: 0.6, ease: EASE },
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: {},
  transition: { staggerChildren: 0.2 },
};

function toMemberType(m: TeamMember): MemberType {
  return {
    name: m.name,
    role: m.role,
    edu: m.edu,
    img: strapiMediaUrl(m.photo?.url) || "/placeholder.png",
    summary: m.summary,
    appointed: m.appointed,
    email: m.email,
    education: m.education?.map((e) => e.value),
    qualifications: m.qualifications,
    occupation: m.occupation,
    bio: m.bio,
    exposure: m.exposure?.map((e) => e.value),
    socialLinks: m.socialLinks?.map((s) => ({ platform: s.platform, url: s.url })),
  };
}

function MemberCard({
  member,
  onClick,
}: {
  member: MemberType;
  onClick: () => void;
}) {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      onClick={onClick}
      className="cursor-pointer bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl overflow-hidden flex flex-col hover:border-[#0E0066] w-full max-w-120"
    >
      <div className="relative w-full h-70 overflow-hidden">
        <Image
          src={member.img || "/placeholder.png"}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className="p-3 flex flex-col justify-between">
        <div>
          <h3 className="font-semibold text-[#0E0066] text-lg">{member.name}</h3>
          <p className="text-sm text-[#2014FF] font-semibold mt-1">{member.role}</p>
          <p className="text-[13px] text-[#504785] mt-2">{member.edu}</p>
        </div>
        <div className="text-right mt-2">
          <span className="text-xs text-[#504785] italic">Click for more detail</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function OurTeamPage() {
  const [selected, setSelected] = useState<MemberType | null>(null);
  const { data: members, isFetching, isError } = useTeamMembers();

  const boardMembers = (members ?? [])
    .filter((m) => m.category === "Board of Directors")
    .sort((a, b) => a.order - b.order)
    .map(toMemberType);

  const execMembers = (members ?? [])
    .filter((m) => m.category === "Executive Management")
    .sort((a, b) => a.order - b.order)
    .map(toMemberType);

  return (
    <main className="min-h-screen w-full bg-white text-gray-900 overflow-x-hidden">
      {/* Board of Directors */}
      <section className="py-20 pt-20 px-6 md:px-12 bg-white">
        <motion.div {...fadeInUp} className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
            Board of Directors
          </h2>
          <p className="text-md text-[#504785] mt-4 max-w-2xl mx-auto leading-tight">
            Our distinguished board brings directors of combined expertise in
            finance, technology, and strategic leadership.
          </p>
        </motion.div>

        {isError && (
          <div className="mt-10 max-w-2xl mx-auto flex flex-col items-center justify-center py-12 bg-red-50 border border-red-200 rounded-2xl">
            <AlertCircle className="w-10 h-10 text-red-500 mb-3" />
            <p className="text-red-700 text-sm">Failed to load team members. Please try again later.</p>
          </div>
        )}

        {isFetching && !members && (
          <div className="mt-10 grid gap-8 max-w-7xl mx-auto md:grid-cols-4 sm:grid-cols-1">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-96 animate-pulse rounded-2xl bg-gray-100" />
            ))}
          </div>
        )}

        {!isError && boardMembers.length > 0 && (
          <div className="mt-10 flex flex-col gap-12 max-w-7xl mx-auto">
            {/* Top Level - Chairperson */}
            <div className="flex justify-center">
              <MemberCard member={boardMembers[0]} onClick={() => setSelected(boardMembers[0])} />
            </div>

            {/* Middle Level - Deputy Chairman */}
            {boardMembers[1] && (
              <div className="flex justify-center">
                <MemberCard member={boardMembers[1]} onClick={() => setSelected(boardMembers[1])} />
              </div>
            )}

            {/* Bottom Level - Other Directors */}
            <motion.div
              {...staggerContainer}
              className="grid gap-8 md:grid-cols-4 sm:grid-cols-1"
            >
              {boardMembers.slice(2).map((m, i) => (
                <MemberCard key={i} member={m} onClick={() => setSelected(m)} />
              ))}
            </motion.div>
          </div>
        )}
      </section>

      {/* Executive Management */}
      <section className="py-20 px-6 md:px-12 bg-[#F9FAFB]">
        <div className="mt-40 text-center max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">Executive Management</h2>
          <p className="text-md text-[#504785] mt-2 max-w-2xl mx-auto leading-tight">
            Experienced leaders driving operational excellence and strategic innovation.
          </p>
        </div>

        {!isError && execMembers.length > 0 && (
          <>
            <div className="mt-10 flex justify-center">
              <MemberCard member={execMembers[0]} onClick={() => setSelected(execMembers[0])} />
            </div>

            <motion.div
              {...staggerContainer}
              className="mt-10 grid gap-8 sm:grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto"
            >
              {execMembers.slice(1).map((m, i) => (
                <MemberCard key={i} member={m} onClick={() => setSelected(m)} />
              ))}
            </motion.div>
          </>
        )}
      </section>

      <MemberModal
        open={!!selected}
        member={selected}
        onClose={() => setSelected(null)}
      />
    </main>
  );
}
