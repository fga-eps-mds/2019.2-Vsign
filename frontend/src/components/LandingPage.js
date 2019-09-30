import React, { useState } from 'react'
import { Container, Content, Grid, Row, Panel, Button } from 'rsuite';
import {FirstRow, FirstRowText} from './LandingPageComponents';
import './LandingPage.css';
import Login from './LoginModal/Login';

const LandingPage = () => {
    const [loginModal, setLoginModal] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Container>
            <div className="header-bar">
                <div className='header-bar-logo'>
                    <a href="/">VSign</a>
                </div>
                <div className='header-info'>
                    <a href="#about">About |</a>
                    <button onClick={() => setLoginModal(!loginModal)}> Login</button>
                </div>
            </div>
            <Content>
               {/* <FirstRow>
                   <FirstRowText>
                       Nunca foi tão fácil assinar seus contratos
                   </FirstRowText>
               </FirstRow> */}
                
            </Content>
            <Button>Default</Button>

            {loginModal ? (
                <Login 
                    setLoginModal={setLoginModal} 
                    email={email} 
                    password={password} 
                    setEmail={setEmail} 
                    setPassword={setPassword} 
                />
             ) : null}
        </Container>
    )
}

export default LandingPage;
