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
    justify-content: center;
`;
export const IntructionTextBtn = styled.p`
    display: flex;
    font-size: 30;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    color: black;
    align-self: center;
    flex: 3
    `;

export const RowOnTop = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 3%;
    margin-top: 3%
    `;

export const VideoDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: solid 5px red;
    flex: 3
    `;

export const ScriptBlockDiv = styled.div`
    display: flex;
    flex: 3
    flex-direction: row;
    align-self: center;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 3%;
    margin-top: 3%;
    background-color: white;
    border-style: solid;
    border-color: black;
    border-width: 4px;
    border-radius: 40px;
    width: 852px;
    height: 188px;
    padding: 1%
`;

export const ScriptBlock = styled.p`
    display: flex;
    font-size: 30;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    color: black;
    align-self: center
`;