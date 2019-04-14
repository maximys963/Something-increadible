/* eslint-disable indent,no-console */
import { START_FETCHING_FILMS, ADD_FILE_FILMS, DELETE_FILM } from '../actions/request-actions';

export const startFechingData = () => ({
    type: START_FETCHING_FILMS,
});

export const deleteFilm = (id) => ({
    type: DELETE_FILM,
    id
});

export const addFileFilms = (target) => ({
    type: ADD_FILE_FILMS,
    target
});





