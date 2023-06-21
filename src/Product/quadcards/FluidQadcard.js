import React from 'react'
import './FluidQuadCard.css'
function FluidQuadCard1({title,img1,img2,img3,img4}) {
  return (
    <div className='card'>
      <h3 >{title}</h3>
<div className="card__container">
    <div className="card__top">
     <div className="card__img"> <img src={img1}  alt=''/></div>
     <div className="card__img">  <img  src={img2} alt="" /></div>
     
      </div>
     <div className="card__bottom">
      <div className="card__img">   <img src={img3} alt="" /></div>
     <div className="card__img">   <img src={img4} alt="" /></div>
     </div>
</div>
    </div>
  )
}

export default FluidQuadCard1
