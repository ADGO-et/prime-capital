"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface Slide {
  id: number;
  image: string;
  title: string;
  description: string;
  alignment: "left" | "center" | "right";
  buttons?: {
    text: string;
    href: string;
    variant: "primary" | "secondary";
  }[];
}

const repeatedDescription =
  "Prime Capital S.C. — Innovation, Integrity, and Excellence in Investment Banking";

const slides: Slide[] = [
  {
    id: 1,
    image: "/image1.png",
    title: "Empowering Ethiopia's Financial Future",
    description: repeatedDescription,
    alignment: "center",
    buttons: [
      { text: "Explore Our Services", href: "/services", variant: "primary" },
      { text: "Learn More", href: "/about", variant: "secondary" },
    ],
  },
  {
    id: 2,
    image: "/image2.png",
    title: "Strategic Investment Banking Solutions",
    description:
      "Comprehensive advisory services tailored to drive growth and maximize value for our clients",
    alignment: "left",
    buttons: [{ text: "Our Services", href: "/services", variant: "primary" }],
  },
  {
    id: 3,
    image: "/image3.png",
    title: "Building Tomorrow's Capital Markets",
    description:
      "Leading Ethiopia's financial transformation with expertise, innovation, and unwavering commitment",
    alignment: "right",
    buttons: [
      { text: "Join Our Team", href: "/vacancy", variant: "primary" },
      { text: "Contact Us", href: "/contact-us", variant: "secondary" },
    ],
  },
  {
    id: 4,
    image: "/image-1.jpg",
    title: "Prime Capital in Motion",
    description: repeatedDescription,
    alignment: "center",
  },
  {
    id: 5,
    image: "/image-3.jpg",
    title: "Trusted Financial Leadership",
    description: repeatedDescription,
    alignment: "right",
  },
  {
    id: 6,
    image: "/image-4.jpg",
    title: "Driving Market Confidence",
    description: repeatedDescription,
    alignment: "center",
  },
];

// Duplicate slides for seamless infinite loop
const infiniteSlides = [...slides, ...slides];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isResetting, setIsResetting] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const nextSlide = useCallback(() => {
    setTextVisible(false);

    setCurrentIndex((prev) => prev + 1);
  }, []);

  const prevSlide = useCallback(() => {
    setTextVisible(false);

    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  // Auto play every 3-4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  // When the sliding animation completes
  useEffect(() => {
    // show text slightly after slide movement starts
    const showTimer = setTimeout(() => setTextVisible(true), 500);
    if (currentIndex === slides.length) {
      // reached clone of first slide, jump back without animation
      setTimeout(() => {
        setIsResetting(true);
        setCurrentIndex(0);
      }, 50);
    }
    return () => clearTimeout(showTimer);
  }, [currentIndex]);

  // After resetting remove the no-transition flag
  useEffect(() => {
    if (isResetting) {
      const id = setTimeout(() => setIsResetting(false), 60);
      return () => clearTimeout(id);
    }
  }, [isResetting]);

  const realSlideIndex = currentIndex % slides.length;
  const slide = slides[realSlideIndex];

  const getTextVariants = (alignment: "left" | "center" | "right") => {
    const directions = {
      left: { hidden: { opacity: 0, x: -80 }, visible: { opacity: 1, x: 0 } },
      right: { hidden: { opacity: 0, x: 80 }, visible: { opacity: 1, x: 0 } },
      center: { hidden: { opacity: 0, y: 60 }, visible: { opacity: 1, y: 0 } },
    };
    return directions[alignment];
  };

  const alignmentClasses = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  };

  const contentPositionClasses = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
  };

  return (
    <section className="relative h-[65vh] w-full overflow-hidden">
      {/* ✅ Sliding Track */}
      <motion.div
        ref={containerRef}
        className="absolute inset-0 flex"
        animate={{ x: `-${currentIndex * 100}%` }}
        transition={isResetting ? { duration: 0 } : { duration: 1, ease: "linear" }}
      >
        {infiniteSlides.map((s, index) => (
          <div key={index} className="relative w-full h-full flex-shrink-0">
            <Image src={s.image} alt="" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/80" />
          </div>
        ))}
      </motion.div>

      {/* ✅ Text Content */}
      <div
        className={`relative z-10 h-full flex ${contentPositionClasses[slide.alignment]} items-center px-6 md:px-12 lg:px-20`}
      >
        <div className={`max-w-7xl w-full flex flex-col ${alignmentClasses[slide.alignment]} space-y-6`}>
          <AnimatePresence mode="wait">
            {textVisible && (
              <motion.div
                key={slide.id + "-text"}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className={`flex flex-col ${alignmentClasses[slide.alignment]} space-y-6 max-w-4xl`}
              >
                <motion.h1
                  variants={getTextVariants(slide.alignment)}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight drop-shadow-xl"
                >
                  {slide.title}
                </motion.h1>

                <motion.p
                  variants={getTextVariants(slide.alignment)}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="text-base md:text-lg lg:text-xl text-white/90 max-w-3xl drop-shadow"
                >
                  {slide.description}
                </motion.p>

                {slide.buttons && (
                  <motion.div
                    variants={getTextVariants(slide.alignment)}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className={`flex flex-wrap gap-4 ${slide.alignment === "center" ? "justify-center" : ""}`}
                  >
                    {slide.buttons.map((button, index) => (
                      <Link
                        key={index}
                        href={button.href}
                        className={`px-6 py-3 rounded-lg font-semibold text-sm md:text-base transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
                          button.variant === "primary"
                            ? "bg-gradient-to-r from-primary to-secondary text-white hover:from-primary/90 hover:to-secondary/90"
                            : "bg-white/10 backdrop-blur-md text-white border-2 border-white/30 hover:bg-white/20"
                        }`}
                      >
                        {button.text}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* ✅ Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-3 md:p-4 rounded-full transition-all duration-300 hover:scale-110 border border-white/20"
      >
        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-3 md:p-4 rounded-full transition-all duration-300 hover:scale-110 border border-white/20"
      >
        <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
      </button>

      {/* ✅ Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === realSlideIndex ? "w-12 bg-white" : "w-2 bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
