import React, { useState } from 'react'
import { Container, Content, Grid, Row, Panel, Button } from 'rsuite';
// import Login from './LoginModal/Login';
import Navbar from './Navbar';

const LandingPage = () => {
    const [loginModal, setLoginModal] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Container>
            <Navbar />
            <Content>
                <Grid fluid>
                    <Row className="show-grid">
                        <Button>Default</Button>
                        <Panel bordered>
                            {/* <Paragraph /> */}
                        </Panel>
                    </Row>
                </Grid>
            </Content>

            {/* {loginModal ? (
                <Login 
                    setLoginModal={setLoginModal} 
                    email={email} 
                    password={password} 
                    setEmail={setEmail} 
                    setPassword={setPassword} 
                />
             ) : null} */}
        </Container>
    )
}

export default LandingPage;
