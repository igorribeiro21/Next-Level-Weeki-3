import React from 'react';
import Happy from '../utils/Happy';

import '../styles/pages/login.css';

export default function ForgotPassword() {

    return (
        <div className="container">
            <div>
                <Happy />
            </div>
            <div id="forgot-password">
                <h1>Esqueci a senha</h1>

                <p>Sua redifinição de senha será enviada</p>
                <p>para o e-mail cadastrado.</p>

                <div style={{ marginTop: 30, marginBottom: 30 }}>
                    <label htmlFor="email">Email</label>
                    <input className="teste" type="text" />
                </div>

                <button type="submit" id="btn">Entrar</button>
            </div>
        </div>
    )
}