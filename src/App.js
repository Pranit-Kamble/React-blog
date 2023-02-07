import React from 'react'
import Navbar from './Pages/Navbar'
import RoutesFile from './Routes/RoutesFile'
import './App.css'


const App = () => {
  return (
    <div>

      <Navbar/>
      <RoutesFile/>
      <div className='copy'>© Pranit Kamble</div>
      
    </div>
  )
}

export default App