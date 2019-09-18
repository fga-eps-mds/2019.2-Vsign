import React, { Component } from 'react';
import styles from './recordUserVideo.css'
import { withRouter, Redirect } from 'react-router-dom';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
import styled from 'styled-components'

// import { Container } from './styles';

class recordUserVideo extends Component {
    constructor(props) {
		super(props);
		this.state = {

        }
    }

    handleClick = () => {
        console.log("Go to instructions")
    }

    
  render() {
    const Container = styled.div`
            display: flex;
            flex-direction: column;
            `;

    const InstructionBtn = styled.div`
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
    const IntructionTextBtn = styled.p`
            display: flex;
            font-size: 30;
            font-weight: bold;
            font-family: Arial, Helvetica, sans-serif;
            color: black;
            align-self: center

            `;
    const RecordingAlert = styled.div`
            display: flex;
            background-color: red;
            height: 55px;
            width: 337px;
            border-style: solid;
            border-color: black;
            border-width: 1px;
            border-radius: 28px;
            align-items: center
            justify-content: center
        `;

    const RowOnTop = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        
        `;

       
    return (
        <div>
        <Container>
            <RowOnTop>
                <InstructionBtn> 
                    <IntructionTextBtn onClick={() => this.handleClick()}> Ver instruções </IntructionTextBtn>
                </InstructionBtn>  
                <RecordingAlert>
                    <IntructionTextBtn> Gravando </IntructionTextBtn>
                </RecordingAlert>
            </RowOnTop> 
            
        </Container>
        </div>
    );
  }
}

export default withRouter(recordUserVideo);
