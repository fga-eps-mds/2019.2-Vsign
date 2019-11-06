import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { setSignatureAssetsAction } from '../../actions/record';
import {
    Container,
    VideoDiv,
    ScriptBlock,
    ScriptBlockNextBtnText,
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
import { FlexboxGrid, Content, Col, Panel } from 'rsuite';
import Navbar from './Navbar';
import SigningSteps from '../Shared/SigningSteps';
import 'rsuite/dist/styles/rsuite-default.css';
import ScriptProgress from './ScriptProgress.js';
import ActionButtons from './ActionButtons.js';
import ScriptControl from './ScriptControl.js';
import Tour from 'reactour'
import "./recordUserVideo.css"
import { checkToken, restrictedAccess } from '../../utils/checkToken.js';


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

        if (!checkToken) {
            restrictedAccess(this.props.history)
        }
        
        this.state = {
            scriptBlock: ["Bloco de roteiro 0Bloco de roteiro 0Bloco de roteiro 0Bloco de roteiro 0", "Bloco de roteiro 1", "Bloco de roteiro 2", "Bloco de roteiro 3", "Bloco de roteiro 4"],
            scriptPosition: 1,
            signatureVideo: null,
            signatureAudio: null,
            signatureImage: [],
            recordAudio: false,
            maxTime: 30,
            isTourOpen: false

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
        this.player.on('finishRecord', () => {
            // console.log(typeof (this.player.recordedData));
            // console.log(this.player.recordedData);
            // var blobUrl = URL.createObjectURL(this.player.recordedData);
            // console.log(blobUrl)
            this.stopRecording()
            this.setState({ signatureVideo: this.player.recordedData })
            this._getTimeStamps();
            // console.log(this.state.signatureVideo)
            // console.log(this.player.recordedData)
            let last = this.player.recordedData
            // console.log("Going to review video")
            var binaryData = [];
            binaryData.push(last);
            let url = ""
            url = URL.createObjectURL(new Blob(binaryData, { type: "video/webm" }));

            // console.log("Audio:::")
            // console.log(this.state.signatureAudio)
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
        console.log(((this.state.scriptBlock).length))
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
        for (let time = 0; time < duration; time++) {
            this.getVideoImage(blobUrl, time, (img, secs, event) => {
                const signatureImageAux = this.state.signatureImage;
                signatureImageAux.push(img);
                this.setState({ signatureImage: signatureImageAux })
            })
        }
    }
    startRecording = () => {
        this.setState({
            record: true,
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

    onStop = (recordedBlob) => {
        console.log('recordedBlob is of the audio: ', recordedBlob);

        this.setState({ signatureAudio: recordedBlob })

        console.log("Signature audio is:", this.state.signatureAudio)
        let last = this.state.signatureVideo
        var binaryData = [];
        binaryData.push(last);
        let url = ""
        url = URL.createObjectURL(new Blob(binaryData, { type: "video/webm" }));
        
        this.props.setSignatureAssetsAction({
            url,
            audio: this.state.signatureAudio,
            video: this.state.signatureVideo,
            images: this.state.signatureImage,
        });
    }

    returnScriptProgress = () => {
        const stepSize = ((this.state.scriptBlock).length) / 100
        return < ScriptProgress stepSize={stepSize} />
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

    _startTour = () => {
        this.setState({ isTourOpen: true })
    }
    closeTour = () => {
        this.setState({ isTourOpen: false })
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
        const stepSize = (100 / (this.state.scriptBlock).length)
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


        ]

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

        const accentColor = 'linear-gradient(to right, #1c8f9e, #5cb7b7)';

        return (
            <Container data-tour='step0'>
                <Navbar />
                <SigningSteps />
                <Content>

                    <FlexboxGrid justify="center">
                        <FlexboxGrid.Item componentClass={Col} colspan={52} md={10} >
                            <VideoDiv >
                                <div data-vjs-player>
                                    <video data-tour='step1' style={{ backgroundColor: "#556073" }} ref={node => this.videoNode = node} className="video-js vjs-default-skin" playsInline>
                                    </video>
                                    <div style={{ display: "none" }}>
                                        <ReactMic
                                            style={{ display: "none" }}
                                            record={this.state.record}
                                            className="sound-wave"
                                            onStop={this.onStop}
                                            onData={this.onData}
                                            strokeColor="#000000"
                                            backgroundColor="#FF4081" />
                                    </div>
                                    <SquareDiv data-tour='step2' />
                                </div>
                            </VideoDiv>
                        </FlexboxGrid.Item>
                        <FlexboxGrid.Item componentClass={Col} colspan={22} md={10}>
                            <div data-tour='step3'>
                                <ActionButtons
                                    record={this._record}
                                    startTour={this._startTour}
                                    isRecording={this.state.record}
                                />
                            </div>
                            <Panel bordered data-tour='step4'>
                                {scriptText}
                            </Panel>
                            <div data-tour='step5'>
                                <ScriptControl
                                    isRecording={this.state.record}
                                    nextScriptBlock={this._nextScriptBlock}
                                    stepSize={stepSize}
                                />
                            </div>
                        </FlexboxGrid.Item>
                    </FlexboxGrid>
                </Content>
                <Tour
                    steps={steps}
                    isOpen={this.state.isTourOpen}
                    onRequestClose={this.closeTour}
                    onBeforeClose={target => (document.body.style.overflowY = 'auto')}
                    maskClassName="mask"
                    className="helper"
                    rounded={5}
                    accentColor={accentColor} />
            </Container>
        );
    }
}

const mapStateToProps = {};

const mapDispatchToProps = {
    setSignatureAssetsAction
};

export default withRouter(connect(null, mapDispatchToProps)(recordUserVideo));
