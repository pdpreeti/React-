import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState({user:'Rihana',age:23})

  const btnClicked = () => {
    setNum(prev =>({...prev,age:34}))
  }

  return (
    <div>
      <h1>{num.user},{num.age}</h1>
      <button onClick={btnClicked}>Click</button>
    </div>
  )
}

export default App
