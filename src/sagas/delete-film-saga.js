import axios from 'axios';
import { DELETE_FILM, DELETE_FILM_FROM_STORE, CHANGE_DELETE_STATUS} from '../actions/request-actions';
import { takeEvery, call, put } from 'redux-saga/effects';

function deleteFilm(id){
    return axios({
        url: `http://localhost:3000/api/v1/film/${id}`,
        method: 'DELETE'});
}

function* deleteFilmWorker(action){
    try{
        yield call(deleteFilm, action.id);
        yield put({type: DELETE_FILM_FROM_STORE, id: action.id});
    } catch (e) {
        const payload = {id: action.id, status: 'no_delete'};
        yield put({type: CHANGE_DELETE_STATUS, payload});
        
    }
}

export default function* watchDeleteFilms(){
    yield takeEvery( DELETE_FILM, deleteFilmWorker);
}
