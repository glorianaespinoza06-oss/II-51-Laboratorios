import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import niño from './assets/niño.png'
import adulto from './assets/adulto.png'
import './App.css'
import Likebutton from './assets/LikeButton'

function App() {
  // Estado para el contador
  // Uso del hook useState
  const [age, setAge] = useState(0)
  const [isAdult, setIsAdult] = useState(false)
  useEffect(() => {
    if (age >= 18) {
      setIsAdult(true)
    } else {
      setIsAdult(false)
    }
  }, [age])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setAge((age) => age + 1)}>
          count is {age}
        </button>
        <Likebutton></Likebutton>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div className='avatars'>
          <img src={isAdult ? adulto: niño} className="logo react" alt="avatar" />
      </div>
    </>
  )
}

export default App
