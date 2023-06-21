import React,{useState,useEffect} from 'react'
import './Row.css'
import { ImgBook } from './ItemsProfile'
function PrShow() {
const [showImg, setshowImg] = useState([])
useEffect(() => {
setshowImg(ImgBook)

}, [])
console.log(showImg[2]);
  return (
    <div className='row'>
      <h1>Best selling books</h1>
      	  <div className="row__posters">
         {showImg.map(movie =>(  <img  className='row__poster'  src={movie} alt=''/>)
        )}
    </div>
    </div>
  )
}

export default PrShow
