import React,{useEffect} from 'react';
import './App.css';
import Home from './Home/Home';
import Header from './Header/Header'
import Nav from './Header/Nav';
import {Routes,Route} from 'react-router-dom'
import Checkout from './Checkout/Checkout';
import { useStateValue } from './Home/StateProvider';
import Footer from './Footer/Footer';
import Login from './Login/Login';
import { onAuthStateChanged } from "firebase/auth"
import { auth } from './Login/firebase'; 
import Payment from './Checkout/Payment';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Orders from './Order/Orders';

const promise = loadStripe(
  "pk_test_51MO89mHSRKApEv9Gi16RSr8MxRlwOZgLw3fIy3lWQKiB5hOHp6Mv0E3cpilGRIC0233dRhgwG6Sg4qpOq4i48Ks900EuSqAUsh"
);
function App() {

  const [{}, dispatch] = useStateValue();
   useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <div className="App">
    <Header />
 <Routes>
 <Route path='/' exact element={<Home />}></Route>
 <Route path='/checkout' exact element={<Checkout />}></Route>
 <Route path='/login' exact element={<Login />}></Route>
  <Route path='/payment' exact element={
  <Elements stripe={promise} >
      <Payment />
    </Elements>}
  />
     <Route path='/orders' exact element={
  <Elements stripe={promise} >
      <Orders />
    </Elements>}
  >
 </Route>
 </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;
