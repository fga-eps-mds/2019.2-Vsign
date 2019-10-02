import React, { Component } from 'react';
import { ButtonGroup, IconButton, Icon } from 'rsuite';

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
            // Mostrar instruçÕes
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
                    icon={<Icon icon="pause" />}
                    disabled={disableButtons}
                >Iniciar Gravação</IconButton>
                 <IconButton
                    appearance="primary"
                    size="lg"
                    placement="right"
                    onClick={this.handleInstructionsClick}
                    icon={<Icon icon="pause" />}
                    disabled={disableButtons}
                >Ver Instruções</IconButton>
            </ButtonGroup>
        );          
    }
}
