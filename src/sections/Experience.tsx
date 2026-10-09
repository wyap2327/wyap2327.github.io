  import { experience } from '../data/experience'

  export function Experience() {
    return (
      <section id="experience">
        <h2 className="text-2xl font-semibold">Experience and education</h2>

        <ol className="mt-8 space-y-12">
          {experience.map((entry) => (
            <li key={entry.title} className="grid gap-x-10 gap-y-1 sm:grid-cols-[10rem_1fr]">
              <p className="text-sm text-secondary sm:pt-1">{entry.dates}</p>

              <div>
                <h3 className="font-semibold">{entry.title}</h3>
                <p className="text-secondary">{entry.place}</p>
                <p className="mt-2 text-secondary">{entry.details}</p>

                {entry.modules && (
                  <details className="mt-4">
                    <summary className="cursor-pointer text-sm font-semibold text-accent">
                      Modules and grades
                    </summary>
                    <ul className="mt-3 space-y-1 text-sm">
                      {entry.modules.map((module) => (
                        <li key={module.name} className="flex justify-between gap-4 border-b border-border py-1">
                          <span className="text-secondary">{module.name}</span>
                          <span className="font-semibold">{module.grade}</span>
                        </li>
                      ))}
                    </ul>
                  </details>
                )}
              </div>
            </li>
          ))}
        </ol>
      </section>
    )
  }