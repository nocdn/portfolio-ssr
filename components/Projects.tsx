import { projects } from "@/data/projects"
import { ProjectDesktop } from "./Project"
import { SectionDesktop, SectionMobile } from "./Section"

export const ProjectsDesktop = () => {
  return (
    <SectionDesktop
      title="PROJECTS"
      className="motion-blur-in-[2px] motion-opacity-in-0 motion-translate-y-in-[2.5%] motion-delay-100"
    >
      <div className="group flex flex-col">
        {projects.map((project, index) => (
          <ProjectDesktop key={index} {...project} />
        ))}
      </div>
    </SectionDesktop>
  )
}

export const ProjectsMobile = () => {
  return <div>ProjectsMobile</div>
}
