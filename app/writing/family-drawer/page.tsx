import { CodeBlock } from "@/lib/components/code-block"
import { initialCode } from "./article-code"

export default function FamilyDrawer() {
  return (
    <div className="flex flex-col gap-5">
      <div className="mb-2">
        <h1 className="w-fit font-medium">Recreating the Family Drawer</h1>
        <p className="text-[15px] text-gray-500/60">August 2025</p>
      </div>
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
      <CodeBlock
        lang="javascript"
        className="border-shadow my-6 max-h-48 overflow-y-auto rounded-xl p-4"
      >
        {initialCode}
      </CodeBlock>
    </div>
  )
}
