import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import AllRooms from './pages/AllRooms';

const App = () => {

  const isOwnerPath = useLocation().pathname.includes("owner");
  return (
<div className="min-h-screen flex flex-col">  
     {!isOwnerPath && <Navbar/> } 
     <div className='flex-1'>
        <Routes>
             <Route path='/' element= {<Home/>} />             
             <Route path='/rooms' element= {<AllRooms/>} />             
        </Routes>
     </div>
        <Footer/>
    </div>
  )
}

export default App