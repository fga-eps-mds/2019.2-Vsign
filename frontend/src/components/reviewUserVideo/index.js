import React, { Component } from 'react';
import { connect} from 'react-redux';
import {
    VideoDivReview,
    ScriptBlockDivReview,
    SpecialContainer,
    IntructionTextBtn,
    
} from './styles.js';
import { Button, FlexboxGrid, Container, Content, Panel, ButtonGroup } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import SigningSteps from '../Shared/SigningSteps';
import Navbar from './Navbar';
// import { attachContractFilesMutation } from '../../graphql/mutations';
// import { directUpload, getFileMetadata } from '../../utils/activestorage';
// import { upload } from './services';
import FinishButton from './FinishButton.js';
import { finishSignatureReviewAction } from '../../actions/review';


class reviewUserVideo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            files: {},
            signatureVideo: {},
            signatureAudio: {},
            signatureImage: [],
            ScriptBlock: ['djangiagshabog h gha ghuaw ghar gha rgh awrgh aw', 'hebfa uhf w fuah g sF WF WEYFBAHBGAHAW F F WAF AWBG', 'ahbargb bgobae bergaebg rbaehbeagbaeor']
        }
        this._getTheSignatureObjects = this._getTheSignatureObjects.bind(this);
    }

    componentDidMount() {
        this._getTheSignatureObjects();

    }

    componentWillMount() {
        this._getTheSignatureObjects();

    }

    _endTheOperation = () => {
        this.props.finishSignatureReviewAction();
        // this.props.history.push({
        //     pathname: '/review',
        //     state: {
        //         signatureAudio: this.state.signatureAudio,
        //         signatureVideo: this.state.signatureVideo
        //     }
        // });
        // await this._uploadAudio();
        // await this._uploadImages();
        // await this._uploadVideo();

        // this._attachContactFiles();
    }

    // _attachContactFiles = async () => {
    //     try {
    //         const variables = {
    //             contractId: 1,
    //             files: this.state.files
    //         };
    //         const attachment = await attachContractFilesMutation(variables);
    //     } catch (err) {
    //         console.log("Não foi possível anexar os arquivos ao contrato.");
    //     }
    // }

    // _uploadVideo = async () => {
    //     console.log('aaaa');
    //     const file = this.state.signatureVideo;
    //     const { signedBlobId } = await upload(file);
    //     console.log(signedBlobId);
    //     this.setState({
    //         files: {
    //             ...this.state.files,
    //             video: signedBlobId
    //         }
    //     });
    // }

    // _uploadAudio = async () => {
    //     console.log('upload audio');
    //     const file = this.state.signatureAudio;
    //     console.log(file);
    //     const { signedBlobId } = await upload(file);
    //     console.log(signedBlobId);
    //     this.setState({
    //         files: {
    //             ...this.state.files,
    //             audio: signedBlobId
    //         }
    //     });
    // }

    // _uploadImages = async () => {
    //     const image_array_size = this.state.signatureImage.length
    //     let image_to_upload = []
    //     for (let index = 0; index < 3; index++) {
    //         const randomIndex = Math.floor(Math.random() * (image_array_size - 1 ));   
    //         const image_to_push = this.state.signatureImage[randomIndex]
    //         image_to_upload.push(image_to_push)
    //     }

    //     const ref = this;
    //     image_to_upload.map( async (image) => {
    //         let { signedBlobId } = await upload(image);
    //         ref.setState({
    //             files: {
    //                 ...ref.state.files,
    //                 images: [
    //                     ...ref.state.images, signedBlobId
    //                 ]
    //             }
    //         });
    //     })
    // }

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
            signatureImage: signatureImageAux,
        })
        // console.log(this.state.signatureAudio)
        console.log(this.state.signatureVideo)

    }

    _setUrlForTheVideo = () => {
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

                    <Navbar />
                    <SigningSteps history={this.props.history} />
                    <Content>
                        <FlexboxGrid justify="center">
                            <FlexboxGrid.Item   >
                                    <VideoDivReview>
                                        <video controls autoPlay name="media">
                                            <source src={url} type="video/webm" />
                                        </video>
                                    </VideoDivReview>
                            </FlexboxGrid.Item>
                            <FlexboxGrid.Item >
                                <SpecialContainer>
                                    <ScriptBlockDivReview>
                                        <Panel bordered expanded>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non sem sed erat luctus cursus congue in eros. Etiam venenatis dui at faucibus commodo. Etiam vel finibus erat, a dapibus purus. Integer pharetra vulputate enim, non elementum urna faucibus non. In vel tellus bibendum, tincidunt dolor ut, posuere urna. Integer tempor, augue vitae molestie tincidunt, tortor dolor facilisis ante, non mollis mi purus scelerisque arcu. Proin quis risus non nibh placerat bibendum a id diam. Nullam sollicitudin rutrum euismod. Fusce vitae malesuada eros. Donec sollicitudin luctus ex id blandit. In orci ex, posuere gravida eleifend eget, sodales et nisi. Donec augue lorem, iaculis eget bibendum ut, aliquam non sapien. Vivamus quis mi tristique, imperdiet dolor ut, pretium ipsum. Nam ex risus, dignissim ut accumsan rhoncus, congue a erat.
                                        </Panel>
                                    </ScriptBlockDivReview>
                                
                                    <ButtonGroup justified>
                                        <Button appearance='primary' size='md' color='green'  onClick={() => this._redoTheOperation()}>
                                            <IntructionTextBtn>
                                                Regravar o vídeo
                                            </IntructionTextBtn>
                                        </Button>
                                        <FinishButton />  
                                    </ButtonGroup>  

                                </SpecialContainer>
                            </FlexboxGrid.Item>
                            
                        </FlexboxGrid>
                        
                        
                    </Content>

                </Container>
            </div>
        )
    }
}

const mapStateToProps = {};
const mapDispatchToProps = {
    finishSignatureReviewAction
};

export default connect(mapStateToProps, mapDispatchToProps)(reviewUserVideo);
