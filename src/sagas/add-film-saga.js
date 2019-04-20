import axios from 'axios';
import { ADD_FILM, START_FETCHING_FILMS } from '../actions/request-actions';
import {CHANGE_ADD_STATUS} from '../actions/add-form-actions';
import { takeEvery, call, put } from 'redux-saga/effects';
import { port } from '../portConfig';

function FileFilms(filmData){
    return axios({
        url: `http://localhost:${port}/api/v1/film`,
        method: 'POST',
        data: filmData
    });
}

function* FileFilmsWorker(action){
    try {
        yield call(FileFilms, action.filmData);
        yield put({type: CHANGE_ADD_STATUS, status: 'success'});
        yield put({type: START_FETCHING_FILMS});
    }catch (e) {
        yield put({type: CHANGE_ADD_STATUS, status: 'failure'});
    }
}

export default function* watchFileFilms(){
    yield takeEvery( ADD_FILM, FileFilmsWorker);
}
