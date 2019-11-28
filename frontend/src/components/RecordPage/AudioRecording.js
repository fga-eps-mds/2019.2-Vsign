import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { setSignatureAssetsAction } from '../../actions/record';

// eslint-disable-next-line
URL = window.URL || window.webkitURL;
var gumStream; 						
var rec; 							
var input;

// shim for AudioContext when it's not avb. 
var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioContext;

class AudioRecording extends Component {
    constructor(props) {
        super(props);
        this.handleWAV = this.handleWAV.bind(this);
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
   
    startRecording = () => {
        console.log("recordButton clicked");

        /*
            Simple constraints object, for more advanced audio features see
            https://addpipe.com/blog/audio-constraints-getusermedia/
        */
        
        var constraints = { audio: true, video:false }

        /*
            We're using the standard promise based getUserMedia() 
            https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
        */

        navigator.mediaDevices.getUserMedia(constraints).then(function(stream) {
            console.log("getUserMedia() success, stream created, initializing Recorder.js ...");

            /*
                create an audio context after getUserMedia is called
                sampleRate might change after getUserMedia is called, like it does on macOS when recording through AirPods
                the sampleRate defaults to the one set in your OS for your playback device
            */
            audioContext = new AudioContext();

            gumStream = stream;
            
            /* use the stream */
            input = audioContext.createMediaStreamSource(stream);

            /* 
                Create the Recorder object and configure to record mono sound (1 channel)
                Recording 2 channels  will double the file size
            */
            
            // eslint-disable-next-line
            rec = new Recorder(input,{numChannels:1})

            //start the recording process
            rec.record()

            console.log("Recording started");

        }).catch(function(err) {
            // Não foi possível iniciar gravação.

        });
    }

    stopRecording = () => {
        console.log("stopButton clicked");
    
        //tell the recorder to stop the recording
        rec.stop();
    
        //stop microphone access
        gumStream.getAudioTracks()[0].stop();
    
        //create the wav blob and pass it on to createDownloadLink
        rec.exportWAV(this.handleWAV);
    }


    handleWAV(blob) {
        this.props.setSignatureAssetsAction({
            audio: blob
        });
        // console.log(blob);
        var url = URL.createObjectURL(blob);
        console.log({ ...blob, url });
    }

    render() {
        return <Fragment />
    }
}

const mapStateToProps = (state) => ({});

const dispatchStateToProps = {
    setSignatureAssetsAction
};

export default connect(mapStateToProps, dispatchStateToProps)(AudioRecording);