import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 bg-[url('/herobg.png')] bg-cover bg-center" />
      {/* Color overlay (#1B16FF4D) */}
      <div className="absolute inset-0 bg-primary" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-4 py-24 text-white">
        <div className="w-full max-w-3xl rounded-xl border border-white/20 bg-white/5 p-8 text-center shadow-[0_10px_40px_-10px_rgba(0,0,0,0.4)] backdrop-blur-md">
          <h1 className="mb-4 text-4xl font-extrabold leading-tight sm:text-5xl">
            Empowering Ethiopia&apos;s Financial Future
          </h1>
          <p className="mx-auto mb-6 max-w-xl text-sm text-white/85 sm:text-base">
            Prime Capital S.C. — Innovation, Integrity, and Excellence in Investment Banking
          </p>
          <div className="flex items-center justify-center">
            <Link
              href="#services"
              className="rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-primary shadow transition hover:bg-gray-100"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>

      {/* Top gradient border shimmer */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/30 to-transparent" />
    </section>
  );
}


