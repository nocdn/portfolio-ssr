import { SectionDesktop, SectionMobile } from "./Section"
import { TimeZoneName } from "./TimeZoneName"

export const AboutDesktop = () => {
  return (
    <SectionDesktop
      title="ABOUT"
      className="motion-blur-in-[2px] motion-opacity-in-0 motion-translate-y-in-[7%] group"
    >
      <div>
        Hey there, I'm <TimeZoneName />. I am a software engineer based in the UK, studying computer
        science at the University of York. I'm currently exploring typography, web animations and
        crafting interactions.
      </div>
      <div className="mt-4">
        You can see some more of my work on{" "}
        <a
          href="https://x.com/nocdns"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[18.5px] group-hover:text-blue-600"
        >
          Twitter
        </a>
        , reach me via <br />
        <a href="mailto:contact@bartoszbak.org" className="group-hover:text-blue-600">
          email
        </a>{" "}
        or see my other code on{" "}
        <a
          href="https://github.com/nocdn"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg group-hover:text-blue-600"
        >
          GitHub
        </a>
        .
      </div>
    </SectionDesktop>
  )
}

export const AboutMobile = () => {
  return <div>AboutMobile</div>
}
