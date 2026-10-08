import { HashRouter, Route, Routes } from 'react-router'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { ProjectDetail } from './pages/ProjectDetail'
import { Experience } from './sections/Experience'
import { Projects } from './sections/Projects'
import { Skills } from './sections/Skills'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}