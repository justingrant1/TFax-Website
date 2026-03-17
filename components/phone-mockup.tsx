import Image from "next/image"

interface PhoneMockupProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
}

export function PhoneMockup({ src, alt, width = 200, height = 400, className = "" }: PhoneMockupProps) {
  const borderRadius = Math.round(width * 0.2)
  const borderWidth = Math.max(6, Math.round(width * 0.032))
  const notchWidth = Math.round(width * 0.38)
  const notchHeight = Math.round(width * 0.1)
  const notchRadius = Math.round(width * 0.07)

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        background: "#1c1c1e",
        borderRadius: `${borderRadius}px`,
        border: `${borderWidth}px solid #2c2c2e`,
        boxShadow:
          "0 0 0 1px rgba(255,255,255,0.06) inset, 0 25px 50px rgba(0,0,0,0.3), 0 8px 16px rgba(0,0,0,0.15)",
        flexShrink: 0,
      }}
    >
      {/* Notch */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 z-10"
        style={{
          width: `${notchWidth}px`,
          height: `${notchHeight}px`,
          background: "#1c1c1e",
          borderRadius: `0 0 ${notchRadius}px ${notchRadius}px`,
        }}
      />
      {/* Screen content */}
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-top"
        sizes={`${width}px`}
      />
    </div>
  )
}
