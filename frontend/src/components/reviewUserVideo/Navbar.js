import React from 'react';
import { Navbar, Nav, FlexboxGrid, Icon } from 'rsuite';
import { Link } from 'react-router-dom';
import { StyledNavItem } from './styles';
import Logo from '../../assets/images/vsign.png';

const NavBarInstance = ({ onSelect, activeKey, ...props }) => {
    return (
        <Navbar appearance="inverse">
            <FlexboxGrid justify="center">
                <FlexboxGrid.Item colspan={15}>
                    <Navbar.Header>
                        <a href="/" className="navbar-brand logo">
                            <img src={Logo} width="95px" alt="Logo Vsign" />
                        </a>
                    </Navbar.Header>
                    <Navbar.Body>
                        <Nav pullRight>
                            <Nav.Item eventKey="3">Meus Contratos</Nav.Item>
                            <Link to="/login">
                                <StyledNavItem icon={<Icon icon="cog" />}>
                                    Sair
                                </StyledNavItem>
                            </Link>
                        </Nav>
                    </Navbar.Body>
                </FlexboxGrid.Item>
            </FlexboxGrid>
        </Navbar>
    );
};

export default NavBarInstance;