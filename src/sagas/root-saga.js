import { all } from 'redux-saga/effects';
import watchFetchData from './fetch-saga';
import watchAddFilms from './add-film-saga';
import watchDeleteFilms from './delete-film-saga';
import watchFileFilms from './add-file-films-saga';

export default function* rootSaga(){
    yield all([
        watchFetchData(),
        watchAddFilms(),
        watchDeleteFilms(),
        watchFileFilms()
    ]);
}