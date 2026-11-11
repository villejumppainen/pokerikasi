import { Accordion } from 'react-bootstrap'
import PlayingCard from '../components/PlayingCard'


function makeCards(codes) {
  return codes.map((code) => ({
    code: code,
    value: code[0],
    suit: code[1],
    image: `https://deckofcardsapi.com/static/img/${code}.png`,
  }))
}

const hands = [
  {
    name: 'Kuningasvärisuora',
    description: 'Ässä, kuningas, kuningatar, jätkä ja kymppi samaa maata. Paras mahdollinen käsi.',
    cards: makeCards(['AS', 'KS', 'QS', 'JS', '0S']),
  },
  {
    name: 'Värisuora',
    description: 'Viisi peräkkäistä korttia samaa maata.',
    cards: makeCards(['9H', '8H', '7H', '6H', '5H']),
  },
  {
    name: 'Neloset',
    description: 'Neljä samanarvoista korttia.',
    cards: makeCards(['9C', '9D', '9H', '9S', 'KD']),
  },
  {
    name: 'Täyskäsi',
    description: 'Kolmoset ja pari samassa kädessä.',
    cards: makeCards(['KH', 'KD', 'KS', '4C', '4H']),
  },
  {
    name: 'Väri',
    description: 'Viisi korttia samaa maata, ei tarvitse olla järjestyksessä.',
    cards: makeCards(['AD', 'JD', '8D', '5D', '2D']),
  },
  {
    name: 'Suora',
    description: 'Viisi peräkkäistä korttia, maat voivat olla mitä tahansa.',
    cards: makeCards(['9C', '8D', '7S', '6H', '5C']),
  },
  {
    name: 'Kolmoset',
    description: 'Kolme samanarvoista korttia.',
    cards: makeCards(['7C', '7D', '7S', 'KH', '2C']),
  },
  {
    name: 'Kaksi paria',
    description: 'Kaksi eri paria.',
    cards: makeCards(['JH', 'JC', '4S', '4D', 'AC']),
  },
  {
    name: 'Pari',
    description: 'Kaksi samanarvoista korttia.',
    cards: makeCards(['QH', 'QS', '9D', '6C', '3H']),
  },
  {
    name: 'Kikkeri',
    description: 'Ei mitään yllä olevista. Suurin kortti ratkaisee.',
    cards: makeCards(['AH', 'JD', '8C', '5S', '3D']),
  },
]

function RankingsPage() {
  return (
    <>
      <h1>Käsien arvojärjestys</h1>
      <p>Parhaasta huonoimpaan. Klikkaa kättä nähdäksesi esimerkin.</p>

      <Accordion defaultActiveKey="0">
        {hands.map((hand, index) => (
          <Accordion.Item eventKey={String(index)} key={hand.name}>
            <Accordion.Header>
              {index + 1}. {hand.name}
            </Accordion.Header>
            <Accordion.Body>
              <p>{hand.description}</p>
              <div className="card-row">
                {hand.cards.map((card) => (
                  <PlayingCard key={card.code} card={card} />
                ))}
              </div>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </>
  )
}

export default RankingsPage