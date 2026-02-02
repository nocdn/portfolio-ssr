"use client"

import { ArrowUpRight } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"

import { chipDetails } from "@/data/projects"

export const ProjectDesktop = ({
  className,
  title,
  description,
  demoURL,
  sourceURL,
  chips = [],
}: {
  className?: string
  title: string
  description?: string
  demoURL?: string
  sourceURL?: string
  chips?: string[]
}) => {
  const [showingBackground, setShowingBackground] = useState(false)
  const [showingChips, setShowingChips] = useState(false)

  const chipsElements = chips.map((chip, index) => (
    <div
      key={index}
      className="font-inter inline-flex items-center rounded-lg px-2.5 py-1.5 text-[14px] leading-4 font-[550] tracking-tighter"
      style={{
        backgroundColor: chipDetails[chip as keyof typeof chipDetails].bgColor,
        color: chipDetails[chip as keyof typeof chipDetails].textColor,
        letterSpacing: "0.02em",
      }}
    >
      {chipDetails[chip as keyof typeof chipDetails].label}
    </div>
  ))

  return (
    <div
      className="flex flex-col"
      onMouseEnter={() => {
        setShowingBackground(true)
        setShowingChips(true)
      }}
      onMouseLeave={() => {
        setShowingBackground(false)
        setShowingChips(false)
      }}
    >
      <a
        href={demoURL ? demoURL : sourceURL}
        target="_blank"
        className={`${className} relative inline-block focus:outline-none`}
      >
        <motion.div
          className="absolute inset-0 h-full w-full -translate-x-2.5 rounded-lg"
          initial={{ width: 0 }}
          animate={{ width: showingBackground ? "100%" : 0 }}
          transition={{
            duration: 0.2,
            ease: "easeOut",
          }}
        />
        <div
          className="motion-blur-in-[2px] motion-opacity-in-0 relative z-10 flex items-center gap-3 text-[15px]"
          style={{
            fontFamily: "var(--font-pp-neue-montreal), Inter, sans-serif",
            fontWeight: 500,
            lineHeight: "32px",
            fontSize: "17px",
          }}
        >
          <p>{title}</p>
          {description && (
            <div className="grid">
              <div
                style={{
                  filter: showingChips ? "blur(1px)" : "",
                  gridArea: "1/1",
                  opacity: showingChips ? 0.05 : 1,
                  scale: showingChips ? 0.98 : 1,
                  transformOrigin: "left",
                  transition: "all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1)",
                }}
              >
                <p
                  className={"text-gray-500/90"}
                  style={{
                    fontFamily: "Switzer",
                    fontSize: "17px",
                    fontWeight: 500,
                  }}
                >
                  {description}
                </p>
              </div>
              <AnimatePresence>
                {showingChips && (
                  <motion.div
                    className="flex items-center gap-1"
                    initial={{ opacity: 0, y: -7, filter: "blur(2px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
                    exit={{ opacity: 0, y: 5, filter: "blur(2px)" }}
                    style={{ gridArea: "1/1" }}
                  >
                    {chipsElements}{" "}
                    <p className="font-sf-pro-rounded -motion-translate-x-in-25 motion-delay-75 ml-1 flex items-center gap-1 text-[15px] text-gray-600">
                      <ArrowUpRight className="h-4.5 w-4.5" strokeWidth={2.25} />
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>
      </a>
    </div>
  )
}

export const ProjectMobile = () => {
  return <div>ProjectsMobile</div>
}
