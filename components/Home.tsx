import { AboutDesktop, AboutMobile } from "./About"
import { ProjectsDesktop, ProjectsMobile } from "./Projects"
export const HomeDesktop = () => {
  return (
    <div>
      <main className="mx-auto mb-24 flex w-[565px] flex-col gap-12 pt-26">
        <AboutDesktop />
        <ProjectsDesktop />
      </main>
      <div className="bottom-scroll-mask pointer-events-none" aria-hidden="true" />
      <div className="top-scroll-mask pointer-events-none" aria-hidden="true" />
    </div>
  )
}

export const HomeMobile = () => {
  return <div>HomeMobile</div>
}
