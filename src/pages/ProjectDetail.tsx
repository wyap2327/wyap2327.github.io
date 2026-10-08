import { Link, useParams } from 'react-router'
import { projects } from '../data/projects'

export function ProjectDetail() {
const { id } = useParams()
const project = projects.find((p) => p.id === id)

if (!project) {
    return (
    <section>
        <h1 className="text-3xl font-bold">Project not found</h1>
        <p className="mt-4 text-secondary">
        This project doesn't exist. <Link to="/projects">See all projects</Link>
        </p>
    </section>
    )
}

return (
    <article>
    <Link to="/projects" className="text-sm">
        All projects
    </Link>

    <h1 className="mt-6 text-4xl font-bold tracking-tight">{project.title}</h1>
    <p className="mt-4 max-w-2xl text-xl text-secondary">{project.summary}</p>

    <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div>
        <p className="text-4xl font-bold text-accent">{project.result}</p>
        <p className="text-sm text-secondary">{project.resultLabel}</p>
        </div>
        <dl className="space-y-2 text-sm">
        <div>
            <dt className="font-semibold">Role</dt>
            <dd className="text-secondary">{project.role}</dd>
        </div>
        <div>
            <dt className="font-semibold">Built with</dt>
            <dd className="text-secondary">{project.tags.join(', ')}</dd>
        </div>
        </dl>
    </div>

    <div className="mt-10 max-w-2xl space-y-4">
        {project.overview.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
        ))}
    </div>

    <h2 className="mt-12 text-2xl font-semibold">Highlights</h2>
    <ul className="mt-4 max-w-2xl list-disc space-y-2 pl-5 text-secondary">
        {project.highlights.map((point) => (
        <li key={point}>{point}</li>
        ))}
    </ul>

    <p className="mt-12">
        <a href={project.repo}>View the code on GitHub</a>
    </p>
    </article>
)
}