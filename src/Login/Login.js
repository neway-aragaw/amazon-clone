import React, { useState } from 'react';
import './Login.css'
import { Link  } from "react-router-dom";
import { useNavigate  } from 'react-router-dom';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "./firebase.js"; 

function Login() {
    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
    const signIn = (e) => {
        e.preventDefault();
       signInWithEmailAndPassword(auth,email, password)
            .then((auth)=>{console.log(auth)}
            )
            .then((auth) => history('/')
                
            )
            .then(function(user) {
        // Set the user's display name
        return user.updateProfile({
          displayName: `${firstName} ${lastName}`,
        });
      })
            .catch(error => alert(error.message))
    }

    const register = (e) => {
        e.preventDefault();
       createUserWithEmailAndPassword(auth,email, password)
            .then((auth)=>{console.log(auth)}
            )
            .then((auth) => history('/')
                
            )
            .catch(error => alert(error.message))
    }

    return (
        <div className='login animated-element'>
            <Link to='/'>
                <img
                    className="login__logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt=''
                />
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
 
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login





