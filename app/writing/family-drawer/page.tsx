import { ArticleHeading } from "@/components/ArticleHeading"
import { InlineDefinition } from "@/components/InlineDefinition"
import { CodeBlock } from "@/lib/components/code-block"
import { initialCode } from "./article-code"
import { CodePreviewSwitch } from "./components/codePreviewSwitch"
import { InitialDrawer } from "./components/initialDrawer"

export default function FamilyDrawer() {
  return (
    <div className="flex flex-col gap-5">
      <ArticleHeading title="Recreating the Family Drawer" date="August 2025" />
      <p className="mb-2 max-w-2xl text-[#424242]">
        It feels like whenever the topic of animations (whether that is web or otherwise) comes up,
        the{" "}
        <a href="https://family.co/" target="_blank" className="article-link">
          Family App
        </a>{" "}
        is front and center of all the examples. And for good reason.
      </p>
      <p className="max-w-2xl text-[#424242]">
        It represents incredible attention to detail and a deep understanding of animation
        principles. And for this very reason, when I originally started learning motion design, I
        had set aspects of this app as my goal to recreate.
      </p>
      <p className="max-w-2xl text-[#424242]">
        Naturally, the app is filled with lots of great interactions, but here, I will focus on just
        one of them, a wallet options drawer:
      </p>
      <div className="mx-auto my-4 flex max-w-2xl gap-6">
        <video
          autoPlay
          muted
          playsInline
          loop
          preload="metadata"
          className="border-shadow h-auto w-1/2 rounded-[9px] [corner-shape:squircle] supports-[corner-shape:squircle]:rounded-2xl"
        >
          <source src="/videos/articles/family-drawer.mp4" type="video/mp4" />
        </video>
        <p className="hidden text-[16px] text-gray-500/60 md:block">
          The drawer itself, straight from the app (2025). Choosing the "Remove Wallet" option
          closes the drawer and opens another confirmation dialog, so I did not include that in the
          video.
        </p>
      </div>
      <p className="max-w-2xl text-[#424242]">
        The most important aspect of this whole component is the motion, no doubt about that, so
        with my first attempt, I ignored the icons, colours and typography and ended up with this:
      </p>
      <CodePreviewSwitch
        code={initialCode}
        previewClassName="flex flex-col items-center justify-end pb-4"
      >
        <InitialDrawer />
      </CodePreviewSwitch>
      <p className="max-w-2xl text-[#424242]">
        Now, let's break down each part of this initial{" "}
        <InlineDefinition
          title="What is a component?"
          explanation="A component is a self-contained piece of code that performs a specific function or displays a specific UI element. In this case, the component is the entire drawer, and later on, will have other components inside it. For this component, it holds the HTML structure, styling, and the logic."
          readMoreURL="https://react.dev/learn/your-first-component"
        >
          component
        </InlineDefinition>
        , starting with all of those imports, and why they are needed.
      </p>
      <CodeBlock lang="tsx" className="border-shadow max-w-2xl rounded-[9.5px] p-3">{`"use client"

import { AnimatePresence, motion } from "motion/react"
import { useMemo, useState } from "react"
import useMeasure from "react-use-measure"`}</CodeBlock>
      <p className="max-w-2xl text-[#424242]">
        <span className="code-inline">motion/react</span> is the library that provides the motion
        primitives, such as <span className="code-inline">AnimatePresence</span> and{" "}
        <span className="code-inline">motion.div</span>
      </p>
    </div>
  )
}
