import React from "react"
import Image from "next/image"

export default function HeroImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className={"mdx-hero-image mt-3 mb-4"}>
      <Image src={src} alt={alt} fill></Image>
    </div>
  )
}
