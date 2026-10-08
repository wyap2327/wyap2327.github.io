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
    resultLabel: 'attack success, multi-turn',
    tags: ['Python', 'AI2-THOR', 'Ollama', 'pytest'],
    repo: 'https://github.com/wyap2327/EmbodiedAISafetyFramework',
    overview: [
      'Large language models are increasingly used to control robots. This project asks whether a household robot driven by an LLM can be manipulated into doing something dangerous, such as putting metal in a microwave.',
      'An attacking red agent tries to talk a safety-aware blue agent into unsafe actions inside the AI2-THOR 3D simulator, and a judge checks the real state of the scene afterwards. It is the code behind a research paper I co-authored at Heriot-Watt University.',
    ],
    highlights: [
      'I built the multi-turn attack strategies: Crescendo and three BadRobot-derived techniques',
      'Multi-turn attacks were far more effective: Crescendo reached an 87.2% attack success rate, compared with 37.5% for the best single-turn attack',
      'The defensive pipeline reached 81.7% accuracy on 584 SafeAgentBench tasks, with only 2.4% dangerous misses',
      'Fixed a bug that stopped the safety rules loading, and kept all 27 unit tests passing',
    ],
  },
  {
    id: 'embodied-ai-red-team',
    title: 'Embodied AI red team',
    summary:
      'My multi-turn jailbreak strategies (Crescendo, BadRobot and a hybrid) tested against a safety-instructed robot on 300 unsafe tasks.',
    role: 'Solo',
    result: '24%',
    resultLabel: 'unsafe tasks the robot accepted',
    tags: ['Python', 'Ollama', 'LLM agents', 'SafeAgentBench'],
    repo: 'https://github.com/wyap2327/EmbodiedAIRedTeam',
    overview: [
      'My own prototype of the attack strategies I contributed to our research paper. An attacking LLM tries to persuade a robot, which has been told to refuse unsafe requests, into planning a dangerous action.',
      'A judge applies four fixed rules to decide whether each attack succeeded, avoiding unreliable LLM-based judging.',
    ],
    highlights: [
      'Crescendo: starts with harmless questions and escalates step by step, quoting the robot’s own words back to it',
      'BadRobot: fake maintenance-mode authority, forced structured output, and rephrasing dangerous words into neutral ones',
      'Hybrid: combines Crescendo with the three BadRobot techniques on every message',
      'Tested on 300 unsafe SafeAgentBench tasks: the robot was manipulated into an unsafe plan 24% of the time',
    ],
  },
  {
    id: 'movie-recommender',
    title: 'Movie recommendation system',
    summary:
      'Hybrid recommender combining content-based and collaborative filtering in a neural network, plus a CNN that predicts movie genres from posters.',
    role: 'Team of 5',
    result: '2.7×',
    resultLabel: 'R² of the best baseline',
    tags: ['Python', 'PyTorch', 'TensorFlow', 'scikit-learn'],
    repo: 'https://github.com/wyap2327/MovieRecommendationSystem',
    overview: [
      'Recommenders struggle with new users and with films that have little data. This group project combined user ratings with movie information to make better predictions, and tested whether a film’s poster can reveal its genres.',
      'My part was the poster classifier: a convolutional neural network (CNN) that predicts a movie’s genres from its poster image.',
    ],
    highlights: [
      'Team’s hybrid neural network reached an R² of 0.28, about 2.7× the best baseline model (0.10)',
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
      'All three missions solved by Fast Downward, with plans of 11, 24 and 26 actions',
      'Found and fixed modelling bugs, such as a lander that could land twice',
    ],
  },
  {
    id: 'sudoku-solver',
    title: 'Sudoku CSP solver',
    summary:
      'Sudoku modelled as a constraint satisfaction problem and solved with backtracking and the MRV heuristic, with a GUI and automated tests.',
    role: 'Pair project',
    result: '13 s',
    resultLabel: "to solve the 'world's hardest' puzzle",
    tags: ['Python', 'CSP', 'Tkinter', 'pytest'],
    repo: 'https://github.com/wyap2327/SudokuSolver',
    overview: [
      'Sudoku treated as a constraint satisfaction problem (CSP): 81 cells, each with possible values 1 to 9, and rules that stop any number repeating in a row, column or box.',
      'The solver uses backtracking search, always filling the cell with the fewest legal options first (the MRV heuristic).',
    ],
    highlights: [
      'Solves a classic puzzle in 52 steps (0.05 s) and the "world’s hardest" puzzle in about 13 seconds',
      'Rejects invalid puzzles before searching',
      'Tkinter GUI and a command-line mode',
      'Automated tests with pytest',
    ],
  },
]