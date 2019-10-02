import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components'
import {
    Container,
    RowOnTop,
    IntructionTextBtn,
    InstructionBtn,
    VideoDiv,
    ScriptBlock,
    ScriptBlockDiv,
    ScriptBlockNextBtn,
    ScriptBlockNextBtnText,
    NextBtnDiv,
    SquareDiv
} from "./styles.js"
import { ReactMic } from 'react-mic';
import 'video.js/dist/video-js.css';
import videojs from 'video.js';
import 'webrtc-adapter';
import RecordRTC from 'recordrtc';
import 'videojs-record/dist/css/videojs.record.css';
import Record from 'videojs-record/dist/videojs.record.js';
import '@mattiasbuelens/web-streams-polyfill/dist/polyfill.min.js';
import 'videojs-record/dist/plugins/videojs.record.webm-wasm.js';
import 'videojs-record/dist/plugins/videojs.record.ts-ebml.js';
import { ButtonGroup, Button, FlexboxGrid, Content, Col, Panel, Icon, Progress } from 'rsuite';
import Navbar from './Navbar';
import SigningSteps from '../Shared/SigningSteps';
import 'rsuite/dist/styles/rsuite-default.css';
import ScriptProgress from './ScriptProgress.js';
import ActionButtons from './ActionButtons.js';
import ScriptControl from './ScriptControl.js';
const videoJsOptions = {
    controls: false,
    screen: true,
    image: true,
    width: 852,
    height: 521,
    fluid: true,
    plugins: {
        record: {
            timeSlice: 2000,
            audio: true,
            video: true,
            maxLength: 10,
            debug: true,
            // convertEngine: 'ts-ebml',
            convertEngine: 'ts-ebml',
            // convert recorded data to MP3
            convertOptions: ['-f', 'mp3', '-codec:a', 'libmp3lame', '-qscale:a', '2'],
            // specify MP3 output mime-type
            pluginLibraryOptions: {
                outputType: 'audio/mp3'
            },
            // use MP4 encoding worker (H.264 & AAC & MP3 encoders)
            // convertWorkerURL: '../../node_modules/ffmpeg.js/ffmpeg-worker-mp4.js'
            // or use WebM encoding worker (VP8 & Opus encoders)
            convertWorkerURL: '../../node_modules/ffmpeg.js/ffmpeg-worker-webm.js',
        }
    }
}


