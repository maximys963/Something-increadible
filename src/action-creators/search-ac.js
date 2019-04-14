import { SEARCH_BY_NAME, SEARCH_BY_ACTOR, CHANGE_SEARCH_METHOD, CHANGE_SEARCH_INPUT } from '../actions/data-interaction-actions';

export const searchByName = (string) => ({
    type: SEARCH_BY_NAME,
    string
});

export const searchByActor = (string) => ({
    type: SEARCH_BY_ACTOR,
    string
});

export const changeSearchMethod = (method) =>({
    type: CHANGE_SEARCH_METHOD,
    method
});

export const inputChangesToStore = (value) => ({
    type: CHANGE_SEARCH_INPUT,
    value
});