import axios from 'axios';
import { ADD_FILM } from '../actions/request-actions';
import { takeEvery, call } from 'redux-saga/effects';

function FileFilms(filmData){
    return axios({
        url: 'https://obscure-depths-62229.herokuapp.com/api/v1/film',
        method: 'POST',
        data: filmData
    });
}

function* FileFilmsWorker(action){
    const response = yield call(FileFilms, action.filmData);
    console.log(response);
}

export default function* watchFileFilms(){
    yield takeEvery( ADD_FILM, FileFilmsWorker);
}