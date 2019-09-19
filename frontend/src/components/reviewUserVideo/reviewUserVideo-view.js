import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import {Container} from './styled_components_review.js';

class reviewUserVideo extends Component {
    constructor(props) {
        super(props);
        this.state = {
        
        }
    }
    render() {
        return (
            <div>
                <Container>
                    bla bla revisar
                </Container>
            </div>
        )
    }
}

export default withRouter(reviewUserVideo)