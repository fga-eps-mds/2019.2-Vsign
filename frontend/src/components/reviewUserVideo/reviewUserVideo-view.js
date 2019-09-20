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
        SpecialContainer} from './styled_components_review.js';

class reviewUserVideo extends Component {
    constructor(props) {
        super(props);
        this.state = {
        
        }
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
    render() {
        return (
            <div>
                <Container>
                    <Parent>
                        <SpecialContainer>
                            <VideoDivReview>

                            </VideoDivReview>
                            <Parent>
                            
                                <ScriptBlockStartBtn onClick={() => this._startVideo()}>
                                            
                                </ScriptBlockStartBtn>
                                <ScriptBlockPauseBtn onClick={() => this._pauseVideo()}>
                                        
                                </ScriptBlockPauseBtn>
                                <ScriptBlockRestartBtn onClick={() => this._restartVideo()}>
                                        
                                </ScriptBlockRestartBtn>
                            
                            </Parent>
                            <BtnDivRedo>
                                <ScriptBlockBtn onClick={() => this._endTheOperation()}>
                                    
                                </ScriptBlockBtn>
                            </BtnDivRedo>
                       
                        </SpecialContainer>
                        <SpecialContainer>
                            <ScriptBlockDivReview>

                            </ScriptBlockDivReview>
                            <BtnDivEnd>
                                <ScriptBlockBtn onClick={() => this._redoTheOperation()}>
                                    
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