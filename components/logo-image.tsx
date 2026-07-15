"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"

interface LogoImageProps {
  size?: number
  fallbackClass?: string
  className?: string
}

export function LogoImage({ size = 40, fallbackClass = "", className = "" }: LogoImageProps) {
  return (
    <div
      className={cn("relative flex-none", className)}
      style={{ width: size, height: size }}
    >
      <Image
        src="/images/logo.jpg"
        alt="Logo Darussalam Bacan"
        fill
        className="object-contain"
        onError={(e) => {
          const img = e.currentTarget as HTMLImageElement
          img.style.display = "none"
          const fb = img.nextElementSibling as HTMLElement | null
          if (fb) fb.style.display = "flex"
        }}
      />
      {/* Fallback text — tampil saat logo.png belum ada */}
      <span
        className={cn(
          "absolute inset-0 bg-primary text-primary-foreground font-black items-center justify-center hidden",
          fallbackClass
        )}
        style={{ fontSize: size * 0.3 }}
      >
        DA
      </span>
    </div>
  )
}
