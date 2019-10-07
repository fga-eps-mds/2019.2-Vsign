import React, { Component } from 'react';
import { ButtonGroup, IconButton, Icon } from 'rsuite';
import {IntructionTextBtn} from "./styles"
export default class ActionButtons extends Component {
    constructor(props) {
        super(props);
        this.handleRecordClick = this.handleRecordClick.bind(this);
        this.handleInstructionsClick = this.handleInstructionsClick.bind(this);
    }

    handleRecordClick() {
        if (!this.props.isRecording) {
            this.props.record();
        }
    }

    handleInstructionsClick() {
        if (!this.props.isRecording) {
            this.props.startTour()
        }
    }

    render() {
        const disableButtons = this.props.isRecording;
        return (
            <ButtonGroup style={{ marginBottom: '1rem'}} justified>
                 <IconButton
                    color="green"
                    size="lg"
                    placement="left"
                    onClick={this.handleRecordClick}
                    icon={<Icon icon="play" />}
                    disabled={disableButtons}
                > <IntructionTextBtn>Iniciar Gravação</IntructionTextBtn></IconButton>
                 <IconButton
                    appearance="primary"
                    size="lg"
                    placement="right"
                    onClick={this.handleInstructionsClick}
                    icon={<Icon icon="help-o" />}
                    disabled={disableButtons}
                ><IntructionTextBtn>Ver Instruções</IntructionTextBtn></IconButton>
            </ButtonGroup>
        );          
    }
}
