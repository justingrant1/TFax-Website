"use client"

/**
 * SmartAppLink
 * - Mobile (iPhone/iPad/Android): links directly to the App Store
 * - Desktop: links to /get-app (QR code + send-link page)
 *
 * Defaults to /get-app on the server (SSR-safe). After hydration,
 * if the user is on mobile the href is swapped to the App Store URL.
 * The swap happens before any user interaction so there is no visible flash.
 */

import { useState, useEffect } from "react"
import Link from "next/link"

const APP_STORE_LINK = "https://apps.apple.com/us/app/tigerfax/id6758597882"
const GET_APP_PATH = "/get-app"

interface SmartAppLinkProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export function SmartAppLink({ children, className, onClick }: SmartAppLinkProps) {
  const [href, setHref] = useState(GET_APP_PATH)
  const [isExternal, setIsExternal] = useState(false)

  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    if (isMobile) {
      setHref(APP_STORE_LINK)
      setIsExternal(true)
    }
  }, [])

  return (
    <Link
      href={href}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={className}
      onClick={onClick}
    >
      {children}
    </Link>
  )
}
