"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface LightboxProps {
  images: string[];
  index: number;
  open: boolean;
  onClose: () => void;
  onChange: (index: number) => void;
  alt?: string;
}

const Lightbox: React.FC<LightboxProps> = ({
  images,
  index,
  open,
  onClose,
  onChange,
  alt = "Image",
}) => {
  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!open) return;

      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          onChange(index > 0 ? index - 1 : images.length - 1);
          break;
        case "ArrowRight":
          onChange(index < images.length - 1 ? index + 1 : 0);
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, index, images.length, onClose, onChange]);

  if (!open || images.length === 0) return null;

  const currentImage = images[index];

  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="relative w-[92vw] max-w-[1200px] h-[80vh] p-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 z-10 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70 transition-colors"
          aria-label="Close lightbox"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Navigation buttons */}
        {images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onChange(index > 0 ? index - 1 : images.length - 1);
              }}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onChange(index < images.length - 1 ? index + 1 : 0);
              }}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        {/* Image */}
        <div className="relative w-full h-full">
          <Image
            src={currentImage}
            alt={`${alt} ${index + 1}`}
            fill
            sizes="(max-width: 1280px) 92vw, 1200px"
            className="object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>

        {/* Image counter */}
        {images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-10 px-3 py-1 bg-black bg-opacity-50 text-white text-sm rounded-full">
            {index + 1} / {images.length}
          </div>
        )}
      </div>
    </div>
  );
};

export default Lightbox;