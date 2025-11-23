import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import PitViper from './pages/PitViper'
import PitViperB2B from "./pages/PitViperB2B.tsx";

function App() {
  return (
    <Router>
      <div className="bg-[url('/mik.JPG')] bg-cover bg-center bg-fixed bg-no-repeat min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pitviper" element={<PitViper />} />
          <Route path="/pitviperb2b" element={<PitViperB2B />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
