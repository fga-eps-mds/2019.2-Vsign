import React, { Component } from 'react';

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
            <div class="btn-group d-flex mb-3">
                <button
                    type="button"
                    className="btn btn-success w-100"
                    onClick={this.handleRecordClick}
                    disabled={disableButtons}
                >Iniciar Gravação</button>
                <button
                    type="button"
                    className="btn btn-secondary w-100"
                    onClick={this.handleInstructionsClick}
                    disabled={disableButtons}
                >Ver Instruções</button>
            </div>
        );          
    }
}
