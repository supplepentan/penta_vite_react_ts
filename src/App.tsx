import { useState } from 'react'
import './App.css'
import { AreaFooter } from './components/AreaFooter'
import { AreaHeader } from './components/AreaHeader'
import { AreaMain } from './components/AreaMain'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <AreaHeader />
      <AreaMain />
      <AreaFooter />
    </div>
  )
}

export default App
