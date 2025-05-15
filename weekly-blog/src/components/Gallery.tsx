"use client";
import React, { useState } from "react";
import Image from "next/image";

interface GalleryProps {
  images: string[];
  captions?: string[];
}

export default function Gallery({ images, captions = [] }: GalleryProps) {
  const [galleryPage, setGalleryPage] = useState(0);
  const imagesPerPage = 3;
  const totalPages = Math.ceil(images.length / imagesPerPage);
  const startIdx = galleryPage * imagesPerPage;
  const endIdx = startIdx + imagesPerPage;
  const currentImages = images.slice(startIdx, endIdx);

  return (
    <div className="mt-12">
      <h3 className="font-serif text-xl mb-6 text-center">Gallery</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        {currentImages.map((img, i) => (
          <div key={`gallery-img-${startIdx + i}`} className={(startIdx + i) % 2 === 0 ? "polaroid rotate-1" : "polaroid-reverse"}>
            <Image
              src={img || "/placeholder.svg"}
              alt={`Gallery image ${startIdx + i + 1}`}
              width={400}
              height={300}
              className="w-full object-cover"
            />
            {captions[startIdx + i] && (
              <p className="text-center text-sm mt-2 text-[#6b6b6b]">{captions[startIdx + i]}</p>
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-4 mt-6">
        <button
          className="px-4 py-2 bg-[#e5d9d0] text-[#3c3c3c] rounded disabled:opacity-50"
          onClick={() => setGalleryPage((p) => Math.max(0, p - 1))}
          disabled={galleryPage === 0}
        >
          Previous
        </button>
        <span className="self-center">Page {galleryPage + 1} of {totalPages}</span>
        <button
          className="px-4 py-2 bg-[#e5d9d0] text-[#3c3c3c] rounded disabled:opacity-50"
          onClick={() => setGalleryPage((p) => Math.min(totalPages - 1, p + 1))}
          disabled={galleryPage === totalPages - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}
