import axios from 'axios'
import { useEffect, useState } from 'react'
import Card from './components/Card'; 
import Button from './components/Button';

const App = () => {

  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  const getData = async () =>{
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=20`)
    setUserData(response.data);
  }

  useEffect(function(){
    getData()
  },[index])


  let printUserData = <h3 className='text-gray-500 text-xs absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 '
  >Loading...</h3>

  if(userData.length > 0){
    printUserData = userData.map(function(elem,idx){

      return <div key={idx}>
        <Card elem={elem}/>
      </div>

    })
  }

  return (
    <div className='bg-black overflow-auto h-screen p-4 text-white'>
      <div className="flex flex-wrap gap-4 p-4">
        {printUserData}
      </div>

      <div className="flex justify-center gap-6 items-center p-4">
      <Button 
        index={index}
        setIndex={setIndex}
        setUserData={setUserData}
        />
      </div>

    </div>
  )
}

export default App
