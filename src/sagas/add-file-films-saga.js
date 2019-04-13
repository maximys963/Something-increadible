import axios from 'axios';
import {ADD_FILE_FILMS} from '../actions/request-actions';
import { takeEvery, call } from 'redux-saga/effects';

function addFilm(element){
    return axios({
        url: 'https://obscure-depths-62229.herokuapp.com/api/v1/films/fromFile',
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
    const response = yield call(addFilm, action.target);
    console.log(response);
}

export default function* watchAddFilms(){
    yield takeEvery( ADD_FILE_FILMS, addFilmWorker);
}