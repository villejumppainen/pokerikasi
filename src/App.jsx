import { Routes, Route } from 'react-router'
import { Container } from 'react-bootstrap'
import NavBar from './components/NavBar'
import PlayPage from './pages/PlayPage'
import RankingsPage from './pages/RankingsPage'
import HistoryPage from './pages/HistoryPage'

function App() {
  return (
    <>
      <NavBar />
      <Container className="py-4">
        <Routes>
          <Route path="/" element={<PlayPage />} />
          <Route path="/kadet" element={<RankingsPage />} />
          <Route path="/historia" element={<HistoryPage />} />
        </Routes>
      </Container>
    </>
  )
}

export default App