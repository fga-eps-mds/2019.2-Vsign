import React from 'react';
import { connect} from 'react-redux';

function Video({ video }) {
    return (
        <video controls autoPlay name="media" style={{ width: '100%' }}>
            <source src={video} type="video/webm" />
        </video>
    );
}

const mapStateToProps = (state) => ({
    video: state.record.url
});

export default connect(mapStateToProps)(Video);
