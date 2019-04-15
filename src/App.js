/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import './App.css';
import MainScreen from './containers/film-collection/film-collection';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Menu from './components/menu/menu';
import FilmDetails from './containers/film-details/film-details';
import MockPage from './containers/lorem';
import AddFilmForm from './containers/add-film-form/add-film-form';

const App = () => (
    <Router>
        <div className="App">
            <Menu/>
            <Switch>
                <Route
                    path='/'
                    component={MainScreen}
                    exact/>
                <Route
                    path='/cartoons/:id'
                    render={({match}) =>{
                        const { id } = match.params;
                        return <FilmDetails itemId={id}/>;
                    }}/>
                <Route
                    path='/pages/:current'
                    render={({match}) =>{
                        const { current } = match.params;
                        return <MockPage currentPage={current}/>;
                    }}/>
                <Route path='/add' component={AddFilmForm}/>
            </Switch>
        </div>
    </Router>
);

export default App;


