const STORAGE_KEY = 'pokerHistory'

export function loadHistory() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []
}

export function saveHand(cards, handName) {
  const newEntry = {
    id: Date.now(),
    date: new Date().toISOString(),
    cards: cards,
    handName: handName,
  }
  // Uusin ensin, säilytetään 20 viimeisintä
  const history = [newEntry, ...loadHistory()].slice(0, 20)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(history))
}

export function clearHistory() {
  localStorage.removeItem(STORAGE_KEY)
}