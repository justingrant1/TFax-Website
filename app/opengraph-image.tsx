import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "TigerFax — Send & Receive Faxes from Your iPhone"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
        }}
      >
        {/* Background accent circles */}
        <div
          style={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "rgba(249, 115, 22, 0.12)",
            filter: "blur(80px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -80,
            left: -80,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "rgba(249, 115, 22, 0.08)",
            filter: "blur(60px)",
          }}
        />

        {/* Tiger emoji badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            background: "rgba(249, 115, 22, 0.15)",
            border: "1px solid rgba(249, 115, 22, 0.3)",
            borderRadius: 100,
            padding: "8px 20px",
            marginBottom: 32,
          }}
        >
          <span style={{ fontSize: 22 }}>🐯</span>
          <span
            style={{
              color: "#f97316",
              fontSize: 18,
              fontWeight: 600,
              letterSpacing: "0.02em",
            }}
          >
            Now on the App Store
          </span>
        </div>

        {/* Main headline */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            color: "#f8fafc",
            textAlign: "center",
            lineHeight: 1.1,
            maxWidth: 900,
            marginBottom: 24,
            letterSpacing: "-0.02em",
          }}
        >
          Send &amp; Receive Faxes from Your{" "}
          <span style={{ color: "#f97316" }}>iPhone</span>
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 26,
            color: "#94a3b8",
            textAlign: "center",
            maxWidth: 700,
            lineHeight: 1.4,
            marginBottom: 48,
          }}
        >
          Scan, send, and receive real faxes worldwide. Start free — no credit
          card required.
        </div>

        {/* Trust signals */}
        <div
          style={{
            display: "flex",
            gap: 32,
            alignItems: "center",
          }}
        >
          {["3 free pages", "iPhone & iPad", "Secure & private"].map((item) => (
            <div
              key={item}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                color: "#cbd5e1",
                fontSize: 18,
              }}
            >
              <span style={{ color: "#f97316", fontSize: 20 }}>✓</span>
              {item}
            </div>
          ))}
        </div>

        {/* Bottom brand */}
        <div
          style={{
            position: "absolute",
            bottom: 36,
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <span style={{ fontSize: 28 }}>🐯</span>
          <span
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: "#f8fafc",
              letterSpacing: "-0.01em",
            }}
          >
            TigerFax
          </span>
          <span style={{ color: "#475569", fontSize: 20, marginLeft: 4 }}>
            tigerfax.com
          </span>
        </div>
      </div>
    ),
    { ...size }
  )
}
