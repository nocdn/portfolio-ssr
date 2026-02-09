"use client"

import { useState } from "react"
import { SectionMobile } from "./Section"

const contactItems = [
  {
    title: "Email",
    href: "mailto:contact@bartoszbak.org",
    value: "contact@bartoszbak.org",
    action: "Copy" as const,
  },
  {
    title: "Twitter",
    href: "https://x.com/nocdns",
    action: "Visit" as const,
  },
  {
    title: "GitHub",
    href: "https://github.com/nocdn",
    action: "Visit" as const,
  },
]

export function ContactMobile() {
  const [copied, setCopied] = useState(false)

  const handleEmailCopy = () => {
    navigator.clipboard.writeText("contact@bartoszbak.org")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <SectionMobile id="contact" title="CONTACT">
      <div className="flex flex-col gap-4">
        {contactItems.map((item) => {
          if (item.action === "Copy") {
            return (
              <button
                key={item.title}
                onClick={handleEmailCopy}
                className="flex items-center justify-between gap-4"
              >
                <p className="flex-nowrap text-[17px] whitespace-nowrap">{item.title}</p>
                <div className="h-0.25 w-full bg-gray-200"></div>
                <p
                  className={`font-pp-neue-montreal text-[16px] ${copied ? "text-blue-600" : "text-gray-500/90"}`}
                >
                  {copied ? "Copied" : item.action}
                </p>
              </button>
            )
          }

          return (
            <a
              key={item.title}
              className="flex items-center justify-between gap-4"
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="flex-nowrap text-[17px] whitespace-nowrap">{item.title}</p>
              <div className="h-0.25 w-full bg-gray-200"></div>
              <p className="font-pp-neue-montreal text-[16px] text-gray-500/90">{item.action}</p>
            </a>
          )
        })}
      </div>
      <p className="mt-4 font-sans text-[15px] text-gray-500">
        Feel free to reach out at any point about anything
      </p>
    </SectionMobile>
  )
}
