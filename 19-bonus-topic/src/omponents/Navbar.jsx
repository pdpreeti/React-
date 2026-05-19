import React from 'react'

const Navbar = (props) => {

    function changeTheme(){
        props.setTheme('light')
    }

  return (
    <div>
      <button onClick={changeTheme}>Change Theme</button>
    </div>
  )
}

export default Navbar
