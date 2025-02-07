import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="relative flex flex-col items-center justify-center min-h-screen bg-pink-100 overflow-hidden">
      {/* Falling Petals */}
      {[...Array(10)].map((_, i) => (
        <img
          key={i}
          src="http://www.pngall.com/wp-content/uploads/5/Red-Rose-Petals-PNG-High-Quality-Image.png"
          alt="Rose Petal"
          className="petal "
          style={{ width: `${Math.random() * 30 + 20}px` }} // Randomize petal size
        />
      ))}

      {/* Big Rose in the Center */}
      <div className="relative z-10 flex flex-col items-center">
        <img 
          src="/red-rose-with-banner-vector-illustration.png"
          alt="Big Rose"
          className="w-96 h-96 animate-pulse" // Increased size
        />
        <h1 className="text-4xl font-bold text-pink-700 mt-4">Happy Rose Day Ammu!</h1>
        <p className="text-lg text-pink-600 mt-2">Wishing you a day filled with love and happiness.</p>
      </div>
    </div>
    </>
  )
}

export default App
