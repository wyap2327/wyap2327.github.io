import { Link } from 'react-router'
import type { Project } from '../data/projects'

export function ProjectRow({ project }: { project: Project }) {
return (
    <li className="border-t border-border">
    <Link
        to={`/projects/${project.id}`}
        className="block py-5 text-xl font-semibold text-primary no-underline hover:text-accent"
    >
        {project.title}
    </Link>
    </li>
)
}