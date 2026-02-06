"use client"

import { Popover } from "@base-ui/react/popover"
import { ExternalLink } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"

export function InlineDefinition({
  children,
  title = "Definition",
  explanation,
  readMoreURL,
}: {
  children: React.ReactNode
  title?: string
  explanation: string
  readMoreURL?: string
}) {
  const [open, setOpen] = useState(false)

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger
        className="cursor-help underline decoration-gray-500/50 decoration-dotted underline-offset-2"
        openOnHover
        delay={15}
      >
        {children}
      </Popover.Trigger>
      <AnimatePresence>
        {open && (
          <Popover.Portal>
            <Popover.Positioner sideOffset={8} collisionPadding={16}>
              <Popover.Popup
                className="max-w-lg rounded-2xl bg-[#323137] px-3 py-2 text-base font-medium text-gray-300 shadow-2xl [corner-shape:squircle] data-[side=bottom]:origin-top data-[side=left]:origin-right data-[side=right]:origin-left data-[side=top]:origin-bottom"
                render={
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96, filter: "blur(1px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 0.96, filter: "blur(1px)" }}
                    transition={{
                      type: "tween",
                      ease: [0.26, 1, 0.5, 1],
                      bounce: 0,
                      duration: 0.27,
                    }}
                  />
                }
              >
                <p className="text-[15px] font-medium text-gray-300">{title}</p>
                <a
                  href={readMoreURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-2 flex w-fit items-center gap-1 text-sm text-gray-300/60 hover:text-gray-300"
                >
                  Read more <ExternalLink size={14} />
                </a>
                <p className="text-sm text-gray-200">{explanation}</p>
              </Popover.Popup>
            </Popover.Positioner>
          </Popover.Portal>
        )}
      </AnimatePresence>
    </Popover.Root>
  )
}
