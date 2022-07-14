import DivThree from './DivThree'
import { useState } from 'react'

const DivTwo = (props) => {
  const [tardisTwo, setTardisTwo] = useState({
    name: 'Time and Relative Dimension in Space',
    caps: false
  })

  const changeTextTwo = () => {
    let tardisLower = {
      name: tardisTwo.name.toLowerCase(),
      caps: false
    }

    let tardisUpper = {
      name: tardisTwo.name.toUpperCase(),
      caps: true
    }

    if (tardisTwo.name != tardisTwo.name.toLowerCase()) {
      setTardisTwo(tardisLower)
    } else {
      setTardisTwo(tardisUpper)
    }
  }

  return (
    <DivThree
      changeText={props.changeText}
      name={props.name}
      changeTextTwo={changeTextTwo}
      nameTwo={tardisTwo.name}
    />
  )
}

export default DivTwo
