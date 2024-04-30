import { useState } from 'react'
import './components/NavBar'
import './components/ItemListContainer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a Mi Tienda !" />
    </>
  )
}

export default App
