/* eslint-disable no-case-declarations */
import { FILMS_TO_STORE } from '../actions/request-actions';
import { SEARCH_BY_NAME, SEARCH_BY_ACTOR } from '../actions/data-interaction-actions';
import { SORT_BY_AZ, SORT_BY_ZA } from '../actions/sort-actions';

export const mainReducer = (state = [], action) =>{
    switch (action.type){
    case FILMS_TO_STORE:
        return [
            ...action.films,
        ];
    case SEARCH_BY_ACTOR:
        const searchElementsByActor = state.map(film =>
            film.actors.join(' ').toLowerCase().indexOf(action.string.toLowerCase()) === -1
                ?{...film, visible: false}
                :{...film, visible: true}
        );
        return[...searchElementsByActor];
    case SEARCH_BY_NAME:
        const searchElementsByName = state.map(film =>
            film.name.toLowerCase().indexOf(action.string.toLowerCase()) === -1
                ?{...film, visible: false}
                :{...film, visible: true}
        );
        return[...searchElementsByName];
    case SORT_BY_AZ:
        const sortAZ = (a, b) => {
            if(a.name < b.name) { return -1;}
            if(a.name > b.name) { return 1; }
            return 0;
        };
        return state.slice().sort(sortAZ);
    case SORT_BY_ZA:
        const sortZA = (a, b) => {
            if(a.name < b.name) { return 1;}
            if(a.name > b.name) { return -1; }
            return 0;
        };
        return state.slice().sort(sortZA);
    default:
        return state;
    }
};

