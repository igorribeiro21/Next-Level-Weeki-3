import React from 'react';

import '../styles/pages/login.css'
import logo from '../images/map-marker.svg';

import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className="container">
            <div id="happy">
                <img src={logo} alt="" />
                <h1>happy</h1>

                <div className="location">
                    <strong>Franca</strong>
                    <span>São Paulo</span>
                </div>
            </div>
            <div id="login">
                <Link to="/" id="left">
                    <FiArrowLeft size={26} color="#12AFCB" />
                </Link>

                <div id="div-login">
                    <h2>Fazer login</h2>

                    <label htmlFor="email">Email</label>
                    <input className="teste" type="text" />

                    <label htmlFor="senha">Senha</label>
                    <input className="input-text" type="password" />

                    <input type="checkbox" id="green" />

                    <button type="submit" id="btn">Entrar</button>
                </div>
            </div>
        </div>
    )
}
export default Login;