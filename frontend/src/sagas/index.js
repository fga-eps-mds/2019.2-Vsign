import { all } from 'redux-saga/effects';
import review from './review';
import record from './record';

function* root() {
    yield all([
        record(),
        review()
    ]);
}

export default root;
