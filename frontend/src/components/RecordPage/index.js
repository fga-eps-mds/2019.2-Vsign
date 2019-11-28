import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { setSignatureAssetsAction } from '../../actions/record';
// eslint-disable-next-line
import { ScriptBlock, ScriptBlockNextBtnText } from "./styles";
import Tour from 'reactour';
import Navbar from '../Shared/Navbar';
import SigningSteps from '../Shared/SigningSteps';
import ScriptProgress from './ScriptProgress';
import ActionButtons from './ActionButtons';
import ScriptControl from './ScriptControl';
import AudioRecording from './AudioRecording';
import Video from './Video';

class RecordPage extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            scriptBlock: [],
            scriptPosition: 1,
            isTourOpen: false

        }

        this._nextScriptBlock = this._nextScriptBlock.bind(this);
    }


    startRecording = () => {
        this.setState({
            record: true
        });
    }

    stopRecording = () => {
        this.setState({
            record: false
        });
    }

    returnScriptProgress = () => {
        const stepSize = ((this.state.scriptBlock).length) / 100
        return < ScriptProgress stepSize={stepSize} />
    }

    _startTour = () => {
        this.setState({ isTourOpen: true })
    }
    closeTour = () => {
        this.setState({ isTourOpen: false })
    }
    _nextScriptBlock = () => {
        const scriptBlock = this.props.script
        for (let i = 0; i <= scriptBlock.length; i++) {
            if (this.state.scriptPosition === i) {
                this.setState({ scriptPosition: this.state.scriptPosition + 1 })
            } else if (this.state.scriptPosition === scriptBlock.length) {
                this.stopRecording();
            }
        }
    }
    render() {
        const stepSize = (100 / (this.props.script).length)
        const steps = [
            {
                selector: '[data-tour="step0"]',
                content: 'Aqui é onde você gravará seu vídeo de assinatura'
            },
            {
                selector: '[data-tour="step1"]',
                content: 'Aqui é onde você deve aparecer para gravar!',
            },
            {
                selector: '[data-tour="step2"]',
                content: 'Posicione sempre seu rosto dentro da marcação',
            },
            {
                selector: '[data-tour="step3"]',
                content: 'Nesses botões você inicia a gravacão e revê as dicas, ',
            },
            {
                selector: '[data-tour="step4"]',
                content: 'mas não se preocupe, aqui você poderá ler seu roteiro',
            },
            {
                selector: '[data-tour="step5"]',
                content: 'e passar para o próximo bloco aqui e no fim de tudo revise seu video na proxima etapa!!',
            },
        ];

        // let textNext;
        // if (this.state.scriptPosition === (this.state.scriptBlock.length)) {
        //     textNext = <ScriptBlockNextBtnText>Revisar</ScriptBlockNextBtnText>;
        // } else {
        //     textNext = <ScriptBlockNextBtnText> Proximo {this.state.scriptPosition}</ScriptBlockNextBtnText>;
        // }

        let scriptText;
        if (this.state.scriptPosition > 0) {
            var index = this.state.scriptPosition - 1
            scriptText = <ScriptBlock> {this.props.script[index]}</ScriptBlock>
        }

        const accentColor = 'linear-gradient(to right, #1c8f9e, #5cb7b7)';

        return (
            <Fragment>
                <Navbar />
                <SigningSteps />
                <div className="container mt-5" data-tour='step0'>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <Video record={this.state.record} />
                            <AudioRecording record={this.state.record} />
                        </div>
                        <div className="col-12 col-md-6">
                            <div data-tour='step3'>
                                <ActionButtons
                                    record={this.startRecording}
                                    startTour={this._startTour}
                                    isRecording={this.state.record}
                                />
                            </div>
                            <div className="card" data-tour='step4'>
                                <div className="card-body">
                                    <p>{scriptText}</p>
                                </div>
                            </div>
                            <div data-tour='step5'>
                                <ScriptControl
                                    isRecording={this.state.record}
                                    nextScriptBlock={this._nextScriptBlock}
                                    stepSize={stepSize}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <Tour
                    steps={steps}
                    isOpen={this.state.isTourOpen}
                    onRequestClose={this.closeTour}
                    onBeforeClose={target => (document.body.style.overflowY = 'auto')}
                    maskClassName="mask"
                    className="helper"
                    rounded={5}
                    accentColor={accentColor} />
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    script: JSON.parse(state.contract.script)
});

const mapDispatchToProps = {
    setSignatureAssetsAction
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RecordPage));
