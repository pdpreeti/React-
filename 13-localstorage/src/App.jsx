const App = () => {

 const user = {
  username: 'priya',
  age:18,
  city:'pune' 
 }
 localStorage.setItem('user',JSON.stringify(user))
 const data = JSON.parse(localStorage.getItem('user'))
 console.log(data);
 
  return (
    <div>
      App
    </div>
  )
}

export default App
