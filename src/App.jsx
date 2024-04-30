import { useState } from 'react'
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <ItemListContainer />
    </>
  )
}

export default App