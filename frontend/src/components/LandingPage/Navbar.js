import React from 'react';
import { Navbar, Nav, FlexboxGrid, Icon } from 'rsuite';
import { StyledHeader, Logo } from './styles';
import VsignLogo from '../../assets/images/vsign.png';
import { connect } from 'react-redux';

const NavBarInstance = ({ onSelect, activeKey, ...props }) => {
    const token = localStorage.getItem("userToken");
    const { name } = props;
    console.log(name);

    return (
        <StyledHeader>
            <Navbar style={{ 'backgroundColor': 'transparent' }}>
                <FlexboxGrid justify="center">
                    <FlexboxGrid.Item colspan={15}>
                        <Navbar.Header>
                            <a href="/" className="navbar-brand logo">
                                <Logo src={VsignLogo} />
                            </a>
                        </Navbar.Header>
                        <Navbar.Body>
                            <Nav pullRight>
                                <Nav.Item href="/" appearance="link">Início</Nav.Item>
                                <Nav.Item href="#como-funciona">Como Funciona</Nav.Item>
                                <Nav.Item href="#precos">Preços</Nav.Item>
                                <Nav.Item href="#api" >
                                    Documentação
                                </Nav.Item>
                                <Nav.Item href={token ? "/contracts" : "/login"} icon={<Icon icon="lock" />}>
                                    {token ? name : "Login"}
                                </Nav.Item>
                            </Nav>
                        </Navbar.Body>
                    </FlexboxGrid.Item>
                </FlexboxGrid>
            </Navbar>
        </StyledHeader>
    );
};

const mapStateToProps = store => ({
    name: store.user.name
})
export default connect(mapStateToProps)(NavBarInstance);