import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Text } from './components/Text'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <main>
        <Text text="Hello World" />
      </main>
    </div>
  )
}

export default App
