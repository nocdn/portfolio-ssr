"use client"

import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"

export function TwitterHover() {
  const [hoveringTwitter, setHoveringTwitter] = useState(false)

  return (
    <a
      href="https://x.com/nocdns"
      target="_blank"
      rel="noopener noreferrer"
      className="relative text-[18.5px] text-blue-600"
      onMouseEnter={() => {
        setHoveringTwitter(true)
        setTimeout(() => setHoveringTwitter(false), 300)
      }}
    >
      Twitter
      <AnimatePresence>
        {hoveringTwitter && (
          <motion.div
            initial={{ opacity: 0, y: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              y: -22,
              x: 22,
              rotate: 7.5,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              filter: "blur(1px)",
            }}
            transition={{
              duration: 0.5,
              ease: [0.215, 0.61, 0.355, 1],
            }}
            className="pointer-events-none absolute top-1/2 left-[calc(50%-1px)] -translate-x-1/2 -translate-y-1/2 text-[16px] font-medium whitespace-nowrap text-blue-600/50 select-none"
          >
            building in public
          </motion.div>
        )}
      </AnimatePresence>
    </a>
  )
}
