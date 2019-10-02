import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import {Container,
        VideoDivReview, 
        ScriptBlockDivReview, 
        Parent,
        ScriptBlock,
        SpecialContainer,
        FinishSignatureText,
        RestartRecordingText,
        Space
        } from './styled_components_review.js';
import {Button, FlexboxGrid} from 'rsuite';
import SigningSteps from '../Shared/SigningSteps';
import 'rsuite/dist/styles/rsuite-default.css';


class reviewUserVideo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signatureVideo: {},
            signatureAudio: {},
            signatureImage: []
        }
        this._getTheSignatureObjects = this._getTheSignatureObjects.bind(this);
    }

    componentDidMount(){
        this._getTheSignatureObjects();
    
    }

    componentWillMount() {
        this._getTheSignatureObjects();

    }    

    _endTheOperation = () => {
        this.props.history.push({
            pathname: '/review',
            state: { 
                signatureAudio: this.state.signatureAudio,
                signatureVideo: this.state.signatureVideo
             }
        })
        
    }
    _redoTheOperation = () => {   
        this.props.history.push({
            pathname: '/record',
            state: { 
                signatureAudio: null,
                signatureVideo: null
             }
        })
    }

    _getTheSignatureObjects = () => {
        console.log(this.props.location)
        const signatureAudioAux = this.props.location.state.signatureAudio
        const signatureVideoAux = this.props.location.state.signatureVideo
        const signatureImageAux = this.props.location.state.signatureImage
        // console.log(signatureAudioAux)
        // console.log(signatureVideoAux)
        this.setState({
            signatureAudio: signatureAudioAux,
            signatureVideo: signatureVideoAux,
            signatureImage: signatureImageAux
        })
        // console.log(this.state.signatureAudio)
        console.log(this.state.signatureVideo)
        
    }
    
    _setUrlForTheVideo =  () => {
        let url = ""
        const videoAux = this.state.signatureVideo
        // var createObjectURL = (window.URL || window.webkitURL || {}).createObjectURL || function () { };
        // const url = createObjectURL(this.state.signatureVideo);
        url = URL.createObjectURL(videoAux);
        return url
    }

    render() {     
        const url = this.props.location.state.url

        return (
            <div>
                <Container>
                    <SigningSteps history={this.props.history} />
                    <Parent>
                        <SpecialContainer>
                            <VideoDivReview>
                                <video controls autoPlay name="media">
                                    <source src={url} type="video/webm" />
                                </video>
                            </VideoDivReview>
                            
                       
                        </SpecialContainer>
                        <SpecialContainer>
                            <ScriptBlockDivReview>
                                <ScriptBlock>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper, felis in commodo aliquet, nisl dui fringilla urna, vel commodo nibh tortor nec est. Integer venenatis, justo semper blandit rhoncus, metus neque pretium massa, quis aliquam quam orci id lacus. Phasellus in quam at tortor commodo ullamcorper id vel ligula. Curabitur tristique tortor sed tellus dignissim, et vestibulum massa dapibus. Phasellus tincidunt feugiat orci vitae ultrices. Suspendisse potenti. Sed enim lacus, ultricies vitae finibus in, placerat non nunc. Pellentesque dictum purus tempus, fermentum ante non, lobortis ex. Mauris malesuada nulla non nibh lacinia, at dapibus ante molestie. Pellentesque consectetur turpis ligula. Nullam et purus feugiat, hendrerit lectus a, convallis lacus.
                                </ScriptBlock>
                            </ScriptBlockDivReview>
                            
                            
                        </SpecialContainer>
                    </Parent>
                    
                        
                   
                </Container>
                
                <FlexboxGrid justify="space-around">
                    <FlexboxGrid.Item colspan={2}>
                        <Button appearance='primary' size='md' onClick={() => this._redoTheOperation()}>
                            <RestartRecordingText>
                                Desejo regravar o vídeo     
                            </RestartRecordingText>                            
                        </Button>

                    </FlexboxGrid.Item>
                    <FlexboxGrid.Item colspan={2}>
                        <Button appearance='primary' size='md' onClick={() => this._endTheOperation()}>   
                            <FinishSignatureText>
                                Finalizar assinatura     
                            </FinishSignatureText>
                        </Button>
                    </FlexboxGrid.Item>
                      
                 </FlexboxGrid>
       
                       
            </div>
        )
    }
}

export default withRouter(reviewUserVideo);
