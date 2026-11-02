import { ImageResponse } from "next/og";
import { profile } from "@/data/portfolio";

export const alt = `${profile.name}, ${profile.headline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#05060a",
          backgroundImage:
            "linear-gradient(rgba(0,229,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.07) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          color: "#e8ebf3",
          fontFamily: "monospace",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 24, color: "#f5e642" }}>
          <div style={{ width: 14, height: 14, background: "#f5e642" }} />
          {profile.status.toUpperCase()}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, fontWeight: 700, lineHeight: 1, letterSpacing: -2 }}>
            {profile.name.toUpperCase()}
          </div>
          <div style={{ display: "flex", marginTop: 28, fontSize: 36, color: "#00e5ff" }}>
            {profile.headline}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "2px solid #2a3449",
            paddingTop: 24,
            fontSize: 24,
            color: "#9aa4ba",
          }}
        >
          <span>BSCS Software Engineering · FEU Tech</span>
          <span style={{ color: "#ff2fb4" }}>github.com/{profile.githubHandle}</span>
        </div>
      </div>
    ),
    size,
  );
}
