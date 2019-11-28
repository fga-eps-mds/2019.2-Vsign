import React, { Component } from 'react';
import { connect } from 'react-redux';
import { finishSignatureReviewAction } from '../../actions/review';

class FinishButton extends Component {
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
            <button className="btn btn-primary btn-block" onClick={this.handleClick}>Finalizar assinatura</button>
        )
    }
}

const mapDispatchToProps = {
    finishSignatureReviewAction
};

export default connect(null, mapDispatchToProps)(FinishButton);
