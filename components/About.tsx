import { Suspense } from "react"
import { SectionDesktop, SectionMobile } from "./Section"
import { TimeZoneName } from "./TimeZoneName"
import { TwitterHover } from "./TwitterHover"

export const AboutDesktop = () => {
  return (
    <SectionDesktop
      title="ABOUT"
      className="motion-blur-in-[2px] motion-opacity-in-0 motion-translate-y-in-[7%] group"
    >
      <div>
        Hey there, I'm{" "}
        <Suspense fallback={<span className="text-blue-600">Bartek</span>}>
          <TimeZoneName />
        </Suspense>
        . I am a software engineer based in the UK, studying computer science at the University of
        York. I'm currently exploring typography, web animations and crafting interactions.
      </div>
      <div className="mt-4">
        You can see some more of my work on{" "}
        <Suspense
          fallback={
            <a
              href="https://x.com/nocdns"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[18.5px] text-blue-600"
            >
              Twitter
            </a>
          }
        >
          <TwitterHover />
        </Suspense>
        , reach me via <br />
        <a href="mailto:contact@bartoszbak.org" className="text-blue-600">
          email
        </a>{" "}
        or see my other code on{" "}
        <a
          href="https://github.com/nocdn"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg text-blue-600"
        >
          GitHub
        </a>
        .
      </div>
    </SectionDesktop>
  )
}

export const AboutMobile = () => {
  return (
    <SectionMobile id="about" title="ABOUT">
      <div className="leading-[1.6]">
        Hello, I'm <span className="text-blue-600">Bartek</span>, a software engineer based in the
        UK, studying <span className="text-blue-600">computer science</span> at the University of
        York. I'm currently exploring typography, web animations and crafting interactions.
      </div>
    </SectionMobile>
  )
}
