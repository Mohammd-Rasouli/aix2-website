"use client"

import { useEffect, useRef } from "react"

interface VideoEmbedProps {
  src: string
  title: string
  className?: string
}

export function VideoEmbed({ src, title, className = "" }: VideoEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (containerRef.current) {
      const iframe = document.createElement("iframe")
      iframe.src = src
      iframe.title = title
      iframe.className = "absolute top-0 left-0 w-full h-full border-0"
      iframe.allow = "autoplay; encrypted-media"
      iframe.allowFullscreen = true
      containerRef.current.appendChild(iframe)

      return () => {
        if (containerRef.current && iframe.parentNode === containerRef.current) {
          containerRef.current.removeChild(iframe)
        }
      }
    }
  }, [src, title])

  return (
    <div
      ref={containerRef}
      className={`relative w-full pt-[56.25%] rounded overflow-hidden ${className}`}
    />
  )
}
