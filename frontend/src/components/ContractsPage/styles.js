import styled from 'styled-components';
import { Header, Nav } from 'rsuite';

export const StyledHero = styled.div`
    height: 20vh;
    background-image: linear-gradient(135deg, #168af0 0%, #764ba2 100%);
    color: #fff;
    padding-top: 4rem;
    `;
    
export const StyledHeader = styled(Header)`
    z-index: 1;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    color: #FFF;
`;
    
export const StyledNavItem = styled(Nav.Item)`
    color: #FFF;
`;
     
export const Title = styled.h1`
    font-family: 'Dosis', sans-serif;
    font-size: 2.57813rem;
    margin-bottom: .5rem;
`;
    
export const SectionTitle = styled.h2`
    font-family: 'Dosis', sans-serif;
    margin-bottom: .5rem;
`;
    
export const SectionHeader = styled.div`
    text-align: center;
    max-width: 70%;
    margin: 0 auto 70px;
    
    p {
        font-size: 1.125rem;
    }
`;
    
export const Section = styled.div`
    position: relative;
    border-bottom: none;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    padding-top: 7rem;
    padding-bottom: 7rem;
`;
    
    export const SignUpSection = styled(Section)`
        position: relative;
        border-bottom: none;
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;
        padding-top: 7rem;
        padding-bottom: 7rem;
        background-image: linear-gradient(135deg, #168af0 0%, #764ba2 100%);
        color: #FFF;
    `;