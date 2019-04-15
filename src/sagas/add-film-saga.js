import axios from 'axios';
import { ADD_FILM } from '../actions/request-actions';
import { takeEvery, call, put } from 'redux-saga/effects';

function FileFilms(filmData){
    return axios({
        url: 'https://obscure-depths-62229.herokuapp.com/api/v1/film',
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