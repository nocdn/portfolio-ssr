import { projects } from "@/data/projects"
import { ProjectDesktop, ProjectMobile } from "./Project"
import { SectionDesktop, SectionMobile } from "./Section"

export const ProjectsDesktop = () => {
  return (
    <SectionDesktop
      title="PROJECTS"
      className="motion-blur-in-[2px] motion-opacity-in-0 motion-translate-y-in-[2.5%] motion-delay-100"
    >
      <div className="flex flex-col gap-1">
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
