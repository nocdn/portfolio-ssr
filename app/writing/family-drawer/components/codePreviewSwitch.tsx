"use client"

import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"
import type { BundledLanguage } from "shiki"
import { codeToHtml } from "shiki"

interface CodePreviewSwitchProps {
  children?: React.ReactNode
  code: string
  lang?: BundledLanguage
  previewClassName?: string
  codeClassName?: string
}

export function CodePreviewSwitch({
  children,
  code,
  lang = "tsx",
  previewClassName,
  codeClassName,
}: CodePreviewSwitchProps) {
  const [selected, setSelected] = useState<"preview" | "code">("preview")
  const [highlightedHtml, setHighlightedHtml] = useState<string>("")

  useEffect(() => {
    async function highlightCode() {
      const html = await codeToHtml(code, {
        lang,
        themes: {
          light: "github-light",
          dark: "github-dark",
        },
        defaultColor: false,
      })
      setHighlightedHtml(html)
    }

    if (code) {
      highlightCode()
    }
  }, [code, lang])

  return (
    <div className="border-shadow flex flex-col rounded-xl">
      <div
        id="header"
        className="flex h-18 items-center justify-between gap-3 border-b border-gray-200 px-4"
      >
        <button
          onMouseDown={() => setSelected("preview")}
          className={cn(
            "w-full rounded-full py-2 transition-all duration-100 select-none active:scale-99",
            selected === "preview" ? "bg-[#323137] text-white" : "bg-[#E3E3E3]"
          )}
        >
          Preview
        </button>
        <button
          onMouseDown={() => setSelected("code")}
          className={cn(
            "w-full rounded-full py-2 transition-all duration-100 select-none active:scale-99",
            selected === "code" ? "bg-[#323137] text-white" : "bg-[#E3E3E3]"
          )}
        >
          Code
        </button>
      </div>
      <div id="content" className="h-96 overflow-auto">
        {selected === "preview" ? (
          <div className={cn(previewClassName)}>{children}</div>
        ) : (
          <div
            className={cn(
              "font-ioskeley-mono h-full overflow-auto p-4 text-sm [&_pre]:m-0 [&_pre]:bg-transparent [&_pre]:p-0",
              codeClassName
            )}
            dangerouslySetInnerHTML={{ __html: highlightedHtml }}
          />
        )}
      </div>
    </div>
  )
}
