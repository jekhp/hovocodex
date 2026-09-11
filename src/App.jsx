import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import CardEditor from './components/card/CardEditor'
import CardViewer from './components/card/CardViewer'
import ToolsPage from './components/ToolsPage'
import MuestraWebViewer from './components/MuestraWeb/MuestraWebViewer'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/herramientas" element={<ToolsPage />} />
        <Route path="/card" element={<CardEditor />} />
        <Route path="/card/:username" element={<CardViewer />} />
        <Route path="/muestra-web" element={<MuestraWebViewer />} />
      </Routes>
    </Router>
  )
}
