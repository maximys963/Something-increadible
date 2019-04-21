import {CHANGE_FILM_NAME,
    CHANGE_FILM_YEAR,
    CHANGE_FILM_FORMAT,
    CHANGE_FILM_ACTORS,
    VALIDATE_INPUTS,
    CHANGE_ADD_STATUS
} from '../actions/add-form-actions';
import {ADD_FILM} from '../actions/request-actions';

export const changeFilmName = (name) => ({
    type: CHANGE_FILM_NAME,
    name
});

export const changeFilmYear = (year) => ({
    type: CHANGE_FILM_YEAR,
    year
});

export const changeFilmFormat = (format) => ({
    type: CHANGE_FILM_FORMAT,
    format
});

export const changeFilmActors = (actors) => ({
    type: CHANGE_FILM_ACTORS,
    actors
});

export const addFilm = (filmData) => ({
    type: ADD_FILM,
    filmData
});

export const changeAddStatus = (status) => ({
    type: CHANGE_ADD_STATUS,
    status
});

export const validateInputs = (result) => ({
    type: VALIDATE_INPUTS,
    result
});
