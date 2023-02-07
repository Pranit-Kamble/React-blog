import React from 'react'
import { useLocation } from 'react-router-dom'
import './TravelClick.css'

const TravelClick = () => {
  const location=useLocation()
  console.log(location)
  const img=location.state.img
  const name=location.state.name
  const imdb=location.state.para
  return (
    <div className='singletravel'>
        <img className='singletrvelimg' src={img} alt="" />
        <h1 className='singletravelhead'>{name}</h1>
        <p className='singletravelpara'>{imdb}</p>
        
    </div>
  )
}

export default TravelClick