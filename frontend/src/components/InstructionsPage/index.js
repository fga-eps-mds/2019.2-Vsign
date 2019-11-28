import React, { Fragment } from 'react';
import Navbar from '../Shared/Navbar';
import Instructions from './Instructions';
import { connect } from 'react-redux';

function InstructionsPage({ history, ...props }) {
  return (
    <Fragment>
      <Navbar />
      {/* <SigningSteps history={history} /> */}
      <Instructions />
    </Fragment>
  )
};

export default connect(null, null)(InstructionsPage);