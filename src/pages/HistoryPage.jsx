import { useState } from 'react'
import { Button, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router'
import PlayingCard from '../components/PlayingCard'
import { loadHistory, clearHistory } from '../utils/history'

function HistoryPage() {
  const [history, setHistory] = useState(loadHistory())

  function handleClear() {
    if (window.confirm('Haluatko varmasti tyhjentää historian?')) {
      clearHistory()
      setHistory([])
    }
  }

  if (history.length === 0) {
    return (
      <>
        <h1>Historia</h1>
        <p>Et ole vielä jakanut yhtään kättä.</p>
        <Button as={Link} to="/">Jaa ensimmäinen käsi</Button>
      </>
    )
  }

  return (
    <>
      <h1>Historia</h1>
      <p>Viimeisimmät {history.length} kättäsi.</p>

      <ListGroup className="mb-3">
        {history.map((entry) => (
          <ListGroup.Item key={entry.id}>
            <div className="d-flex justify-content-between flex-wrap mb-2">
              <strong>{entry.handName}</strong>
              <small className="text-muted">
                {new Date(entry.date).toLocaleString('fi-FI')}
              </small>
            </div>
            <div className="card-row history-cards">
              {entry.cards.map((card) => (
                <PlayingCard key={card.code} card={card} />
              ))}
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>

      <Button variant="outline-danger" onClick={handleClear}>
        Tyhjennä historia
      </Button>
    </>
  )
}

export default HistoryPage