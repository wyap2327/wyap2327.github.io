import { skillGroups } from '../data/skills'

export function Skills() {
return (
    <section id="skills">
    <h2 className="text-2xl font-semibold">Skills</h2>

    <dl className="mt-8 grid gap-6 sm:grid-cols-[12rem_1fr]">
        {skillGroups.map((group) => (
        <div key={group.name} className="contents">
            <dt className="font-semibold">{group.name}</dt>
            <dd className="text-secondary">{group.skills.join(', ')}</dd>
        </div>
        ))}
    </dl>
    </section>
    )
}