class recordUserVideo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scriptBlock: ["Bloco de roteiro 0Bloco de roteiro 0Bloco de roteiro 0Bloco de roteiro 0", "Bloco de roteiro 1", "Bloco de roteiro 2", "Bloco de roteiro 3", "Bloco de roteiro 4"],
            scriptPosition: 1,
            signatureVideo: null,
            signatureAudio: null,
            signatureImage: [],
            recordAudio: false,
            maxTime: 10
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
            this.startRecording()
            // this._getTimeStamps()
        });

        // user completed recording and stream is available
        this.player.on('finishRecord',  () => {
            // console.log(typeof (this.player.recordedData));
            // console.log(this.player.recordedData);
            // var blobUrl = URL.createObjectURL(this.player.recordedData);
            // console.log(blobUrl)
            this.stopRecording()
            this.setState({signatureVideo: this.player.recordedData})
            this._getTimeStamps();
            // console.log(this.state.signatureVideo)
            // console.log(this.player.recordedData)
            let last = this.player.recordedData
            // console.log("Going to review video")
            var binaryData = [];
            binaryData.push(last);
            let url = ""
            url = URL.createObjectURL(new Blob(binaryData, {type: "video/webm"}));
            
            console.log("Audio:::")
            console.log(this.state.signatureAudio)
            // this.props.history.push({
            //     pathname: '/review',
            //     state: { 
            //         signatureAudio: this.state.signatureAudio,
            //         signatureVideo: this.state.signatureVideo,
            //         signatureImage: this.state.signatureImage,
            //         url: url
            //     }
            // })
        });

        // error handling
        this.player.on('error', (element, error) => {
            console.log(error)
        });

        this.player.on('deviceError', () => {
            console.error('device error:', this.player.deviceErrorCode);
        });
        this.player.record().getDevice();

    }

    // destroy player on unmount
    componentWillUnmount() {
        // console.log(this.state.signatureVideo)
        if (this.player) {
            this.player.dispose();
        }
    }

    getVideoImage = (path, secs, callback) => {
        var me = this, video = document.createElement('video');
        video.onloadedmetadata = function () {
            if ('function' === typeof secs) {
                secs = secs(this.duration);
            }
            this.currentTime = Math.min(Math.max(0, (secs < 0 ? this.duration : 0) + secs), this.duration);
        };
        video.onseeked = function (e) {
            var canvas = document.createElement('canvas');
            canvas.height = video.videoHeight;
            canvas.width = video.videoWidth;
            var ctx = canvas.getContext('2d');
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            var img = "";
            img = canvas.toDataURL();
            callback.call(me, img, this.currentTime, e);
        };
        video.onerror = function (e) {
            callback.call(me, undefined, undefined, e);
        };
        video.src = path;
    }


    _getTimeStamps = async () => {
        var createObjectURL = (window.URL || window.webkitURL || {}).createObjectURL || function () { };
        const blobUrl = createObjectURL(this.player.recordedData)

        const duration = parseInt(this.player.record().getDuration());
        console.log(duration)
        for (let time = 0; time < duration; time++) {
            this.getVideoImage(blobUrl, time ,(img, secs, event) => {
                const signatureImageAux = this.state.signatureImage
                signatureImageAux.push(img)
                this.setState({ signatureImage: signatureImageAux })
                // console.log(img)
            })  
        }

        console.log(this.state.signatureImage)
        

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
     
      onData(recordedBlob) {
        // console.log('chunk of real-time data is: ', recordedBlob);
      }
      
      onStop =  (recordedBlob) => {
        console.log('recordedBlob is of the audio: ', recordedBlob);
        
        this.setState({signatureAudio: recordedBlob})

        console.log("Signature audio is:", this.state.signatureAudio)
        let last = this.state.signatureVideo
        var binaryData = [];
        binaryData.push(last);
        let url = ""
        url = URL.createObjectURL(new Blob(binaryData, {type: "video/webm"}));
        this.props.history.push({
            pathname: '/review',
            state: { 
                signatureAudio: this.state.signatureAudio,
                signatureVideo: this.state.signatureVideo,
                signatureImage: this.state.signatureImage,
                url: url
            }
        })
      }

      returnScriptProgress = () => {
          const stepSize = ((this.state.scriptBlock).length)/100
          return < ScriptProgress stepSize={stepSize}/>
      }

    _goToIntructions = () => {
        this.stopTheRecording()
        console.log("Going to intructions screen")
        //Go to intructions screen
        console.log(this.state.signatureImage)
    }

    _record = () => {
        this.player.record().start();
        console.log("era pra dar play")
    }

    _fetchScriptBlock = () => {
        // Function to fetch the script block on the API
        console.log("Get the script block user data")
    }

    stopTheRecording() {
        this.player.record().stop();
    }

    _goToReviewVideo = async () => {
        this.stopTheRecording()
        // this._getTimeStamps()
        
        // // Now navigate do review screen video
        // // remember to pass the data
    }

    _nextScriptBlock = () => {
        const scriptBlock = this.state.scriptBlock
        for (let i = 0; i <= scriptBlock.length; i++) {
            if (this.state.scriptPosition === i) {
                this.setState({ scriptPosition: this.state.scriptPosition + 1 })
            } else if (this.state.scriptPosition === scriptBlock.length) {
                this._goToReviewVideo()
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
        if (this.state.scriptPosition === (this.state.scriptBlock.length)) {
            textNext = <ScriptBlockNextBtnText>Revisar</ScriptBlockNextBtnText>;
        } else {
            textNext = <ScriptBlockNextBtnText> Proximo {this.state.scriptPosition}</ScriptBlockNextBtnText>;
        }

        let scriptText;
        if (this.state.scriptPosition > 0) {
            var index = this.state.scriptPosition - 1
            scriptText = <ScriptBlock> {this.state.scriptBlock[index]}</ScriptBlock>
        }

        return (
            <Container>
                <Navbar />
                <SigningSteps history={this.props.history} />
                <Content>
                    <FlexboxGrid justify="center">
                        <FlexboxGrid.Item colspan={15}>
                            <FlexboxGrid justify="space-around">
                                <FlexboxGrid.Item componentClass={Col} colspan={22} md={10}>
                                    <VideoDiv>
                                        <div data-vjs-player>
                                            <video style={{ backgroundColor: "#556073", width: "150%", height: "150%" }} ref={node => this.videoNode = node} className="video-js vjs-default-skin" playsInline>
                                            </video>
                                            <div style={{display: "none" }}>
                                            <ReactMic
                                                style={{display: "none" }}
                                                record={this.state.record}
                                                className="sound-wave"
                                                onStop={this.onStop}
                                                onData={this.onData}
                                                strokeColor="#000000"
                                                backgroundColor="#FF4081" />
                                            </div>
                                            <SquareDiv />
                                        </div>
                                    </VideoDiv>
                                </FlexboxGrid.Item>
                                <FlexboxGrid.Item componentClass={Col} colspan={22} md={10}>
                                    <ActionButtons
                                        record={this._record}
                                        isRecording={this.state.record}
                                    />
                                    <Panel bordered>
                                        {scriptText}
                                    </Panel>
                                    <ScriptControl 
                                        isRecording={this.state.record}
                                        nextScriptBlock={this._nextScriptBlock}
                                     />
                                </FlexboxGrid.Item>
                            </FlexboxGrid>
                                
                </FlexboxGrid.Item>
                </FlexboxGrid>

                    {/* <FlexboxGrid justify="space-around">

                    </FlexboxGrid.Item>
                    <FlexboxGrid.Item colspan={2}>
                        <Button appearance='primary' size='lg' onClick={() => this._nextScriptBlock()}>   
                            {textNext}
                        </Button>
                    </FlexboxGrid.Item> */}
                    
                </Content>
            </Container>    
        );
    }
}

export default withRouter(recordUserVideo);
