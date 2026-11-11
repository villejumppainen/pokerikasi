import { useState } from 'react'
import { Button, Spinner, Alert } from 'react-bootstrap'
import PlayingCard from '../components/PlayingCard'

// Ladataan kaikki korttikuvat valmiiksi, jotta ne voidaan näyttää järjestyksessä
function preloadImages(cards) {
  return Promise.all(
    cards.map(
      (card) =>
        new Promise((resolve) => {
          const img = new Image()
          img.onload = resolve
          img.onerror = resolve
          img.src = card.image
        }),
    ),
  )
}

function PlayPage() {
  const [cards, setCards] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function dealCards() {
    setLoading(true)
    setError(null)
    setCards([])
    try {
      const response = await fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=7')
      if (!response.ok) {
        throw new Error('Palvelin ei vastannut')
      }
      const data = await response.json()
      await preloadImages(data.cards)
      setCards(data.cards)
    } catch {
      setError('Korttien haku epäonnistui. Yritä uudelleen.')
    } finally {
      setLoading(false)
    }
  }

  const myCards = cards.slice(0, 2)
  const tableCards = cards.slice(2)

  return (
    <>
      <h1>Pelaa</h1>

      <Button size="lg" onClick={dealCards} disabled={loading} className="my-3">
        {loading ? <Spinner animation="border" size="sm" /> : 'Jaa kortit'}
      </Button>

      {error && <Alert variant="danger">{error}</Alert>}

      {cards.length > 0 && (
        <>
          <h2 className="h5 mt-3">Sinun korttisi</h2>
          <div className="card-row mb-4">
            {myCards.map((card, index) => (
              <PlayingCard key={card.code} card={card} delay={index * 0.2} />
            ))}
          </div>

          <h2 className="h5">Pöytä</h2>
          <div className="card-row">
            {tableCards.map((card, index) => (
              <PlayingCard key={card.code} card={card} delay={(index + 2) * 0.2} />
            ))}
          </div>
        </>
      )}
    </>
  )
}

export default PlayPage