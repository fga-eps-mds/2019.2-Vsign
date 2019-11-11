import React, { Component } from 'react';
import { connect} from 'react-redux';
import { redoSignatureAction } from '../../actions/review';
import { IntructionTextBtn } from './styles';
import { Button } from 'rsuite';

class reviewUserVideo extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        this.props.redoSignatureAction();
    }

    render() {
        return (
            <Button appearance='primary' size='md' color='green'  onClick={this.handleClick}>
                <IntructionTextBtn>
                    Regravar o vídeo
                </IntructionTextBtn>
            </Button>
        );
    }
}

const mapDispatchToProps = {
    redoSignatureAction
};

export default connect(null, mapDispatchToProps)(reviewUserVideo);
