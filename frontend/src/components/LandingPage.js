import React, { Component } from 'react'
import { Button, Container, Navbar, Nav, Dropdown, Icon, Content, Footer, Grid, Row, Col, Panel, PanelGroup } from 'rsuite';


export class LandingPage extends Component {
    render() {
        return (
            <Container>
                <Navbar>
                    <Navbar.Header>
                        <a href="#" className="navbar-brand logo">VSign</a>
                    </Navbar.Header>
                    <Navbar.Body>
                        <Nav>
                            {/* <Nav.Item icon={<Icon icon="home" />} >Home</Nav.Item>
                            <Nav.Item>News</Nav.Item>
                            <Nav.Item>Products</Nav.Item> */}
                            {/* <Dropdown title="About">
                                <Dropdown.Item>Company</Dropdown.Item>
                                <Dropdown.Item>Team</Dropdown.Item>
                                <Dropdown.Item>Contact</Dropdown.Item>
                            </Dropdown> */}
                        </Nav>
                        <Nav pullRight>
                            <Nav.Item icon={<Icon icon='cog' />}>Login</Nav.Item>
                            <Nav.Item icon={<Icon icon="cog" />} >Settings</Nav.Item>
                        </Nav>
                    </Navbar.Body>
                </Navbar>
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
