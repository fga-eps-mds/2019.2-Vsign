import React from 'react';
import { connect} from 'react-redux';
import { VideoDivReview } from './styles';

function Video({ video }) {
    return (
        <VideoDivReview>
            <video controls autoPlay name="media">
                <source src={video} type="video/webm" />
            </video>
        </VideoDivReview>
    );
}

const mapStateToProps = (state) => ({
    video: state.record.url
});

export default connect(mapStateToProps)(Video);
