import axios from 'axios';
import {ADD_FILE_FILMS} from '../actions/request-actions';
import { takeEvery, call, put } from 'redux-saga/effects';
import {port} from '../portConfig';

function addFilm(element){
    return axios({
        url: `http://localhost:${port}/api/v1/films/fromFile`,
        method: 'POST',
        data: element.files[0],
        headers: {
            'Content-Type': 'text/plain'
        }
    }).then(_ => {
        element.value = '';
        return Promise.resolve(_);
    });
}

function* addFilmWorker(action){
    yield call(addFilm, action.target);
    yield put({type: 'START_FETCHING_FILMS'});
}

export default function* watchAddFilms(){
    yield takeEvery( ADD_FILE_FILMS, addFilmWorker);
}
