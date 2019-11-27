import React, { Component } from 'react';
import { Grid, IconButton, Row, Col, Icon} from 'rsuite';
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
            <div className="row mt-3">
                <div className="col-8">
                    <ScriptProgress ref={this.child} stepSize={this.props.stepSize} />
                </div>
                <div className="col-4 pl-0">
                    <button
                        className="btn btn-primary btn-block"
                        placement="right"
                        onClick={this.handleScriptClick}
                        icon={<Icon icon="forward" />}
                        disabled={disableButtons}
                        block
                    >Avançar</button>
                </div>
            </div>
        );          
    }
}
