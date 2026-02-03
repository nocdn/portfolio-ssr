"use client"

import { componentCards, type ComponentCard } from "@/data/components"
import { AnimatePresence, motion } from "motion/react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const CARD_ANIMATION = {
  initial: { opacity: 0, x: -40 },
  animate: { opacity: 1, x: 0 },
  exit: {
    opacity: 0,
    x: 40,
    filter: "blur(2px)",
    transition: {
      opacity: { duration: 0.19, ease: [0.26, 0.08, 0.25, 1] },
      default: { duration: 0.27, ease: [0.26, 0.08, 0.25, 1] },
    },
  },
  transition: {
    duration: 0.27,
    ease: [0.26, 0.08, 0.25, 1],
  },
} as const

function CardImage({ card }: { card: ComponentCard }) {
  const className = "w-[200px] h-[100px] rounded-xl border border-gray-200 object-contain"

  if (card.useNextImage) {
    return (
      <a
        href={card.href}
        target="_blank"
        rel="noopener noreferrer"
        className="h-[100px] w-[200px] shrink-0"
      >
        <Image
          src={card.image}
          alt={card.alt}
          width={200}
          height={100}
          className={`${className} bg-white px-8 py-4`}
          loading="lazy"
          priority={false}
        />
      </a>
    )
  }

  return (
    <a
      href={card.href}
      target="_blank"
      rel="noopener noreferrer"
      className="h-[100px] w-[200px] shrink-0"
    >
      <img src={card.image} alt={card.alt} className={className} loading="lazy" />
    </a>
  )
}

function CardContent({ card }: { card: ComponentCard }) {
  return (
    <div className="mb-auto flex flex-col gap-1">
      <a
        href={card.href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-inter self-start text-[16.5px]"
      >
        {card.title}
      </a>
      <p className="font-inter mb-auto text-[15.5px] leading-normal font-[450] text-gray-700">
        {card.description}
      </p>
    </div>
  )
}

export function ComponentCarousel({ cardTick }: { cardTick: number }) {
  const [currentCard, setCurrentCard] = useState(0)
  const isInitialRender = useRef(true)

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false
      return
    }
    setCurrentCard((prev) => (prev + 1) % componentCards.length)
  }, [cardTick])

  const card = componentCards[currentCard]

  return (
    <div>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={currentCard}
          className="mr-6 flex items-center gap-3 rounded-xl"
          {...CARD_ANIMATION}
        >
          <CardImage card={card} />
          <CardContent card={card} />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
