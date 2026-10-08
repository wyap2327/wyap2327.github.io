import { experience } from '../data/experience'

export function Experience() {
return (
    <section id="experience">
    <h2 className="text-2xl font-semibold">Experience and education</h2>

    <ol className="mt-8 space-y-8">
        {experience.map((entry) => (
        <li key={entry.title} className="grid gap-x-10 gap-y-1 sm:grid-cols-[10rem_1fr]">
            <p className="text-sm text-secondary sm:pt-1">{entry.dates}</p>
            <div>
            <h3 className="font-semibold">{entry.title}</h3>
            <p className="text-secondary">{entry.place}</p>
            <p className="mt-2 text-secondary">{entry.details}</p>
            </div>
        </li>
        ))}
    </ol>
    </section>
    )
}