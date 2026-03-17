"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import Script from "next/script"
import { ChevronLeft, Mail, MessageSquare, Check, AlertCircle, Loader2 } from "lucide-react"

const APP_STORE_LINK = "https://apps.apple.com/us/app/tigerfax/id6758597882"

const ZAPIER_WEBHOOK = "https://hooks.zapier.com/hooks/catch/26690655/up2wxq2/"

type Tab = "email" | "sms"
type Status = "idle" | "loading" | "success" | "error"

export function GetAppClient() {
  const [tab, setTab] = useState<Tab>("email")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [emailStatus, setEmailStatus] = useState<Status>("idle")
  const [smsStatus, setSmsStatus] = useState<Status>("idle")
  const [emailMsg, setEmailMsg] = useState("")
  const [smsMsg, setSmsMsg] = useState("")
  const [qrReady, setQrReady] = useState(false)
  const qrImgRef = useRef<HTMLImageElement>(null)

  // ── Mobile redirect — preserve existing mobile UX ──────────────────────
  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    if (isMobile) {
      window.location.replace(APP_STORE_LINK)
    }
  }, [])

  // ── QR code generation ─────────────────────────────────────────────────
  const generateQR = useCallback(() => {
    const win = window as unknown as { qrcode?: (t: number, e: string) => { addData: (s: string) => void; make: () => void; createDataURL: (c: number, m: number) => string } }
    if (!win.qrcode) return
    const tryRender = (typeNum: number, ecLevel: string) => {
      const qr = win.qrcode!(typeNum, ecLevel)
      qr.addData(APP_STORE_LINK)
      qr.make()
      return qr.createDataURL(6, 2)
    }
    try {
      const dataURL = tryRender(0, "H")
      if (qrImgRef.current) {
        qrImgRef.current.src = dataURL
        setQrReady(true)
      }
    } catch {
      try {
        const dataURL = tryRender(10, "M")
        if (qrImgRef.current) {
          qrImgRef.current.src = dataURL
          setQrReady(true)
        }
      } catch { /* silent */ }
    }
  }, [])

  // ── Helpers ────────────────────────────────────────────────────────────
  const isValidEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())
  const isValidPhone = (v: string) => v.replace(/\D/g, "").length >= 10

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, "")
    if (digits.length <= 10 && !value.startsWith("+")) {
      if (digits.length > 6) return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`
      if (digits.length > 3) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`
      if (digits.length > 0) return `(${digits}`
      return ""
    }
    return value
  }

  const sendViaZapier = async (payload: { type: string; to: string; link: string }) => {
    if (!ZAPIER_WEBHOOK) return false
    const body = new URLSearchParams()
    body.append("type", payload.type)
    body.append("to", payload.to)
    body.append("link", payload.link)
    try {
      const res = await fetch(ZAPIER_WEBHOOK, { method: "POST", body })
      return res.ok
    } catch {
      return false
    }
  }

  // ── Send email ─────────────────────────────────────────────────────────
  const handleSendEmail = async () => {
    setEmailMsg("")
    if (!email.trim()) {
      setEmailMsg("Please enter your email address.")
      setEmailStatus("error")
      return
    }
    if (!isValidEmail(email)) {
      setEmailMsg("Please enter a valid email address.")
      setEmailStatus("error")
      return
    }
    setEmailStatus("loading")
    const ok = await sendViaZapier({ type: "email", to: email.trim(), link: APP_STORE_LINK })
    if (ok) {
      setEmailStatus("success")
      setEmailMsg("Link sent! Check your inbox.")
      setEmail("")
    } else {
      setEmailStatus("error")
      setEmailMsg("Opening your email app instead…")
      const subject = encodeURIComponent("Your TigerFax download link")
      const body = encodeURIComponent(
        `Here's your link to download TigerFax:\n\n${APP_STORE_LINK}\n\nTigerFax — Fax from your iPhone.`
      )
      setTimeout(() => {
        window.location.href = `mailto:${encodeURIComponent(email.trim())}?subject=${subject}&body=${body}`
      }, 1200)
    }
  }

  // ── Send SMS ───────────────────────────────────────────────────────────
  const handleSendSMS = async () => {
    setSmsMsg("")
    if (!phone.trim()) {
      setSmsMsg("Please enter your phone number.")
      setSmsStatus("error")
      return
    }
    if (!isValidPhone(phone)) {
      setSmsMsg("Please enter a valid phone number (10+ digits).")
      setSmsStatus("error")
      return
    }
    setSmsStatus("loading")
    const cleanPhone = phone.replace(/\D/g, "")
    const ok = await sendViaZapier({ type: "sms", to: cleanPhone, link: APP_STORE_LINK })
    if (ok) {
      setSmsStatus("success")
      setSmsMsg("Text sent! Check your messages.")
      setPhone("")
    } else {
      setSmsStatus("error")
      setSmsMsg("Opening Messages instead…")
      const msg = encodeURIComponent(`Download TigerFax: ${APP_STORE_LINK}`)
      setTimeout(() => {
        window.location.href = `sms:${cleanPhone}?body=${msg}`
      }, 1200)
    }
  }

  return (
    <>
      {/* QR code library — loaded after interactive, calls generateQR on load */}
      <Script
        src="https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.js"
        strategy="afterInteractive"
        onLoad={generateQR}
      />

      <div className="min-h-screen bg-gray-950 text-white">
        {/* ── Header ──────────────────────────────────────────────────────── */}
        <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-gray-950/90 backdrop-blur">
          <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 md:px-6">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/gemini-generated-image-ieqesaieqesaieqe.png"
                alt="TigerFax"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="font-bold text-white">TigerFax</span>
            </Link>
            <nav className="hidden items-center gap-6 md:flex">
              <Link
                href="/#features"
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                Features
              </Link>
              <Link
                href="/#pricing"
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                Pricing
              </Link>
              <Link
                href={APP_STORE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-full bg-orange-500 px-4 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-orange-400"
              >
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                Get the App
              </Link>
            </nav>
          </div>
        </header>

        {/* ── Main ────────────────────────────────────────────────────────── */}
        <main className="mx-auto max-w-5xl px-4 py-6 md:px-6 md:py-8">
          {/* Back link + page header — compact row */}
          <div className="mb-6">
            <Link
              href="/"
              className="mb-4 inline-flex items-center gap-1.5 text-sm text-white/50 transition-colors hover:text-white/80"
            >
              <ChevronLeft className="h-4 w-4" />
              Back to TigerFax
            </Link>
            <div className="flex items-center gap-4">
              <Image
                src="/images/gemini-generated-image-ieqesaieqesaieqe.png"
                alt="TigerFax"
                width={52}
                height={52}
                className="rounded-[14px] shadow-xl shadow-orange-500/20 ring-1 ring-white/10"
              />
              <div>
                <h1 className="text-2xl font-black tracking-tight md:text-3xl">
                  Get TigerFax on your phone
                </h1>
                <p className="text-sm text-white/50">
                  Scan the QR code or send yourself a link — in the App Store in seconds.
                </p>
              </div>
            </div>
          </div>

          {/* ── 2-column grid ─────────────────────────────────────────────── */}
          <div className="grid gap-5 md:grid-cols-2">
            {/* QR Card */}
            <div className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/[0.04] p-8 text-center">
              <p className="mb-6 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-400">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-400 shadow-[0_0_6px_rgba(251,146,60,0.8)]" />
                Scan with your iPhone
              </p>

              {/* QR code */}
              <div className="mb-6 inline-flex rounded-2xl bg-white p-4 shadow-2xl shadow-black/50">
                <div className="relative">
                  {/* Spinner while loading */}
                  {!qrReady && (
                    <div className="flex h-[200px] w-[200px] items-center justify-center">
                      <Loader2 className="h-8 w-8 animate-spin text-gray-300" />
                    </div>
                  )}
                  {/* QR image — src set by generateQR() */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    ref={qrImgRef}
                    alt="QR code to download TigerFax"
                    width={200}
                    height={200}
                    className={`rounded-lg ${qrReady ? "block" : "hidden"}`}
                  />
                  {/* Logo overlay in QR center */}
                  {qrReady && (
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white p-1 shadow-md">
                      <Image
                        src="/images/gemini-generated-image-ieqesaieqesaieqe.png"
                        alt=""
                        width={36}
                        height={36}
                        className="rounded-lg"
                      />
                    </div>
                  )}
                </div>
              </div>

              <p className="text-sm leading-relaxed text-white/50">
                <span className="font-semibold text-white/80">
                  Open your iPhone camera
                </span>{" "}
                and point it at the code — no app needed. Tap the notification
                to open the App Store.
              </p>
            </div>

            {/* Send Link Card */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8">
              <p className="mb-6 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-400">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-400 shadow-[0_0_6px_rgba(251,146,60,0.8)]" />
                Send yourself the link
              </p>

              <h2 className="mb-1.5 text-xl font-bold">Get the link on your phone</h2>
              <p className="mb-6 text-sm leading-relaxed text-white/60">
                Enter your email or phone number and we&apos;ll send you a
                direct link to download TigerFax.
              </p>

              {/* Tab switcher */}
              <div className="mb-5 flex gap-1 rounded-xl border border-white/10 bg-white/[0.04] p-1">
                {(["email", "sms"] as Tab[]).map((t) => (
                  <button
                    key={t}
                    onClick={() => setTab(t)}
                    className={`flex flex-1 items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-semibold transition-all ${
                      tab === t
                        ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30"
                        : "text-white/50 hover:text-white/80"
                    }`}
                  >
                    {t === "email" ? (
                      <Mail className="h-3.5 w-3.5" />
                    ) : (
                      <MessageSquare className="h-3.5 w-3.5" />
                    )}
                    {t === "email" ? "Email" : "Text"}
                  </button>
                ))}
              </div>

              {/* Email panel */}
              {tab === "email" && (
                <div>
                  <div className="relative mb-3">
                    <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/30" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value)
                        setEmailStatus("idle")
                        setEmailMsg("")
                      }}
                      onKeyDown={(e) => e.key === "Enter" && handleSendEmail()}
                      placeholder="your@email.com"
                      autoComplete="email"
                      className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-3.5 pl-11 pr-4 text-sm text-white placeholder-white/30 outline-none transition focus:border-orange-500/60 focus:bg-orange-500/[0.05] focus:ring-2 focus:ring-orange-500/20"
                    />
                  </div>
                  <button
                    onClick={handleSendEmail}
                    disabled={emailStatus === "loading"}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-orange-400 hover:shadow-lg hover:shadow-orange-500/30 disabled:cursor-not-allowed disabled:opacity-60 active:scale-[0.98]"
                  >
                    {emailStatus === "loading" ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      "Send me the link"
                    )}
                  </button>
                  {emailStatus !== "idle" && emailMsg && (
                    <div
                      className={`mt-3 flex items-center gap-2 rounded-xl border px-3.5 py-2.5 text-sm ${
                        emailStatus === "success"
                          ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-400"
                          : "border-red-500/20 bg-red-500/10 text-red-400"
                      }`}
                    >
                      {emailStatus === "success" ? (
                        <Check className="h-4 w-4 shrink-0" />
                      ) : (
                        <AlertCircle className="h-4 w-4 shrink-0" />
                      )}
                      {emailMsg}
                    </div>
                  )}
                </div>
              )}

              {/* SMS panel */}
              {tab === "sms" && (
                <div>
                  <div className="relative mb-3">
                    <MessageSquare className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/30" />
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => {
                        setPhone(formatPhone(e.target.value))
                        setSmsStatus("idle")
                        setSmsMsg("")
                      }}
                      onKeyDown={(e) => e.key === "Enter" && handleSendSMS()}
                      placeholder="+1 (555) 000-0000"
                      autoComplete="tel"
                      className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-3.5 pl-11 pr-4 text-sm text-white placeholder-white/30 outline-none transition focus:border-orange-500/60 focus:bg-orange-500/[0.05] focus:ring-2 focus:ring-orange-500/20"
                    />
                  </div>
                  <button
                    onClick={handleSendSMS}
                    disabled={smsStatus === "loading"}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-orange-400 hover:shadow-lg hover:shadow-orange-500/30 disabled:cursor-not-allowed disabled:opacity-60 active:scale-[0.98]"
                  >
                    {smsStatus === "loading" ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      "Text me the link"
                    )}
                  </button>
                  {smsStatus !== "idle" && smsMsg && (
                    <div
                      className={`mt-3 flex items-center gap-2 rounded-xl border px-3.5 py-2.5 text-sm ${
                        smsStatus === "success"
                          ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-400"
                          : "border-red-500/20 bg-red-500/10 text-red-400"
                      }`}
                    >
                      {smsStatus === "success" ? (
                        <Check className="h-4 w-4 shrink-0" />
                      ) : (
                        <AlertCircle className="h-4 w-4 shrink-0" />
                      )}
                      {smsMsg}
                    </div>
                  )}
                </div>
              )}

              <p className="mt-4 text-center text-xs text-white/40">
                No spam. Just the link. We don&apos;t store your info.
              </p>

              {/* Divider */}
              <div className="my-6 flex items-center gap-3">
                <div className="h-px flex-1 bg-white/10" />
                <span className="text-xs text-white/40">or open directly</span>
                <div className="h-px flex-1 bg-white/10" />
              </div>

              {/* Direct App Store button */}
              <Link
                href={APP_STORE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-white py-3.5 font-bold text-black transition hover:-translate-y-0.5 hover:bg-gray-100 hover:shadow-lg hover:shadow-white/10 active:scale-[0.98]"
              >
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="flex flex-col items-start leading-tight">
                  <span className="text-[10px] font-medium opacity-60">
                    Download on the
                  </span>
                  <span className="text-base font-black">App Store</span>
                </div>
              </Link>
            </div>
          </div>
        </main>

        {/* ── Footer ──────────────────────────────────────────────────────── */}
        <footer className="border-t border-white/[0.08] py-8">
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-4 text-center md:flex-row md:justify-between md:text-left">
            <div className="flex items-center gap-2">
              <Image
                src="/images/gemini-generated-image-ieqesaieqesaieqe.png"
                alt="TigerFax"
                width={24}
                height={24}
                className="rounded-md"
              />
              <span className="text-sm font-semibold text-white/80">TigerFax</span>
            </div>
            <div className="flex gap-5 text-sm text-white/40">
              <Link href="/privacy" className="transition-colors hover:text-white/70">
                Privacy
              </Link>
              <Link href="/terms" className="transition-colors hover:text-white/70">
                Terms
              </Link>
              <Link href="/support" className="transition-colors hover:text-white/70">
                Support
              </Link>
            </div>
            <p className="text-xs text-white/30">
              © {new Date().getFullYear()} TigerFax. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}
