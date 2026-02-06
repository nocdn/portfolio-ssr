import { ImageResponse } from "next/og"
import { readFile } from "node:fs/promises"
import { join } from "node:path"

export const alt = "Bartosz Bak - Design Engineer"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image() {
  const nameText = "Bartosz Bak"
  const titleText = "Design Engineer"

  const [interSemiBold, openRundeMedium] = await Promise.all([
    readFile(join(process.cwd(), "app/fonts/Inter-SemiBold.ttf")),
    readFile(join(process.cwd(), "app/fonts/OpenRunde-Medium.otf")),
  ])

  return new ImageResponse(
    <div
      style={{
        background: "#fafafa",
        width: "100%",
        height: "100%",
        display: "flex",
        padding: 60,
        position: "relative",
      }}
    >
      {/* Top left - Name and title */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            color: "#0a0a0a",
            fontSize: 72,
            fontFamily: "Inter",
            fontWeight: 600,
          }}
        >
          {nameText}
        </div>
        <div
          style={{
            color: "#71717a",
            fontSize: 40,
            fontFamily: "OpenRunde",
            fontWeight: 500,
            marginTop: 12,
          }}
        >
          {titleText}
        </div>
      </div>

      {/* Bottom right - Sprout SVG */}
      <div
        style={{
          position: "absolute",
          bottom: 60,
          right: 60,
          display: "flex",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="84"
          height="84"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#0a0a0a"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3" />
          <path d="M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4" />
          <path d="M5 21h14" />
        </svg>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        {
          name: "Inter",
          data: interSemiBold,
          style: "normal" as const,
          weight: 600,
        },
        {
          name: "OpenRunde",
          data: openRundeMedium,
          style: "normal" as const,
          weight: 500,
        },
      ],
    }
  )
}
