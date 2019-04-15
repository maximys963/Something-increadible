import {CHANGE_FILM_NAME,
    CHANGE_FILM_YEAR,
    CHANGE_FILM_FORMAT,
    CHANGE_FILM_ACTORS,
    VALIDATE_INPUTS} from '../actions/add-form-actions';

const initialState = {
    name: '',
    year: '',
    format: '',
    actors: '',
    valid: null
};

export const formReducer = (state = initialState, action) =>{
    switch (action.type){
    case CHANGE_FILM_NAME:
        return({...state, name: action.name});
    case CHANGE_FILM_YEAR:
        return({...state, year: action.year});
    case CHANGE_FILM_FORMAT:
        return({...state, format: action.format});
    case CHANGE_FILM_ACTORS:
        return({...state, actors: action.actors});
    case VALIDATE_INPUTS:
        return({...state, valid: action.result});
    default :
        return state;
    }
};