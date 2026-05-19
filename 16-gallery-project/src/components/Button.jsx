
const Button = (props) => {
  return (
    <div>
       <button
        style ={{opacity: props.index == 1 ? 0.6 : 1}} 
        className='bg-purple-500 text-white text-sm cursor-pointer active:scale-95 rounded px-4 py-2 font-semibold'
        onClick={() =>{
          if(props.index > 1){
            props.setIndex(props.index-1)
            props.setUserData([])
          }
        }}
        >Prev
        </button>
        <h4>Page{props.index}</h4>
        <button 
        className='bg-purple-500 text-white text-sm cursor-pointer active:scale-95 rounded px-4 py-2 font-semibold'
        onClick={() =>{
          props.setUserData([])
          props.setIndex(props.index+1)
        }}
        >Next
        </button>
    </div>
  )
}

export default Button
