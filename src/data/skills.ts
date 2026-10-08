export type SkillGroup = {
    name: string
    skills: string[]
  }

export const skillGroups: SkillGroup[] = [
{
    name: 'Languages',
    skills: ['Python', 'SQL', 'TypeScript', 'JavaScript', 'C', 'C#'],
},
{
    name: 'AI and machine learning',
    skills: ['PyTorch', 'TensorFlow', 'scikit-learn', 'Hugging Face', 'LangChain', 'RAG', 'RAGAS', 'Ollama'],
},
{
    name: 'Data and web',
    skills: ['pandas', 'NumPy', 'PostgreSQL', 'Supabase', 'ChromaDB', 'React', 'React Native', 'Tailwind CSS', 'Streamlit'],
},
{
    name: 'Tools',
    skills: ['Git', 'GitHub', 'Linux / WSL', 'Jira', 'Agile / Scrum', 'pytest'],
},
]