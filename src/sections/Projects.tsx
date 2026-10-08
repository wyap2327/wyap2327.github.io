import { ProjectRow } from '../components/ProjectRow'
import { projects } from '../data/projects'

export function Projects() {
  return (
    <section id="projects">
      <h2 className="text-2xl font-semibold">Projects</h2>
      <p className="mt-2 text-secondary">Select a project for more info</p>

      <ul className="mt-8 border-b border-border">
        {projects.map((project) => (
          <ProjectRow key={project.id} project={project} />
        ))}
      </ul>
    </section>
  )
}