import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [detail, setDetail] = useState('')
  const [task, setTask] = useState([])
  


  const submitHandler = (e) =>{
    e.preventDefault()

    const copyTask =[...task];
    copyTask.push({title,detail})
    setTask(copyTask)

    setTitle('')
    setDetail('')
  }
  
  const deleteNote = (idx) =>{
    const copyTask =[...task];
    copyTask.splice(idx,1)
    setTask(copyTask)
  }

  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form 
      onSubmit={(e) =>{
        submitHandler(e)
      }}
      className='flex gap-4 lg:w-1/2 items-start flex-col p-10'>

        <h1 className='text-3xl mb-2 font-bold'>Add Notes</h1>

        <input 
        type='text' 
        placeholder='Enter Notes Heading'
        className='px-5 w-full font-medium py-2 border-2 outline-none rounded'
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value)
        }}
        />
        
        <textarea 
        placeholder='Enter Details' 
        className='px-5 w-full font-medium h-32 py-2 flex-start flex-row border-2 outline-none rounded' 
        value={detail}
        onChange={(e)=>{
          setDetail(e.target.value)
        }}
        />
        
        <button 
        className='bg-purple-400 w-full active:bg-purple-300 active:scale-95 font-medium outline-none text-black px-5 py-2 border-2 rounded'
        >Add Note</button>

      </form> 
      <div className=" lg:w-1/2 lg:border-l-2 p-10">
      <h1 className='text-3xl font-bold'>Recent Notes</h1>
      <div className=" flex h-[90%] flex-wrap item-start justify-start gap-5 mt-5 overflow-auto">
        {task.map(function(elem,idx){

          return <div key={idx} className="h-52 w-40 flex justify-between flex-col items-start rounded-2xl bg-cover text-black p-4 bg-[url('https://img.freepik.com/free-vector/colorful-ripped-note-collection-vector_53876-161336.jpg?semt=ais_hybrid&w=740&q=80')] ">
          <div className=' '>
            <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
            <p className='mt-4 leading-tight font-medium text-gray-700'>{elem.detail}</p>
          </div>
          <button 
          onClick={() =>{
            deleteNote(idx);
          }}
          className='w-full active:scale-95 cursor-pointer bg-red-500 text-white text-sm rounded-md font-bold py-1'>
          Delete</button>
        </div>
        })}
        </div>
      </div>
    </div>
  )
}

export default App
