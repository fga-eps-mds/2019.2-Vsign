import React, { Component } from 'react';
import { connect} from 'react-redux';
import { VideoDivReview } from './styles';

class reviewUserVideo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { video } = this.props;
        return (
            <VideoDivReview>
                <video controls autoPlay name="media">
                    <source src={video} type="video/webm" />
                </video>
            </VideoDivReview>
        );
    }
}

const mapStateToProps = (state) => ({
    video: state.record.url
});

export default connect(mapStateToProps)(reviewUserVideo);
