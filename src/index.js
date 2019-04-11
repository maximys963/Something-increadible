/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Menu from './components/menu/menu';
import CartoonDetails from './containers/cartoon details/cartoon-details';
import MockPage from './containers/lorem';
import * as serviceWorker from './serviceWorker';
import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {rootReducer} from './reducers/root-reducer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const initialState = {};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);


const Root = () => (
    <Provider store={store}>
        <Router>
            <div>
                <Menu/>
                <Switch>
                    <Route
                        path='/'
                        component={App}
                        exact/>
                    <Route
                        path='/cartoons/:id'
                        render={({match}) =>{
                            const { id } = match.params;
                            return <CartoonDetails itemId={id}/>;
                        }}/>
                    <Route
                        path='/pages/:current'
                        render={({match}) =>{
                            console.log(match);
                            const { current } = match.params;
                            return <MockPage currentPage={current}/>;
                        }}/>
                </Switch>
            </div>
        </Router>
    </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
