import styled from 'styled-components';

export const FirstRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    background-color: #1592E6;
    height: 50vh;
    flex: 2
`;

export const DivForText = styled.div`
    align-self: center;
`;

export const FirstRowText = styled.p`
    color: white;
    font-weight: bold;
    font-size: 35px
`;

export const DivForImg = styled.div`
    display: flex;
    align-self: center;
    justify-content: flex-start
`;

export const SecondRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    background-color: #31ACFF;
    height: 50vh;
    flex: 2
`;

export const AboutDiv = styled.div`
    display: flex;
    flex: 2;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 50vw
`;

export const AboutTitle = styled.p`
    color: white;
    font-weight: bold;
    font-size: 30px;
    align-self: center
`;

export const WhyUseDiv = styled.div`
    display: flex;
    flex: 2;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 50vh
    border-left: solid 2px black 
`;

export const WhyUseTitle = styled.p`
    color: white;
    font-weight: bold;
    font-size: 30px;
    align-self: center
`;