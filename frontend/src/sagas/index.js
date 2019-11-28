import { all } from 'redux-saga/effects';
import review from './review';
import record from './record';
import upload from './upload';
import contract from './contract';
import login from './login';

function* root() {
    yield all([
        contract(),
        login(),
        record(),
        review(),
        upload()
    ]);
}

export default root;
