import styled from 'styled-components'
import { Nav, Panel } from 'rsuite';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 2
`;

export const SpecialContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    flex: 2
`;

export const VideoDivReview = styled.div`
    display: flex;
    flex: 4;
    flex-direction: row;
    justify-content: space-around;
    padding-bottom: 5%;
    background-color: white;
    max-width: 100%;
    max-height: 100%;
`;
export const ScriptBlockDivReview = styled.div`
    display: flex;
    flex: 4;
    flex-direction: row;
    justify-content: space-around;
    padding-bottom: 5%;
    background-color: white;
    max-width: 500px;
    overflow:auto;

`;
export const ScriptBlock = styled.p`
    display: flex;
    font-size: 20px;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    color: black;
    align-self: center
`;


export const Parent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 4
`;

export const RestartRecordingText = styled.p`
    color: white;
    font-size: 20px;
    font-weight: bold;
    align-self: center;
    font-family: Arial
`;

export const FinishSignatureText = styled.p`
    color: white;
    font-size: 20px;
    font-weight: bold;
    align-self: center;
    font-family: Arial
`;

export const Space = styled.div`
    flex;
    width:500px;
`;

export const StyledNavItem = styled(Nav.Item)`
    color: #FFF;
`;

export const StylePanal = styled(Panel)`
    width: 100%;
    height: 100%;
`;
export const IntructionTextBtn = styled.p`
   
    font-size: 14px;
    font-weight: bold;
    font-family: 'Open Sans', sans-serif;
    color: white;

`;