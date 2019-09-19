import React, { Component } from 'react'
import './LandingPage.css';
import camera_icon from '../assets/images/camera-icon.png';

export class LandingPage extends Component {
    render() {
        return (
            <div className='container borda'>
                <div className='header borda'>
                    <h1>Vsign</h1>
                </div>
            
                <div className="tela borda">

                </div>
                <div className='gravar borda'>
                    <p>Gravar</p>
                    <img src={camera_icon} alt=""/>
                </div>
            </div>
        )
    }
}

export default LandingPage
