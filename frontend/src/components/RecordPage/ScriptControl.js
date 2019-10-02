import React, { Component } from 'react';
import { Grid, IconButton, Row, Col, Icon, Progress } from 'rsuite';

export default class ScriptControl extends Component {
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
            <Grid fluid style={{ marginTop: '1rem' }}>
                <Row>
                    <Col xsHidden xs={12}>
                        <Progress.Line style={{ marginTop: '.5rem' }} percent={80} showInfo={false} />
                    </Col>
                    <Col xs={12} xs={12}>
                        <IconButton
                            appearance="primary"
                            placement="right"
                            onClick={this.handleInstructionsClick}
                            icon={<Icon icon="pause" />}
                            disabled={disableButtons}
                            block
                        >Avançar</IconButton>
                    </Col>
                </Row>
            </Grid>
        );          
    }
}
