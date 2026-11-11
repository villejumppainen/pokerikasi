function PlayingCard({ card, delay }) {
  return (
    <img
      src={card.image}
      alt={`${card.value} of ${card.suit}`}
      className="playing-card"
      style={{ animationDelay: `${delay}s` }}
    />
  )
}

export default PlayingCard