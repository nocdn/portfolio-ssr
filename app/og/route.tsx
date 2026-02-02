import { ImageResponse } from "next/og"

async function loadGoogleFont(font: string, text: string, weight: number = 400) {
  const url = `https://fonts.googleapis.com/css2?family=${font}:wght@${weight}&text=${encodeURIComponent(text)}`
  const css = await (await fetch(url)).text()
  const resource = css.match(/src: url\((.+)\) format\('(opentype|truetype)'\)/)

  if (resource) {
    const response = await fetch(resource[1])
    if (response.status === 200) {
      return await response.arrayBuffer()
    }
  }

  throw new Error("Failed to load font data")
}

export async function GET() {
  const nameText = "Bartosz Bak"
  const titleText = "Design Engineer"

  const [interSemiBold, interRegular] = await Promise.all([
    loadGoogleFont("Inter", nameText, 600),
    loadGoogleFont("Inter", titleText, 400),
  ])

  return new ImageResponse(
    <div
      style={{
        background: "#0a0a0a",
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
            color: "white",
            fontSize: 64,
            fontFamily: "Inter",
            fontWeight: 600,
          }}
        >
          {nameText}
        </div>
        <div
          style={{
            color: "#a1a1aa",
            fontSize: 32,
            fontFamily: "Inter",
            fontWeight: 400,
            marginTop: 12,
          }}
        >
          {titleText}
        </div>
      </div>

      {/* Top right - Sprout SVG */}
      <div
        style={{
          position: "absolute",
          top: 60,
          right: 60,
          display: "flex",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
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
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Inter",
          data: interSemiBold,
          style: "normal" as const,
          weight: 600,
        },
        {
          name: "Inter",
          data: interRegular,
          style: "normal" as const,
          weight: 400,
        },
      ],
    }
  )
}
