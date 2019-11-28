import React, { Fragment } from 'react';
import RedoButton from './RedoButton';
import FinishButton from './FinishButton';

export default function ButtonGroup() {
    return (
        <Fragment>
            <RedoButton />
            <FinishButton />
        </Fragment>
    );
}
