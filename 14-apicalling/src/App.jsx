import axios from 'axios'
import { useState } from 'react'

const App = () => {

  const [data,SetData] = useState([])

  const getData = async() =>{
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    
    SetData(response.data)
  }

  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div className="div">
        {data.map(function(elem,idx){
          return <h3>hello, {elem.name} {elem.id}</h3>
        })}
      </div>
    </div>
  )
}

export default App
