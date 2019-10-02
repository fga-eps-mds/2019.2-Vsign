import React, { Component } from 'react';
import { Grid, IconButton, Row, Col, Icon, Progress } from 'rsuite';

export default class ScriptControl extends Component {
    constructor(props) {
        super(props);
        this.handleScriptClick = this.handleScriptClick.bind(this)
    }

    handleScriptClick() {
        if (this.props.isRecording) {
            this.props.nextScriptBlock();
        }
    }

    render() {
        const disableButtons = !this.props.isRecording;
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
                            onClick={this.handleScriptClick}
                            icon={<Icon icon="forward" />}
                            disabled={disableButtons}
                            block
                        >Avançar</IconButton>
                    </Col>
                </Row>
            </Grid>
        );          
    }
}
