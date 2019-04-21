/* eslint-disable no-case-declarations */
import { FILMS_TO_STORE, CHANGE_DELETE_STATUS, DELETE_FILM_FROM_STORE } from '../actions/request-actions';
import { SEARCH_BY_NAME, SEARCH_BY_ACTOR } from '../actions/data-interaction-actions';
import { SORT_BY_AZ, SORT_BY_ZA } from '../actions/sort-actions';

export const mainReducer = (state = [], action) =>{
    switch (action.type){
    case FILMS_TO_STORE:
        return [
            ...action.films,
        ];
    case CHANGE_DELETE_STATUS:
        return state.map(film => film._id === action.payload.id
            ? {...film, deleteStatus: action.payload.status}
            : {...film}
        );
    case DELETE_FILM_FROM_STORE:
        const index = state.findIndex(film => film._id === action.id);
        return [...state.slice(0, index), ...state.slice(index +1)];
    case SEARCH_BY_ACTOR:
        const searchElementsByActor = state.map(film =>
            film.actors.some(elem => elem.toLowerCase().indexOf(action.string.toLowerCase()) !== -1)
                ?{...film, visible: true}
                :{...film, visible: false}
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
            if(a.name.toLowerCase() < b.name.toLowerCase()) { return -1; }
            if(a.name.toLowerCase() > b.name.toLowerCase()) { return 1; }
            return 0;
        };
        const sortRegistr = ( a, b) => {
            if(a.name[0].toLowerCase() === b.name[0].toLowerCase()
                && a.name[0].toLowerCase() !== a.name[0]
                && b.name[0].toLowerCase() === b.name[0]
            ){ return -1;}
            if(a.name[0].toLowerCase() === b.name[0].toLowerCase()
                && a.name[0].toLowerCase() === a.name[0]
                && b.name[0].toLowerCase() !== b.name[0]
            ){return 1;}
            return 0;
        };
        return state.slice().sort(sortAZ).sort(sortRegistr);
    case SORT_BY_ZA:
        const sortRegistr2 = ( a, b) => {
            if(a.name[0].toLowerCase() === b.name[0].toLowerCase()
                && a.name[0].toLowerCase() !== a.name[0]
                && b.name[0].toLowerCase() === b.name[0]
            ){ return -1;}
            if(a.name[0].toLowerCase() === b.name[0].toLowerCase()
                && a.name[0].toLowerCase() === a.name[0]
                && b.name[0].toLowerCase() !== b.name[0]
            ){return 1;}
            return 0;
        };
        const sortZA = (a, b) => {
            if(a.name.toLowerCase() < b.name.toLowerCase()) { return 1; }
            if(a.name.toLowerCase() > b.name.toLowerCase()) { return -1; }
            return 0;
        };
        return state.slice().sort(sortZA).sort(sortRegistr2);
    default:
        return state;
    }
};

// if(a.name[0].toUpperCase() === a.name[0]
//     && b.name[0].toUpperCase() !== b.name[0]
//     && a.name[0].toLowerCase() === b.name[0].toLowerCase()){
//     return 1;
// }else{
//     return -1;
// }
