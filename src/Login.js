import React, { useState } from 'react';
import './Login.css';
import logo from './images/logo.svg'
import {Link, useHistory} from 'react-router-dom';
import {auth} from './firebase';

function Login() {

    const history = useHistory();
    const [email, setEmail]  = useState('');
    const [password, setPassword] = useState('');

    const login = (event) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/');
            })
            .catch(error => {
                alert(error.message);
            })
    }

    const register = (event) => {
        event.preventDefault();

        auth.createUserWithEmailAndPassword(email,password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => {
                alert(error.message)
            })
    }


    return (
        <div className="login">
            <Link to="/">
                <img src={logo} alt="shop-logo" className="login__logo" />
            </Link>
            <form className="login__container">
            <h2>Sign in</h2>
                <p>Email</p>
                <input onChange = {event => setEmail(event.target.value)} type="email" value={email} />
                <p>Password</p>
                <input onChange = {event => setPassword(event.target.value)} type="password" value={password}/>
                <button type="submit" onClick={login} className="login__button">Sign in</button>
                <button type="submit" onClick={register} className="registerBtn">Create your AS account</button>
            </form>

            <Link to='/' className="login__bth">
            Back to Home
            </Link>
        </div>
    )
}

export default Login
