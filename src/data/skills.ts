export type SkillGroup = {
    name: string
    skills: string[]
}

export const skillGroups: SkillGroup[] = [
    {
        name: 'Languages',
        skills: ['Python', 'SQL', 'TypeScript', 'JavaScript', 'HTML/CSS', 'C#'],
    },
    {
        name: 'AI and machine learning',
        skills: [
            'LLMs',
            'RAG',
            'LangChain',
            'LLM agents',
            'PyTorch',
            'TensorFlow',
            'scikit-learn',
            'Hugging Face',
            'Ollama',
            'RAGAS evaluation',
        ],
    },
    {
        name: 'Data',
        skills: [
            'pandas',
            'NumPy',
            'Excel',
            'PostgreSQL',
            'MySQL',
            'ChromaDB',
            'Data cleaning',
            'Exploratory analysis',
            'Data visualisation',
        ],
    },
    {
        name: 'Web and mobile',
        skills: [
            'React',
            'React Native',
            'React Router',
            'Tailwind CSS',
            'Node.js',
            'Supabase',
            'REST APIs',
            'Streamlit',
        ],
    },
    {
        name: 'Tools and practices',
        skills: [
            'Git / GitHub',
            'GitHub Actions (CI/CD)',
            'pytest',
            'Linux / WSL',
            'Jira',
            'Agile / Scrum',
        ],
    },
    {
        name: 'Foundations',
        skills: [
            'Algorithms and data structures',
            'Database design',
            'Distributed systems',
            'Software engineering',
        ],
    },
]