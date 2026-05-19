import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Navigator from './components/Navigator'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Notfound from './pages/Notfound'
import Men from './pages/Men'
import Women from './pages/Women'
import Kids from './pages/Kids'
import Makeup from './pages/Makeup'
import MakeupDetails from './pages/MakeupDetails'



const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar />
      <Navigator />
        <Routes>
          <Route path = '/' element = {<Home />} />
          <Route path = '/about' element = {<About />} />
          <Route path = '/makeup' element = {<Makeup />} />
          <Route path = '/makeup/:id' element = {<MakeupDetails />} />

          <Route path = '/product' element = {<Product />}>
            <Route path = 'men' element = {<Men />}/>
            <Route path = 'women' element = {<Women />}/>
            <Route path = 'kids' element = {<Kids />}/>
          </Route>

          <Route path = '*' element = {<Notfound />} />
          
        </Routes>
      <Footer />
    </div>
  )
}

export default App
