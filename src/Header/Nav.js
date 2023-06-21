import React from 'react'
import './Nav.css'
function Nav() {
  return (
    <div className='nav'>
   <div className="nav__listing">   
   <ul className='Navlist'>
        <li className='first'><a href="">All</a></li>
        <li><a href="">New Year Sale</a></li>
        <li><a href="">Best Sellers</a></li>
        <li><a href="">Customer Service</a></li>
        <li><a href="">Amazon Basics</a></li>
        <li><a href="">Prime</a></li>
        <li><a href="">New Releases</a></li>
        <li><a href="">Books</a></li>
        <li><a href="">Registry</a></li>
        <li className='last'><a href="">Fashion</a></li>

      </ul>
   </div>
    </div>
  )
}

export default Nav
