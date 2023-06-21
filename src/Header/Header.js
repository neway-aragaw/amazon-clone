import React,{useEffect,useState} from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Nav from './Nav';
import {Link,useNavigate} from 'react-router-dom'
import { useStateValue } from '../Home/StateProvider';
import { auth } from '../Login/firebase';
function Header() {
const[{basket,user} ,dispatch]=useStateValue()
const history = useNavigate();
    function handleChange(event) {
        history(event.target.value)
    }
 const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
   <div className="all">
    <div className="header">
 <Link to="/">   <img className='header__logo' src="https://clipartcraft.com/images/amazon-logo-transparent-high-resolution-5.png" alt="" /></Link>
   <div className="header__option"> <span className='header__optionLineOne'>helloo</span>
    <span className='header__optionLineTwo'>Select Your address</span></div>
    <div className="header__search">
   <select name="items" className="items_lists" onChange={handleChange}>
            <option value="/">Home</option>
            <option value="/payment">My Payment</option>
            <option value="/checkout">My CheckOut</option>
            <option value="/orders">My Order Lists</option>
        </select>
    <input type="text" className="header__searchInput" />
      <SearchIcon className="header__searchIcon" />
    </div>
    <div className="header__nav">
   
    
        <Link to={!user && '/login'}>
          <div onClick={handleAuthenticaton} className="header__option">
            <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>

    <div className="header__option"> <span className='header__optionLineOne'>Returns</span>
    <span className='header__optionLineTwo'>& Orders</span></div>
    <div className="header__option"> <span className='header__optionLineOne'>Your</span>
    <span className='header__optionLineTwo'>Prime</span></div>
    </div>
<Link to='/checkout'><div className="header__optionBasket">
            <ShoppingCartIcon />
            <span className="header__optionLineTwo header__basketCount">{basket.length}
            </span>
          </div></Link>
    </div>
  <Nav />
   </div>
  )
}

export default Header
