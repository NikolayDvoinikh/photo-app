"use client";

import { CldUploadButton } from "next-cloudinary";
import { CldImage } from "next-cloudinary";

export default function Home() {
  return (
    <main className="p-24 h-screen">
      <CldUploadButton uploadPreset="pktii80a" />
      <CldImage
        width="960"
        height="600"
        src="photo-1718964312269-9f8942618cf6"
        sizes="100vw"
        alt="Description of my image"
      />
    </main>
  );
}
