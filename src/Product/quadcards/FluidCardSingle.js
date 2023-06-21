import React from 'react'
import { Link } from 'react-router-dom'
import './FluidQuadCard.css'
function FluidCardSingle({title,image,description,discount}) {
  return (
    <div className='card'>
      <h3>{title}</h3>
      <div className="singlecard__img">  <img className='bigimg' src={image} alt="" /></div>
      <div className="card__discount">
      <button>{discount}</button>
      </div>
      <Link to='/clearance'><p className='card__description'>{description}</p></Link>
    </div>
  )
}

export default FluidCardSingle
