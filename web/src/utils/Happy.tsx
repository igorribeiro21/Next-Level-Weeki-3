import React from 'react';
import logo from '../images/logo.svg';
import '../styles/components/happy.css'

export default function Happy(){
    return (
        <div>
            <div id="happy">
                <img src={logo} alt="" />                

                <div className="location">
                    <strong>Franca</strong>
                    <span>São Paulo</span>
                </div>
            </div>
        </div>
    )
}