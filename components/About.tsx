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
    </SectionDesktop>
  )
}

export const AboutMobile = () => {
  return <div>AboutMobile</div>
}
