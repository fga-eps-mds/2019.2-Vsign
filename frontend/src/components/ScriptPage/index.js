import React, { Component, Fragment } from 'react';
import Navbar from '../Shared/Navbar';
import DetailsCard from './DetailsCard';
import ScriptCard from './ScriptCard';
import ControlButtons from './ControlButtons';
import ReportErrorModal from './ReportErrorModal';

class ScriptPage extends Component {
  previousLocation = this.props.location;

  recordVideo() {
    this.props.history.push({
      pathname: "/record"
    })
  }

  componentWillUpdate(nextProps) {
    let { location } = this.props;

    if (
      nextProps.history.action !== "POP" &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = this.props.location;
    }
  }
  render() {
    let { location } = this.props;

    let isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
    );
    return (
      <Fragment>
        <Navbar />
        <div className="container py-5">
          <DetailsCard />
          <ScriptCard />
          <ControlButtons />
        </div>
        <ReportErrorModal />
      </Fragment>
    );
  }
}

export default ScriptPage;
