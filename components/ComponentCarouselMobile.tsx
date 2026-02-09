"use client"

import { componentCards, type ComponentCard } from "@/data/components"
import { animate, AnimatePresence, motion, useMotionValue } from "motion/react"
import Image from "next/image"
import { useState } from "react"

const SWIPE_THRESHOLD = 50
const SWIPE_VELOCITY_THRESHOLD = 300

const SPRING_CONFIG = {
  type: "spring" as const,
  stiffness: 400,
  damping: 35,
}

function MobileCardImage({ card }: { card: ComponentCard }) {
  const className = "w-full aspect-[2/1] rounded-xl border-[1.5px] border-gray-200 object-contain"

  if (card.useNextImage) {
    return (
      <Image
        src={card.image}
        alt={card.alt}
        width={400}
        height={200}
        className={`${className} bg-white px-8 py-4`}
        draggable={false}
        loading="lazy"
        priority={false}
      />
    )
  }

  return (
    <img src={card.image} alt={card.alt} className={className} draggable={false} loading="lazy" />
  )
}

function MobileCardContent({ card }: { card: ComponentCard }) {
  return (
    <div className="flex flex-col gap-1 pt-3">
      <a
        href={card.href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-inter text-[16.5px]"
      >
        {card.title}
      </a>
      <p className="font-inter text-[15.5px] leading-normal font-[450] text-gray-700">
        {card.description}
      </p>
    </div>
  )
}

export function ComponentCarouselMobile() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const x = useMotionValue(0)

  const paginate = (newDirection: number) => {
    const nextIndex = currentIndex + newDirection
    if (nextIndex < 0 || nextIndex >= componentCards.length) {
      animate(x, 0, SPRING_CONFIG)
      return
    }
    setDirection(newDirection)
    setCurrentIndex(nextIndex)
  }

  const handleDragEnd = (
    _: PointerEvent | MouseEvent | TouchEvent,
    info: { offset: { x: number }; velocity: { x: number } }
  ) => {
    const offsetX = info.offset.x
    const velocityX = info.velocity.x

    if (offsetX < -SWIPE_THRESHOLD || velocityX < -SWIPE_VELOCITY_THRESHOLD) {
      paginate(1)
    } else if (offsetX > SWIPE_THRESHOLD || velocityX > SWIPE_VELOCITY_THRESHOLD) {
      paginate(-1)
    }
  }

  const card = componentCards[currentIndex]

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 200 : -200,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -200 : 200,
      opacity: 0,
    }),
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="relative overflow-hidden">
        <AnimatePresence mode="popLayout" initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={SPRING_CONFIG}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            dragMomentum={false}
            onDragEnd={handleDragEnd}
            className="w-full touch-pan-y"
          >
            <MobileCardImage card={card} />
            <MobileCardContent card={card} />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex items-center justify-center gap-2 pt-1">
        {componentCards.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 rounded-full transition-all duration-200 ${
              i === currentIndex ? "w-4 bg-gray-500" : "w-1.5 bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
