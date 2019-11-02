import { all } from 'redux-saga/effects';
import review from './review';

function* root() {
    yield all([
        review()
    ]);
}

export default root;
