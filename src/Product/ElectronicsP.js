import React,{useState,useEffect} from 'react'
import './Row.css'
import { ImgElec } from './ItemsProfile'
function Electronics({images}) {
const [showImg, setshowImg] = useState([])
useEffect(() => {
setshowImg(ImgElec)
}, [])
console.log(showImg[2]);
  return (
    <div className='row'>
      <h1>Best sellers in electronics</h1>
      	  <div className="row__posters">
         {showImg.map(movie =>( <img  className='row__poster'  src={movie} alt=''/>)
        )}
    </div>
    </div>
  )
}

export default Electronics
