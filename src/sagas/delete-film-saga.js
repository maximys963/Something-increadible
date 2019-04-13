import axios from 'axios';
import { DELETE_FILM} from '../actions/request-actions';
import { takeEvery, call } from 'redux-saga/effects';

function deleteFilm(id){
    return axios({
        url: `https://obscure-depths-62229.herokuapp.com/api/v1/film/${id}`,
        method: 'DELETE',
    });
}

function* deleteFilmWorker(action){
    const response = yield call(deleteFilm, action.id);
    console.log(response);
}

export default function* watchDeleteFilms(){
    yield takeEvery( DELETE_FILM, deleteFilmWorker);
}