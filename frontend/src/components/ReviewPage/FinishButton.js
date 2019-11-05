import React, { Component } from 'react';
import { connect } from 'react-redux';
import { IntructionTextBtn, } from './styles';
import { Button } from 'rsuite';
import { finishSignatureReviewAction } from '../../actions/review';

class reviewUserVideo extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        this.props.finishSignatureReviewAction();
    }

    render() {
        return (
            <Button appearance='primary' size='md' color='blue'  onClick={this.handleClick}>
                <IntructionTextBtn>
                    Finalizar assinatura 
                </IntructionTextBtn>  
            </Button>
        )
    }
}

const mapDispatchToProps = {
    finishSignatureReviewAction
};

export default connect(null, mapDispatchToProps)(reviewUserVideo);
