import React, { Fragment } from 'react';
import Navbar from '../Shared/Navbar';
import DetailsCard from './DetailsCard';
import ScriptCard from './ScriptCard';
import ControlButtons from './ControlButtons';
import ReportErrorModal from './ReportErrorModal';

export default function ScriptPage() {
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