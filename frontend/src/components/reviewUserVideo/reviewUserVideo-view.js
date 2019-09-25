import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import {Container,
        VideoDivReview, 
        ScriptBlockDivReview, 
        BtnDivRedo,
        BtnDivEnd,
        Parent,
        ScriptBlockBtn,
        ScriptBlockStartBtn,
        ScriptBlockPauseBtn,
        ScriptBlockRestartBtn,
        SpecialContainer,
        FinishSignatureText,
        RestartRecordingText
    } from './styled_components_review.js';
class reviewUserVideo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signatureVideo: {},
            signatureAudio: {}
        }
        this._getTheSignatureObjects = this._getTheSignatureObjects.bind(this);
    }

    componentDidMount(){
        this._getTheSignatureObjects();
    
    }

    componentWillMount() {
        this._getTheSignatureObjects();

    }    

    _startVideo = () =>{

    }
    _pauseVideo = () =>{
        
    }
    _restartVideo = () =>{
        
    }
    _endTheOperation = () => {
        
    }
    _redoTheOperation = () => {   
    }

    _getTheSignatureObjects = () => {
        // console.log(this.props.location)
        const signatureAudioAux = this.props.location.state.signatureAudio
        const signatureVideoAux = this.props.location.state.signatureVideo
        // console.log(signatureAudioAux)
        // console.log(signatureVideoAux)
        this.setState({
            signatureAudio: signatureAudioAux,
            signatureVideo: signatureVideoAux
        })
        // console.log(this.state.signatureAudio)
        console.log(this.state.signatureVideo)
        
    }
    
    render() {
        const signatureVideo = this.state.signatureVideo
        const videoConfig = {

        }
        const url = URL.createObjectURL(signatureVideo);
        return (
            <div>
                <Container>
                    <Parent>
                        <SpecialContainer>
                            <VideoDivReview>
                                <video controls autoplay name="media">
                                    <source src={url} type="video/webm" />
                                </video>
                            </VideoDivReview>
                            <Parent>
{/*                             
                                <ScriptBlockStartBtn onClick={() => this._startVideo()}>
                                            
                                </ScriptBlockStartBtn>
                                <ScriptBlockPauseBtn onClick={() => this._pauseVideo()}>
                                        
                                </ScriptBlockPauseBtn>
                                <ScriptBlockRestartBtn onClick={() => this._restartVideo()}>
                                        
                                </ScriptBlockRestartBtn>
                             */}
                            </Parent>
                            <BtnDivRedo>
                                <ScriptBlockBtn onClick={() => this._endTheOperation()}>
                                    <FinishSignatureText>
                                        Finalizar assinatura
                                    </FinishSignatureText>
                                </ScriptBlockBtn>
                            </BtnDivRedo>
                       
                        </SpecialContainer>
                        <SpecialContainer>
                            <ScriptBlockDivReview>

                            </ScriptBlockDivReview>
                            <BtnDivEnd>
                                <ScriptBlockBtn onClick={() => this._redoTheOperation()}>
                                    <RestartRecordingText>
                                        Desejo regravar o vídeo
                                    </RestartRecordingText>
                                </ScriptBlockBtn>
                            </BtnDivEnd>
                        </SpecialContainer>
                    </Parent>

                </Container>
            </div>
        )
    }
}

export default withRouter(reviewUserVideo);