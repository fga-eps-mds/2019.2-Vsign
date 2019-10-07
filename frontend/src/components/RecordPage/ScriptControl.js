import React, { Component, forwardRef, useRef, useImperativeHandle } from 'react';
import { Grid, IconButton, Row, Col, Icon, Progress } from 'rsuite';
import ScriptProgress from './ScriptProgress';

export default class ScriptControl extends Component {
    constructor(props) {
        super(props);
        this.child = React.createRef();
        this.handleScriptClick = this.handleScriptClick.bind(this)
    }


    componentDidMount() {
        console.log(this.props.stepSize)
    }
    handleScriptClick() {
        if (this.props.isRecording) {
            this.props.nextScriptBlock();
            this.child.current.increase();
        }
       
        
    }

    render() {
        const disableButtons = !this.props.isRecording;
        return (
            <Grid fluid style={{ marginTop: '1rem' }}>
                <Row>
                    <Col xsHidden xs={12}>
                        {/* <Progress.Line style={{ marginTop: '.5rem' }} percent={80} showInfo={false} /> */}
                        <ScriptProgress ref={this.child} stepSize={this.props.stepSize} onClickNxt={this.handleScriptClick}/>
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
