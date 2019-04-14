import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { mainReducer } from '../reducers/main-reducer';
import { formReducer } from '../reducers/add-form-reducer';
import { searchReducer } from '../reducers/search_reducer';
import { sortReducer }  from '../reducers/sort-reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/root-saga';

const rootReducer = combineReducers({
    mainReducer,
    form: formReducer,
    search: searchReducer,
    sortStatus: sortReducer
});

const sagaMiddleware = createSagaMiddleware();

const initialState = {};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(
        applyMiddleware(sagaMiddleware)
    )
);

sagaMiddleware.run(rootSaga);