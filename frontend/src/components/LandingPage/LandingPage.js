import React, { useState } from 'react'
import { Container, Content, Avatar, Panel } from 'rsuite';
import { FirstRow, 
        FirstRowText,
        DivForText, 
        DivForImg, 
        SecondRow, 
        AboutDiv, 
        WhyUseDiv, 
        AboutTitle, 
        WhyUseTitle } from './LandingPageComponents';
import './LandingPage.css';
import signImage from "../../assets/images/sign_contract.png"
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
                <div>
                    {_FirstRow()}
                    {_SecondRow()}
                </div>
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

const _FirstRow = () => {
    return (
        <div>
            <FirstRow>
                <DivForText>
                <FirstRowText>Nunca <br/> foi tão fácil <br/> assinar contratos!!!</FirstRowText>
                </DivForText>
                <DivForImg>
                    <img src={signImage} style={{width: "50%", height: "50%"}}alt="signImage"/>
                </DivForImg>
            </FirstRow>
        </div>
    )
}

const _SecondRow = () => {
    return (
        <div>
            <SecondRow>
                <AboutDiv>
                    <AboutTitle>
                        Sobre:
                    </AboutTitle>
                    <Panel  bordered>
                        Blablabla
                    </Panel>
                </AboutDiv>
                <WhyUseDiv>
                    <WhyUseTitle>
                        Porque usar <br/> VSign?
                    </WhyUseTitle>
                </WhyUseDiv>
            </SecondRow>
        </div>
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

const developersList = ['Foxtrot40', 'kairon-v', 'ViniciusPuerto']
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
