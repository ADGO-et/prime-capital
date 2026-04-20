import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

export default function Hero() {
  return (
    <section className="relative isolate min-h-screen w-full overflow-hidden  flex flex-col">
      {/* Main Background */}
      <div
        className="absolute -z-10 bg-[url('/herobg.png')] bg-cover bg-center mt-0 opacity-30 pointer-events-none"
        style={{
          width: "900px",
          height: "900px",
          top: "-100px",
          transform: "rotate(10deg)",
          transformOrigin: "0% 50%",
        }}
      />
      <div className="mt-10"></div>

      <div
        className="absolute top-0 right-0 -z-10 h-[700px] w-[700px] bg-[url('/herobg.png')] bg-cover bg-right bg-no-repeat opacity-40 pointer-events-none"
        style={{
          transform: "translateX(75%) rotate(100deg)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-4 py-24 text-white mt-[10vh]">
        <div className="relative w-full max-w-3xl mx-auto">
          <div className="relative rounded-2xl shadow-[0_0_15px_rgba(20,28,255,0.4),inset_0_0_10px_rgba(20,28,255,0.2)] bg-secondary/0 p-8 text-center shadow-2xl backdrop-blur-[4px] before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-[secondary]/15 before:to-[secondary]/10 before:content-['']">
            <div className="relative z-10">
              <h1 className="mb-4 text-4xl font-extrabold leading-tight sm:text-5xl">
                Empowering Ethiopia&apos;s Financial Future
              </h1>
              <p className="mx-auto mb-6 max-w-xl text-sm text-white/90 sm:text-base">
                Prime Capital S.C. — Innovation, Integrity, and Excellence in
                Investment Banking
              </p>

              {/* Button + Down Arrow */}
              <div className="flex flex-col items-center justify-center mt-4">
                <Link
                  href="/services"
                  className="rounded-lg px-6 py-3 font-semibold text-white shadow-lg transition-all 
                             bg-gradient-to-r from-primary to-secondary 
                             hover:from-primary/90 hover:to-secondary/90 hover:shadow-xl"
                >
                  Explore Our Services
                </Link>

                <ChevronDownIcon className="mt-4 h-6 w-6 text-white animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Top gradient border shimmer */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/30 to-transparent" />
    </section>
  );
}
