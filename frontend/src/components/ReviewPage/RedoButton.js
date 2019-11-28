import React, { Component } from 'react';
import { connect} from 'react-redux';
import { redoSignatureAction } from '../../actions/review';

class ReviewPage extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        this.props.redoSignatureAction();
    }

    render() {
        return (
            <button className="btn btn-warning btn-block mb-3" onClick={this.handleClick}>Regravar o vídeo</button>
        );
    }
}

const mapDispatchToProps = {
    redoSignatureAction
};

export default connect(null, mapDispatchToProps)(ReviewPage);
