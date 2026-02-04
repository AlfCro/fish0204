import { useState } from 'react'
import './App.css'

interface Fish {
  id: number
  name: string
  emoji: string
  description: string
}

const fishData: Fish[] = [
  { id: 1, name: 'Clownfish', emoji: '🐠', description: 'A colorful reef fish known from Finding Nemo!' },
  { id: 2, name: 'Blowfish', emoji: '🐡', description: 'Can puff up to twice its size when scared!' },
  { id: 3, name: 'Tropical Fish', emoji: '🐟', description: 'Beautiful fish found in warm ocean waters.' },
  { id: 4, name: 'Shark', emoji: '🦈', description: 'The apex predator of the ocean!' },
  { id: 5, name: 'Whale', emoji: '🐋', description: 'The largest animal on Earth!' },
  { id: 6, name: 'Dolphin', emoji: '🐬', description: 'Intelligent and playful marine mammals.' },
  { id: 7, name: 'Octopus', emoji: '🐙', description: 'Has three hearts and blue blood!' },
  { id: 8, name: 'Jellyfish', emoji: '🪼', description: 'No brain, no heart, but still alive!' },
]

function App() {
  const [selectedFish, setSelectedFish] = useState<Fish | null>(null)
  const [bubbles, setBubbles] = useState<number[]>([])

  const createBubble = () => {
    const id = Date.now()
    setBubbles(prev => [...prev, id])
    setTimeout(() => {
      setBubbles(prev => prev.filter(b => b !== id))
    }, 3000)
  }

  return (
    <div className="ocean" onClick={createBubble}>
      <header className="header">
        <h1>🐟 Fish World 🐟</h1>
        <p>Click anywhere to create bubbles!</p>
      </header>

      <main className="fish-container">
        {fishData.map(fish => (
          <div
            key={fish.id}
            className={`fish-card ${selectedFish?.id === fish.id ? 'selected' : ''}`}
            onClick={(e) => {
              e.stopPropagation()
              setSelectedFish(fish)
            }}
          >
            <span className="fish-emoji">{fish.emoji}</span>
            <h2>{fish.name}</h2>
          </div>
        ))}
      </main>

      {selectedFish && (
        <div className="fish-details" onClick={(e) => e.stopPropagation()}>
          <span className="close-btn" onClick={() => setSelectedFish(null)}>&times;</span>
          <span className="detail-emoji">{selectedFish.emoji}</span>
          <h2>{selectedFish.name}</h2>
          <p>{selectedFish.description}</p>
        </div>
      )}

      {bubbles.map(id => (
        <div
          key={id}
          className="bubble"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${2 + Math.random() * 2}s`
          }}
        />
      ))}

      <div className="seaweed-container">
        <div className="seaweed">🌿</div>
        <div className="seaweed">🌿</div>
        <div className="seaweed">🌿</div>
        <div className="seaweed">🌿</div>
        <div className="seaweed">🌿</div>
      </div>
    </div>
  )
}

export default App
