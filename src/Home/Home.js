import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import './Home.css'
import Product from '../Product/Product'
import Img,{ImgBnner,ImgKids,ImgNewYear,Tv} from '../Product/ItemsProfile'
import Nav from '../Header/Nav'
import PrShow from '../Product/BookProduct'
import Electronics from '../Product/ElectronicsP'
import FluidQuadCard1 from '../Product/quadcards/FluidQadcard'
import FluidCardSingle from '../Product/quadcards/FluidCardSingle'

function Home() {
  const [bannerImg, setBannerImg] = useState([]);
useEffect(() => {
function chenger(){
  setBannerImg(ImgBnner[Math.floor(Math.random()*4)])
}chenger()
}, [])

  console.log(bannerImg);
  
  return (
    <div className='home'>
      <div className="home__container">
     
<Link to='/'> <img
          className="home__image"
          src={bannerImg}
          alt=""
        /></Link>
        <Electronics />



        
              <div className="home__row">
   <Product rating={5} id={7} price={322} image={Tv.item7.image} title={Tv.item7.title}/>
     <Product rating={5} id={8} price={233} image={Tv.item8.image} title={Tv.item8.title}/>
     <Product rating={5} id={9} price={212} image={Tv.item9.image} title={Tv.item9.title}/>
      </div>
              <div className="home__row">
                  <Product
            id={Img.b1.id}
            title={Img.b1.title}
            price={parseInt(Img.b1.price)}
            rating={Img.b1.rating}
            image={Img.b1.image}
          />
                  <Product
            id={Img.b2.id}
            title={Img.b2.title}
            price={parseInt(Img.b2.price)}
            rating={Img.b2.rating}
            image={Img.b2.image}
          />
                  <Product
            id={Img.b3.id}
            title={Img.b3.title}
            price={parseInt(Img.b3.price)}
            rating={Img.b3.rating}
            image={Img.b3.image}
          />
                  <Product
            id={Img.b4.id}
            title={Img.b4.title}
            price={parseInt(Img.b4.price)}
            rating={Img.b4.rating}
            image={Img.b4.image}
          />

        </div>
               <div className="home__row">
          <Product
            id={Img.c1.id}
            title={Img.c1.title}
            price={parseInt(Img.c1.price)}
            rating={Img.c1.rating}
            image={Img.c1.image}
          />
          <Product
            id={Img.c2.id}
            title={Img.c2.title}
            price={parseInt(Img.c2.price)}
            rating={Img.c2.rating}
            image={Img.c2.image}
          />
          <Product
            id={Img.c3.id}
            title={Img.c3.title}
            price={parseInt(Img.c3.price)}
            rating={Img.c3.rating}
            image={Img.c3.image}
          />
        </div>
      <div   className="home__row">
        <Product rating={5} id={6} price={112} image={Tv.item6.image} title={Tv.item6.title}/>
      </div>
              <div className="home__row">
        <FluidQuadCard1 title='For Kids'
         img1={ImgKids[0]}
         img2={ImgKids[1]}
         img3={ImgKids[2]}
         img4={ImgKids[3]}
         
        />
        <FluidQuadCard1  title='New year Gifts'
         img1={ImgNewYear[0]}
         img2={ImgNewYear[1]}
         img3={ImgNewYear[2]}
         img4={ImgNewYear[3]}
       />
        <FluidCardSingle title='Save big in the New Year Sale' image='https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/HOL22/ShoulderPeriod/GW/CategoryCards/SP22_W5_GW_CategoryCard_DT_1x_EN._SY304_CB604985637_.jpg' description='shop clearance'/>
        </div>
 <div className="home__row">
          <Product
            id={Img.e1.id}
            title={Img.e1.title}
            price={parseInt(Img.e1.price)}
            rating={Img.e1.rating}
            image={Img.e1.image}
          />
          <Product
            id={Img.e2.id}
            title={Img.e2.title}
            price={parseInt(Img.e2.price)}
            rating={Img.e2.rating}
            image={Img.e2.image}
          />

        </div>
          
 <PrShow />
         <div className="home__row">
     <Product rating={5} id={1} price={322} image={Tv.item1.image} title={Tv.item1.title}/>
     <Product rating={5} id={2} price={233} image={Tv.item2.image} title={Tv.item2.title}/>
      </div>
      <div className="home__row">
   <Product rating={5} id={3} price={322} image={Tv.item3.image} title={Tv.item3.title}/>
     <Product rating={5} id={4} price={233} image={Tv.item4.image} title={Tv.item4.title}/>
     <Product rating={5} id={5} price={212} image={Tv.item5.image} title={Tv.item5.title}/>
      </div>


        <div className="home__row">
         
          
        </div>
       
      </div>
    </div>
  )
}

export default Home

