import './App.css'
import { useState } from 'react'
import DivOne from './components/DivOne'

function App() {
  const [tardis, setTardis] = useState({
    name: 'Time and Relative Dimension in Space',
    caps: false
  })

  const changeText = () => {
    let tardisLower = {
      name: tardis.name.toLowerCase(),
      caps: false
    }

    let tardisUpper = {
      name: tardis.name.toUpperCase(),
      caps: true
    }

    if (tardis.name != tardis.name.toLowerCase()) {
      setTardis(tardisLower)
    } else {
      setTardis(tardisUpper)
    }
  }

  return (
    <div>
      <DivOne changeText={changeText} name={tardis.name} />
    </div>
  )
}

export default App
