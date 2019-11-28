import React, { Component, Fragment } from 'react';
import Navbar from '../Shared/Navbar';
import Video from './Video';
import ButtonGroup from './ButtonGroup';
import SigningSteps from '../Shared/SigningSteps';
import ScriptCard from '../ScriptPage/ScriptCard';

export default class ReviewPage extends Component {
    render() {
        return (
            <Fragment>
                <Navbar />
                <SigningSteps />
                <div className="container pt-3 pt-md-0">
                    <div className="row">
                        <div className="col-12 col-md-8 mb-3 mb-md-0">
                            <Video />
                        </div>
                        <div className="col-12 col-md-4">
                            <ScriptCard />
                            <ButtonGroup />
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}
