import React from 'react'
import Card from './components/card'

const App = () => {
  return (
    <div className="parent">
      <Card 
      user = "Rati" 
      img="https://images.unsplash.com/photo-1464863979621-258859e62245?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2lybCUyMGltYWdlfGVufDB8fDB8fHww"
      />
      
      <Card 
      user = "Tira" 
      img="https://images.unsplash.com/photo-1568739253582-afa48fbcea47?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z2lybCUyMGltYWdlfGVufDB8fDB8fHww"/>
    </div>
  )
}

export default App
