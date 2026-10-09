// The shape every project must have
export type Project = {
  id: string // unique, URL-friendly name, e.g. 'rag-chatbot'
  title: string
  summary: string // short, shown on the projects list
  role: string
  result: string
  resultLabel: string
  tags: string[]
  repo: string
  overview: string[] // paragraphs, shown on the project's own page
  highlights: string[] // bullet points, shown on the project's own page
}

// The list of projects shown on the site
export const projects: Project[] = [
  {
    id: 'rag-chatbot',
    title: 'Personalised RAG chatbot',
    summary:
      'MSc dissertation. Compared five retrieval strategies for personalising an e-commerce support chatbot, scored with RAGAS and a user study.',
    role: 'Solo',
    result: '8.33/10',
    resultLabel: 'user rating, contextual RAG',
    tags: ['Python', 'LangChain', 'ChromaDB', 'RAGAS', 'Streamlit'],
    repo: 'https://github.com/wyap2327/PersonalisedRAGChatbot',
    overview: [
      'Large language models write fluently but can make things up. Retrieval-augmented generation (RAG) grounds their answers in real documents, but most RAG research focuses on general questions rather than personalising support for an individual customer.',
      'For my MSc dissertation, I built a support chatbot for a fictional sportswear store and compared five RAG strategies for personalising its answers, using a shared processing pipeline so the comparison was fair.',
    ],
    highlights: [
      'Built five pipelines: baseline, multi-query, contextual, hybrid (BM25 + dense) and agentic (ReAct)',
      'Shared pipeline with cross-encoder reranking and context compression',
      'Automated evaluation with RAGAS on 20 general and 8 personalised queries',
      'User study with 9 participants rating blind-labelled systems in a Streamlit app',
      'Contextual RAG rated highest by users (8.33/10); agentic RAG had the best faithfulness (0.933) but about 3× the latency',
    ],
  },
  {
    id: 'embodied-ai-safety',
    title: 'Embodied AI safety framework',
    summary:
      'Red team vs blue team benchmark testing whether LLM-controlled household robots can be talked into unsafe actions. Code for a co-authored paper.',
    role: 'Research team of 15',
    result: '87.2%',
    resultLabel: 'attack success (lenient), Crescendo',
    tags: ['Python', 'AI2-THOR', 'Ollama', 'pytest'],
    repo: 'https://github.com/wyap2327/EmbodiedAISafetyFramework',
    overview: [
      'Large language models are increasingly used to control robots. This project asks whether a household robot driven by an LLM can be manipulated into doing something dangerous, such as putting metal in a microwave.',
      'An attacking red agent tries to talk a safety-aware blue agent into unsafe actions inside the AI2-THOR 3D simulator, and a judge checks the real state of the scene afterwards. It is the code behind a research paper I co-authored at Heriot-Watt University.',
      'The headline attack success rate is lenient: an attack counts as successful if the robot carried out at least one dangerous step, even without completing the whole task.',
    ],
    highlights: [
      'I built the multi-turn attack strategies: Crescendo and three BadRobot-derived techniques',
      'Multi-turn attacks were far more effective: Crescendo reached an 87.2% attack success rate, compared with 37.5% for the best single-turn attack',
      'The defensive pipeline reached 81.7% accuracy on 584 SafeAgentBench tasks, with only 2.4% dangerous misses',
      'Built on the AI2-THOR 3D simulator, with a judge that checks the real scene state after each attack',
    ],
  },
  {
    id: 'embodied-ai-red-team',
    title: 'Embodied AI red team',
    summary:
      'My standalone prototype of multi-turn jailbreak attacks (Crescendo, BadRobot and a hybrid) against a robot instructed to refuse unsafe requests.',
    role: 'Solo',
    result: '24%',
    resultLabel: 'of 300 unsafe tasks accepted, Crescendo (strict)',
    tags: ['Python', 'Ollama', 'LLM agents', 'SafeAgentBench'],
    repo: 'https://github.com/wyap2327/EmbodiedAIRedTeam',
    overview: [
      'My own prototype of the attack strategies I later contributed to our research paper. An attacking LLM tries to persuade a robot, which has been told to refuse unsafe requests, into planning a dangerous action.',
      'It runs as text-only conversations without the 3D simulator. A judge applies four fixed rules to decide whether each attack succeeded, avoiding unreliable LLM-based judging.',
      'Unlike the paper, which counted partial progress as success, this prototype only counts an attack as successful if the robot plans the exact unsafe action. That stricter definition, along with a different defending model, is why its success rate is lower than the paper’s.',
    ],
    highlights: [
      'Crescendo: starts with harmless questions and escalates step by step, quoting the robot’s own words back to it',
      'BadRobot: fake maintenance-mode authority, forced structured output, and rephrasing dangerous words into neutral ones',
      'Hybrid: combines Crescendo with the three BadRobot techniques on every message',
      'Crescendo, tested on 300 unsafe SafeAgentBench tasks, manipulated the robot into an unsafe plan 24% of the time, averaging 24 turns per conversation',
    ],
  },
  {
    id: 'movie-recommender',
    title: 'Movie recommendation system',
    summary:
      'Hybrid recommender combining content-based and collaborative filtering in a neural network, plus a CNN that predicts movie genres from posters.',
    role: 'Team of 5',
    result: '0.10 → 0.28',
    resultLabel: 'R² vs the best baseline',
    tags: ['Python', 'PyTorch', 'TensorFlow', 'scikit-learn'],
    repo: 'https://github.com/wyap2327/MovieRecommendationSystem',
    overview: [
      'Recommenders struggle with new users and with films that have little data. This group project combined user ratings with movie information to make better predictions, and tested whether a film’s poster can reveal its genres.',
      'My part was the poster classifier: a convolutional neural network (CNN) that predicts a movie’s genres from its poster image.',
    ],
    highlights: [
      'The team’s hybrid neural network improved R² from 0.10 (best baseline) to 0.28, and cut the average rating error from 1.00 to 0.89 stars',
      'I built a multi-label CNN in TensorFlow on about 7,200 posters across 24 genres',
      'Data augmentation and batch normalisation improved my CNN’s accuracy from 25.6% to 36.1%',
      'Found a strong genre imbalance (Drama and Comedy were over half the data), which explained weak results on rare genres',
    ],
  },
  {
    id: 'tennis-booking-app',
    title: 'Tennis booking app',
    summary:
      'Full-stack mobile app built for a tennis coach, with sign-up and login, lesson bookings, real-time messaging and push notifications.',
    role: 'Solo',
    result: '~20',
    resultLabel: 'clients',
    tags: ['React Native', 'TypeScript', 'Expo', 'Supabase'],
    repo: 'https://github.com/wyap2327/TennisBookingApp',
    overview: [
      'A mobile app I built for a real tennis coach and their clients, taking it from gathering requirements through to design, development and testing.',
      'Clients can book lessons, message the coach in real time, and receive notifications when bookings change.',
    ],
    highlights: [
      'Built with React Native, Expo and TypeScript, using file-based routing',
      'Supabase backend: authentication, PostgreSQL database, real-time messaging and edge functions',
      'Push notifications triggered automatically by database changes',
      'Database changes managed through SQL migrations, with row-level security',
    ],
  },
  {
    id: 'lunar-rover-planner',
    title: 'Lunar rover mission planner',
    summary:
      'Landers, rovers and astronauts modelled in PDDL, with mission plans generated automatically by the Fast Downward planner.',
    role: 'Pair project',
    result: '3/3',
    resultLabel: 'missions solved',
    tags: ['PDDL', 'Automated planning', 'Python'],
    repo: 'https://github.com/wyap2327/PDDLLunarRoverPlanner',
    overview: [
      'A simulated Moon mission in which rovers must deploy from landers, drive between waypoints, and collect images, scans and samples to send back.',
      'Given a map and a set of goals, an automated planner works out the full sequence of actions.',
    ],
    highlights: [
      'Two domains: a basic one, and an extended one where astronauts coordinate from inside the landers',
      'Rovers can carry only one item at a time, which forces a collect-then-deliver cycle',
      'In the extended domain, astronauts must be in the docking bay to deploy rovers and in the control room to receive data',
      'Plans of 11, 24 and 26 actions for the three missions',
    ],
  },
  {
    id: 'sudoku-solver',
    title: 'Sudoku CSP solver',
    summary:
      'Sudoku modelled as a constraint satisfaction problem and solved with backtracking and the MRV heuristic, with a graphical interface.',
    role: 'Pair project',
    result: '13 s',
    resultLabel: "to solve the 'world's hardest' puzzle",
    tags: ['Python', 'CSP', 'Tkinter'],
    repo: 'https://github.com/wyap2327/SudokuSolver',
    overview: [
      'Sudoku treated as a constraint satisfaction problem (CSP): 81 cells, each with possible values 1 to 9, and rules that stop any number repeating in a row, column or box.',
      'The solver uses backtracking search, always filling the cell with the fewest legal options first (the MRV heuristic).',
    ],
    highlights: [
      'Solves a classic puzzle in 52 steps (0.05 s) and the "world’s hardest" puzzle in about 13 seconds',
      'MRV heuristic: tackling the most constrained cell first prunes the search and exposes dead ends early',
      'Tkinter GUI for entering puzzles, plus a command-line mode that loads puzzles from text files',
      'Reports the number of steps and time taken for each solve',
    ],
  },
]
