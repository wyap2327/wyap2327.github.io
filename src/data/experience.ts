export type Module = {
    name: string
    grade: string
}

export type Entry = {
    title: string
    place: string
    dates: string
    details: string
    modules?: Module[] // optional: only degrees have modules
}

export const experience: Entry[] = [
    {
        title: 'MSc Artificial Intelligence',
        place: 'Heriot-Watt University',
        dates: '2025 – 2026',
        details:
            'Distinction expected (73% average so far). Dissertation on personalising LLM chatbots with retrieval-augmented generation.',
        modules: [
            { name: 'Introduction to Natural Language Processing', grade: '77%' },
            { name: 'Artificial Intelligence and Intelligent Agents', grade: '77%' },
            { name: 'Games Programming', grade: '75%' },
            { name: 'Conversational Agents and Spoken Language Processing', grade: '74%' },
            { name: 'Research Methods and Project Planning', grade: '74%' },
            { name: 'Systems Thinking and Analysis', grade: '71%' },
            { name: 'Individual Project (dissertation)', grade: '70%' },
            { name: 'Data Mining and Machine Learning', grade: '70%' },
            { name: 'Biologically Inspired Computation', grade: '67%' },
        ],
    },
    {
        title: 'Development Operations (placement year)',
        place: 'Compliance365, Wakefield',
        dates: 'Jul 2023 – Jul 2024',
        details:
            'Wrote SQL queries to pull data for client reports and dashboards, built forms from JSON data, and supported debugging and testing in agile sprints using Jira.',
    },
    {
        title: 'BSc (Hons) Computer Science',
        place: 'University of Huddersfield',
        dates: '2021 – 2025',
        details: 'First Class Honours (75.9%), with a sandwich placement year.',
        modules: [
            { name: 'Distributed and Client-Server Systems', grade: '95%' },
            { name: 'Computer Organisation and Architecture', grade: '87%' },
            { name: 'Computing Science and Mathematics', grade: '86%' },
            { name: 'Software Design and Development', grade: '86%' },
            { name: 'Introduction to Artificial Intelligence', grade: '84%' },
            { name: 'Algorithms and Data Structures', grade: '81%' },
            { name: 'Individual Project (dissertation)', grade: '78%' },
            { name: 'Operating Systems', grade: '78%' },
            { name: 'Computer Network Fundamentals', grade: '78%' },
            { name: 'Relational Databases and Web Integration', grade: '73%' },
            { name: 'Large-Scale Software Engineering', grade: '70%' },
            { name: 'Cyber Security', grade: '70%' },
        ],
    },
]