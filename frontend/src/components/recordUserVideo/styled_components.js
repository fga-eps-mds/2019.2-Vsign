import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const InstructionBtn = styled.div`
    display: flex;
    background-color: white;
    height: 55px;
    width: 337px;
    border-style: solid;
    border-color: black;
    border-width: 1px;
    border-radius: 28px;
    align-items: center;
    justify-content: center
`;
export const IntructionTextBtn = styled.p`
    display: flex;
    font-size: 30;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    color: black;
    align-self: center
    `;

export const RowOnTop = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 10%
    `;

export const VideoDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: solid 5px red
    `;