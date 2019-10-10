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
    flex: 1
    align-self: center;
    justify-content: center;
    align-items: center;
    background-color: white;   
    justify-content: center;
    margin: 10px;
    // transform: scale(-1, 1)
`;
export const ScriptBlockDivReview = styled.div`
    display: flex;
    flex: 4;
    flex-direction: row;
    justify-content: space-around;
    padding-bottom: 3%;
    margin: 10px;
    background-color: white;
    border-style: solid;
    border-color: black;
    border-width: 4px;
    max-width: 500px;
    max-height: 480px;
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

