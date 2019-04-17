import axios from 'axios';
import { ADD_FILM } from '../actions/request-actions';
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
    yield call(FileFilms, action.filmData);
    yield put({type: 'START_FETCHING_FILMS'});
}

export default function* watchFileFilms(){
    yield takeEvery( ADD_FILM, FileFilmsWorker);
}
