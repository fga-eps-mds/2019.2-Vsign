import { all } from 'redux-saga/effects';
import review from './review';
import record from './record';
import upload from './upload';

function* root() {
    yield all([
        record(),
        review(),
        upload()
    ]);
}

export default root;
