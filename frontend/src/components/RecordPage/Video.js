import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { setSignatureAssetsAction } from '../../actions/record';
import { Player, PlayerFocus } from "./styles.js"
import 'video.js/dist/video-js.css';
import videojs from 'video.js';
import 'webrtc-adapter';
import RecordRTC from 'recordrtc';
import 'videojs-record/dist/css/videojs.record.css';
// eslint-disable-next-line
import Record from 'videojs-record/dist/videojs.record.js';
import '@mattiasbuelens/web-streams-polyfill/dist/polyfill.min.js';
import 'videojs-record/dist/plugins/videojs.record.webm-wasm.js';
import 'videojs-record/dist/plugins/videojs.record.ts-ebml.js';

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


class RecordPage extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            scriptPosition: 1,
            signatureVideo: null,
            signatureAudio: null,
            signatureImage: [],
            isTourOpen: false

        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.record !== this.props.record) {
            if (this.props.record) {
                this.startRecording();
            } else {
                this.stopRecording();
            }
        }
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

        // // device is ready
        // this.player.on('deviceReady', () => {
        // });

        // user clicked the record button and started recording
        this.player.on('startRecord', () => {
            // this.startRecording();
        });

        // user completed recording and stream is available
        this.player.on('finishRecord', () => {
            this.setState({ signatureVideo: this.player.recordedData })
            this._getTimeStamps();
            let last = this.player.recordedData
            var binaryData = [];
            binaryData.push(last);
            let url = ""
            url = URL.createObjectURL(new Blob(binaryData, { type: "video/webm" }));

            this.props.setSignatureAssetsAction({
                url,
                video: this.state.signatureVideo,
                images: this.state.signatureImage,
            });

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

    componentWillUnmount() {
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
        this.player.record().start();
    }
    
    stopRecording = () => {
        this.player.record().stop();
    }

    onData(recordedBlob) {
        // console.log('chunk of real-time data is: ', recordedBlob);
    }

    onStop = (recordedBlob) => {

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

    // Trigger para início da gravação.
    _record = () => {
        this.player.record().start();
        console.log("era pra dar play")
    }

    stopTheRecording() {
        this.player.record().stop();
    }

    _goToReviewVideo = async () => {
        this.stopTheRecording();
        // this._getTimeStamps()

        // // Now navigate do review screen video
        // // remember to pass the data
    }

    render() {
        return (
            <Player >
                <div data-vjs-player>
                    <video data-tour='step1' style={{ backgroundColor: "#556073" }} ref={node => this.videoNode = node} className="video-js vjs-default-skin" playsInline>
                    </video>
                    <PlayerFocus data-tour='step2' />
                </div>
            </Player>
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
