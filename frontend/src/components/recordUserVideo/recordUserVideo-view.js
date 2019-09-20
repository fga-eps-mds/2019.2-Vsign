import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
import styled from 'styled-components'
import { Container, 
         RowOnTop, 
         IntructionTextBtn, 
         InstructionBtn, 
         VideoDiv, 
         ScriptBlock, 
         ScriptBlockDiv , 
         ScriptBlockNextBtn, 
         ScriptBlockNextBtnText, 
         NextBtnDiv
        } from "./styled_components.js"

import 'video.js/dist/video-js.css';
import videojs from 'video.js';
import 'webrtc-adapter';
import RecordRTC from 'recordrtc';
import 'videojs-record/dist/css/videojs.record.css';
import Record from 'videojs-record/dist/videojs.record.js';

const videoJsOptions = {
    controls: false,
    screen: true,
    width: 852,
    height: 521,
    fluid: false,
    plugins: {
        /*
        // wavesurfer section is only needed when recording audio-only
        wavesurfer: {
            src: 'live',
            waveColor: '#36393b',
            progressColor: 'black',
            debug: true,
            cursorWidth: 1,
            msDisplayMax: 20,
            hideScrollbar: true
        },
        */
        record: {
            audio: true,
            video: true,
            maxLength: 10,
            debug: true
        }
    }
};

class recordUserVideo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scriptBlock: ["Bloco de roteiro 0", "Bloco de roteiro 1", "Bloco de roteiro 2", "Bloco de roteiro 3", "Bloco de roteiro 4"],
            scriptPosition: 1
        }

        this._nextScriptBlock = this._nextScriptBlock.bind(this);
    }

    
    componentDidMount() {
        // instantiate Video.js
        this.player = videojs(this.videoNode, videoJsOptions, () => {
            // print version information at startup
            var version_info = 'Using video.js ' + videojs.VERSION +
                ' with videojs-record ' + videojs.getPluginVersion('record') +
                ' and recordrtc ' + RecordRTC.version;
            videojs.log(version_info);
        });

        // device is ready
        this.player.on('deviceReady', () => {
            console.log('device is ready!');
        });

        // user clicked the record button and started recording
        this.player.on('startRecord', () => {
            console.log('started recording!');
        });

        // user completed recording and stream is available
        this.player.on('finishRecord', () => {
            // recordedData is a blob object containing the recorded data that
            // can be downloaded by the user, stored on server etc.
            console.log('finished recording: ', this.player.recordedData);
        });

        // error handling
        this.player.on('error', (element, error) => {
            console.warn(error);
        });

        this.player.on('deviceError', () => {
            console.error('device error:', this.player.deviceErrorCode);
        });

        // this.player.record().getDevice();
    }

    // destroy player on unmount
    componentWillUnmount() {
        if (this.player) {
            this.player.dispose();
        }
    }

    handleClick = () => {
        console.log("Go to instructions")
    }
        _record = () => {
            
            this.player.record().start()
            
                console.log("era pra dar play")

        }
    
    _nextScriptBlock = async () => {
        const scriptBlock = this.state.scriptBlock 
         for (let i = 0; i < scriptBlock.length; i++) {
             if (this.state.scriptPosition === i) {
                this.setState({ scriptPosition: this.state.scriptPosition+1 })
             }
         }
         console.log(this.state.scriptBlock[this.state.scriptPosition])
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
        let textNext;
        if (this.state.scriptPosition === (this.state.scriptBlock.length )) {
            textNext = <ScriptBlockNextBtnText>Revisar</ScriptBlockNextBtnText>;
        }else {
            textNext = <ScriptBlockNextBtnText> Passo {this.state.scriptPosition}</ScriptBlockNextBtnText>;
        }

        let scriptText;
        if (this.state.scriptPosition > 0) {
            var index = this.state.scriptPosition -1
            scriptText = <ScriptBlock> {this.state.scriptBlock[index]}</ScriptBlock>
        }

        return (
            <div>
                <Container>
                    <RowOnTop>
                        <InstructionBtn>
                            <div onClick={() => { this.handleClick() }} x>
                                <IntructionTextBtn>
                                    Ver instruções
                        </IntructionTextBtn>
                            </div>
                        </InstructionBtn>
                        {/* <RecordingAlert>
                            <IntructionTextBtn> Gravando </IntructionTextBtn>
                        </RecordingAlert> */}

                    </RowOnTop>
                    <VideoDiv>
                        <div data-vjs-player>
                            <video style={{backgroundColor: "white"}} ref={node => this.videoNode = node} className="video-js vjs-default-skin" playsInline>

                            </video>
                        </div>
                    </VideoDiv>
                    <ScriptBlockDiv>
                        {scriptText}
                    </ScriptBlockDiv>
                    <NextBtnDiv>
                        <ScriptBlockNextBtn onClick={() => this._nextScriptBlock()}>
                                {textNext}
                        </ScriptBlockNextBtn>
                    </NextBtnDiv>
                </Container>    
            </div>
        );
    }
}

export default withRouter(recordUserVideo);
