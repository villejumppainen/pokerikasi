import { Hand } from 'pokersolver'

const finnishNames = {
  'Straight Flush': 'Värisuora',
  'Four of a Kind': 'Neloset',
  'Full House': 'Täyskäsi',
  'Flush': 'Väri',
  'Straight': 'Suora',
  'Three of a Kind': 'Kolmoset',
  'Two Pair': 'Kaksi paria',
  'Pair': 'Pari',
  'High Card': 'Kikkeri',
}

function toSolverFormat(code) {
  const value = code[0] === '0' ? 'T' : code[0]
  const suit = code[1].toLowerCase()
  return value + suit
}

export function evaluateHand(cards) {
  const hand = Hand.solve(cards.map((card) => toSolverFormat(card.code)))
  if (hand.descr === 'Royal Flush') {
    return 'Kuningasvärisuora'
  }
  return finnishNames[hand.name]
}