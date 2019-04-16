import axios from 'axios';
import {START_FETCHING_FILMS, FILMS_TO_STORE } from '../actions/request-actions';
import { takeEvery, put, call } from 'redux-saga/effects';


function getPosts() {
    return axios({
        url: 'http://localhost:3000/api/v1/films',
        method: 'GET',
    });
}

function* fetchDataWorker(){
    const response = yield call(getPosts);
    const films = response.data.map((elem) => (
        {...elem, visible: true, deleteStatus: 'no-delete'}
    ));
    yield put({
        type: FILMS_TO_STORE,
        films
    });
}

export default function* watchFetchData(){
    yield takeEvery(START_FETCHING_FILMS, fetchDataWorker);
}

