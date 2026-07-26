import { useEffect, useState } from "react";
import Image, { type ImageProps, type StaticImageData } from "next/image";

type SafeImageProps = Omit<ImageProps, "src"> & {
  src?: string | StaticImageData | null;
  fallbackSrc?: string | StaticImageData;
};

export function SafeImage({
  src,
  fallbackSrc = "/placeholder.png",
  alt,
  ...props
}: SafeImageProps) {
  const [currentSrc, setCurrentSrc] = useState<string | StaticImageData | null | undefined>(src ?? fallbackSrc);

  useEffect(() => {
    setCurrentSrc(src ?? fallbackSrc);
  }, [src, fallbackSrc]);

  return (
    <Image
      {...props}
      src={currentSrc ?? fallbackSrc}
      alt={alt}
      onError={() => {
        if (currentSrc !== fallbackSrc) {
          setCurrentSrc(fallbackSrc);
        }
      }}
    />
  );
}
