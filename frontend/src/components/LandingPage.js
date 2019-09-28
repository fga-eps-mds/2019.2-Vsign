import React, { Component } from 'react'
import { Button, Container, Navbar, Nav, Dropdown, Icon, Content, Footer, Grid, Row, Col, Panel, PanelGroup } from 'rsuite';
import './LandingPage.css';
export class LandingPage extends Component {
    render() {
        return (
            <Container>
                <div className="header-bar">
                    <div className='header-bar-logo'>
                        <a href="/">VSign</a>
                    </div>
                    <div className='header-info'>
                        <a href="#about">About |</a>
                        <a href="/login"> Login</a>
                    </div>
                </div>
                <Content>
                    <Grid fluid>
                        <Row className="show-grid">
                            <Panel bordered>
                                {/* <Paragraph /> */}
                            </Panel>
                        </Row>
                    </Grid>
                </Content>
            </Container>
        )
    }
}

export default LandingPage
