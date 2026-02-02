"use client"
import { ArrowRightIcon, ArrowUpRight } from "lucide-react"
import { useState } from "react"
import { ComponentCarousel } from "./ComponentCarousel"
import { SectionDesktop, SectionMobile } from "./Section"

export const ComponentsDesktop = () => {
  const [componentCardTick, setComponentCardTick] = useState(0)

  return (
    <SectionDesktop
      title="COMPONENTS"
      className="motion-blur-in-[2px] motion-opacity-in-0 motion-translate-y-in-[3.75%] motion-delay-200"
      subtitleChildren={
        <span className="flex items-center gap-1">
          SHADCN REGISTRY{" "}
          <ArrowUpRight
            size={16}
            strokeWidth={2.75}
            className="mr-0.5 text-blue-700 opacity-40 transition-all duration-200 group-hover:opacity-60"
          />
        </span>
      }
      subtitleURL="https://ui.bartoszbak.org/"
      secondaryChildren={
        <div className="mr-2 flex items-center gap-2">
          <button onMouseDown={() => setComponentCardTick((prev) => prev + 1)}>
            <ArrowRightIcon className="cursor-pointer opacity-100" size={18} />
          </button>
        </div>
      }
    >
      <ComponentCarousel cardTick={componentCardTick} />
    </SectionDesktop>
  )
}

export const ComponentsMobile = () => {
  return <div>ComponentsMobile</div>
}
