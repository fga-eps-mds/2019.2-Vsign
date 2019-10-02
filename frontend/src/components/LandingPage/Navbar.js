import React from 'react';
import { Navbar, Nav, FlexboxGrid, Icon } from 'rsuite';
import { StyledHeader, Logo } from './styles';
import VsignLogo from '../../assets/images/vsign.png';

const NavBarInstance = ({ onSelect, activeKey, ...props }) => {
    return (
        <StyledHeader>
            <Navbar style={{ 'background-color': 'transparent' }}>
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
                                <Nav.Item href="/login" icon={<Icon icon="lock" />}>
                                    Login
                                </Nav.Item>
                            </Nav>
                        </Navbar.Body>
                    </FlexboxGrid.Item>
                </FlexboxGrid>
            </Navbar>
        </StyledHeader>
    );
  };

  export default NavBarInstance;