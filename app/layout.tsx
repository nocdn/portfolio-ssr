import type { Metadata } from "next"
import { Geist, Geist_Mono, Inter, JetBrains_Mono } from "next/font/google"
import localFont from "next/font/local"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
})

const ioskeleyMono = localFont({
  src: [
    { path: "./fonts/IoskeleyMono-Light.woff2", weight: "300" },
    { path: "./fonts/IoskeleyMono-Regular.woff2", weight: "400" },
    { path: "./fonts/IoskeleyMono-Medium.woff2", weight: "500" },
    { path: "./fonts/IoskeleyMono-SemiBold.woff2", weight: "600" },
    { path: "./fonts/IoskeleyMono-Bold.woff2", weight: "700" },
    { path: "./fonts/IoskeleyMono-ExtraBold.woff2", weight: "800" },
  ],
  variable: "--font-ioskeley-mono",
})

const switzer = localFont({
  src: "../public/fonts/Switzer-Medium.woff2",
  variable: "--font-switzer",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
})

const ppNeueMontreal = localFont({
  src: "../public/fonts/PPNeueMontreal-Medium.woff2",
  variable: "--font-pp-neue-montreal",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
})

const isDevelopment = process.env.NODE_ENV === "development"

export const metadata: Metadata = {
  title: isDevelopment ? "Bartosz Bak (dev)" : "Bartosz Bak",
  description: "Aspiring design engineer based in the UK",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Bartosz Bak",
    description: "Aspiring design engineer based in the UK",
    url: "https://bartoszbak.org",
    siteName: "Bartosz Bak",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://bartoszbak.org/og.png",
        width: 1200,
        height: 630,
        alt: "Bartosz Bak - Aspiring design engineer based in the UK",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@nocdns",
    creator: "@nocdns",
    title: "Bartosz Bak",
    description: "Aspiring design engineer based in the UK",
    images: ["https://bartoszbak.org/og.png"],
  },
  alternates: {
    canonical: "https://bartoszbak.org",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Bartosz Bak",
    url: "https://bartoszbak.org",
    description: "Aspiring design engineer based in the UK",
    image: "https://bartoszbak.org/og.png",
  }
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${jetBrainsMono.variable} ${ioskeleyMono.variable} ${switzer.variable} ${ppNeueMontreal.variable} bg-background antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
