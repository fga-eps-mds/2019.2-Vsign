import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    
`;

export const SpecialContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const VideoDivReview = styled.div`
    display: flex;
    flex: 4
    align-self: center;
    justify-content: space-around;
    align-items: center;
    background-color: white;
    border-style: solid;
    border-color: black;
    border-width: 4px;   
    justify-content: center;
`;
export const ScriptBlockDivReview = styled.div`
    display: flex;
    flex: 4
    flex-direction: row;
    align-self: right;
    justify-content: space-around;
    align-items: right;
    padding-bottom: 3%;
    margin: 10px
    background-color: white;
    border-style: solid;
    border-color: black;
    border-width: 4px;
    border-radius: 40px;
    width: 500px;
    height: 188px;
    justify-content: center;
    align-items: center
`;
export const ScriptBlock = styled.p`
    display: flex;
    font-size: 30px;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    color: black;
    align-self: center
`;
export const ScriptBlockBtn = styled.div`
    display: flex;
    background-color: #1592E6;
    align-self: flex;
    padding: 10px;
    justify-content: center;
    border: solid 1px #1592E6;
    border-radius: 53px;
    width: 491px;
    height: 105px:
`;

export const ScriptBlockStartBtn = styled.div`
    display: flex;
    width: 25px;
    height: 25px;
    background-color: white;
    align-self: flex;
    padding: 10px;
    border: solid 5px black;
`;

export const ScriptBlockPauseBtn = styled.div`
    display: flex;
    width: 25px;
    height: 25px;
    background-color: white;
    align-self: flex;
    padding: 10px;
    border: solid 5px black;
`;

export const ScriptBlockRestartBtn = styled.div`
    display: flex;
    width: 25px;
    height: 25px;
    background-color: white;
    align-self: flex;
    padding: 10px;
    border: solid 5px black;
`;
export const BtnDivRedo = styled.div`
    display: left;
    align-items: flex-end;
    justify-content: flex-end;
    padding: 10px;
    flex: 5;
`;
export const BtnDivEnd = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    padding: 10px;
    flex: 5;
`;
export const Parent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 4
`;

export const RestartRecordingText = styled.p`
    color: white;
    font-size: 35px;
    font-weight: bold;
    align-self: center;
    font-family: Arial
`;

export const FinishSignatureText = styled.p`
    color: white;
    font-size: 35px;
    font-weight: bold;
    align-self: center;
    font-family: Arial
`;