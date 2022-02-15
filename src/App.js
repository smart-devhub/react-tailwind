import React,{useState} from 'react'
import { Routes,Route } from 'react-router-dom'
import Content from './components/Content'
import Dropdown from './components/Dropdown'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Home from './components/pages'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Menu from './components/pages/Menu'

const App = () => {
  
    const [isOpen,setIsopen]=useState(false)
    

 
    
  return (
    <div className='app'>
      <Navbar isOpen={isOpen} setIsopen={setIsopen}/>
      <Dropdown isOpen={isOpen} setIsopen={setIsopen}/>
     
       <Routes>
           <Route path='/' element={<Home/>} />
           <Route path='/about' element={<About/>} />
           <Route path='/menu' element={<Menu/>}/>
           <Route path="/contact" element={<Contact/>}/>
       </Routes>
      <Footer/>
    </div>
  )
}

export default App