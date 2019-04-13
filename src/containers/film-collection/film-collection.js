/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../action-creators/request-ac';
import { Spin } from 'antd';
import { Input, Button } from 'semantic-ui-react';
import FilmItem from '../../components/film-item/film-item';
import './film-collection.css';

class FilmCollection extends Component {
    render() {
        const {films, startFechingData, addFileFilms} = this.props;

        const uploadFile = (target) => {
            addFileFilms(target);
        };
        return (
            <div className='main-screen-container'>
                <div className='instrument-panel'>
                    <input type='file'
                           onChange={(e) => uploadFile(e.target)}
                    />
                    <Input className='search-input' placeholder='Search film'/>
                    <Button>Sort A-Z</Button>
                    <Button
                        onClick={() => startFechingData()}
                    >Fetch</Button>
                </div>
                <div className='film-container'>
                    {films.map((elem, index) => (
                        <FilmItem
                            key={index}
                            id={elem._id}
                            title={elem.name}
                        />
                    ))}
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    films: state.mainReducer
});
export default connect(mapStateToProps, actions)(FilmCollection);
