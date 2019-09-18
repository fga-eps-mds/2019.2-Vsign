import React, { Component } from 'react';
import styles from './recordUserVideo.css'
import { withRouter, Redirect } from 'react-router-dom';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
import styled from 'styled-components'
import {Container, RowOnTop, IntructionTextBtn, InstructionBtn} from "./styled_components.js"
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
