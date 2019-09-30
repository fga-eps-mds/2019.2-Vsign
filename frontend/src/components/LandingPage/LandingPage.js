import React, { useState } from 'react'
import { Container, Content, Avatar } from 'rsuite';
import {FirstRow, FirstRowText} from './LandingPageComponents';
import './LandingPage.css';
import Login from '../LoginModal/Login';

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
               <FirstRow>
                   <FirstRowText>
                       Nunca foi tão fácil assinar seus contratos
                   </FirstRowText>
               </FirstRow>
            </Content>

            {developers()}

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

const fetchDevPictureGithub = async username => {
    await fetch(`https://api.github.com/users/${username}`, {
        method: 'GET',
        headers: {
            Accept: "application/vnd.github.v3+json"
        }
    })
        .then(res => res.ok ? res.json() : null)
        .then(resJson => {
            if (resJson !== null) {
                console.log('ok');
                return resJson;
            }
        })
}

const developersList = ['Foxtrot40', 'kairon-v', 'ViniciusPuuerto']
const developers = () => (
    <div className='devs-container red'>
        <h2>Criadores</h2>
        <div className='devs green' style={{
            display: 'flex',
            width: "80%"
        }}>
            {developersList.map(dev => {
                let devGithub = fetchDevPictureGithub(dev);

                return (
                    <div className='dev blue'>
                        <Avatar circle src={devGithub ? devGithub.avatar_url : null} style={{ width: 200, height: 200 }} className='avatar' size='lg' />
                        <p>{devGithub.name}</p>
                        <p>Desenvolvedor</p>
                    </div>
                )
            })}
        </div>
    </div>
)

export default LandingPage;
