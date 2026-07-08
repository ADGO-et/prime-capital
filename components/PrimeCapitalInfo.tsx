"use client";
import dynamic from 'next/dynamic'
import animatedBusiness from '@/components/animated-icons/business.json'
import { useHomePage } from '@/hooks/queries/usePagesQuery'


const Player = dynamic(() => import('@lottiefiles/react-lottie-player').then(mod => mod.Player), {
  ssr: false,
  loading: () => <div className="w-[100px] h-[100px] bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
})
export default function PrimeCapitalInfo() {
  const { data: home } = useHomePage();

  return (
    <section className="w-full bg-white py-16">
      <div className="flex flex-col md:flex-row items-start justify-between w-full gap-10 md:gap-16 px-6 md:px-12">
        {/* Left: Text Content */}
        <div className="flex-1 space-y-5">
          {/* Gradient Title */}
          <h1 className="text-3xl md:text-4xl font-bold leading-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {home?.introTitle}
          </h1>

          {/* Subtitle Paragraph */}
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            {home?.introText}
          </p>
        </div>

        <div className="flex-shrink-0 relative w-full md:w-[380px] lg:w-[400px] flex justify-center">
          <div className="w-full h-64 md:h-80 bg-white ease-out overflow-hidden">
            <Player autoplay loop src={animatedBusiness} className="absolute inset-0 w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
