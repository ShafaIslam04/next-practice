"use client";

import Image from "next/image";
import { useState } from "react";

interface BookImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export default function BookImage({
  src,
  alt,
  width,
  height,
  className,
}: BookImageProps) {
  const [imageSrc, setImageSrc] = useState(src);

  return (
    <Image
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={() => {
        if (imageSrc !== "/books/default-book.jpg") {
          setImageSrc("/books/default-book.jpg");
        }
      }}
    />
  );
}