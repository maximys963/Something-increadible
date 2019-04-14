/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../action-creators/video-collection-ac';
import { Spin } from 'antd';
import FilmItem from '../../components/film-item/film-item';
import SearchInstruments from '../../components/search-instruments-bar/search-instruments';
import './film-collection.css';

class FilmCollection extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.startFechingData();
    }

    render() {
        const {films, addFileFilms} = this.props;

        const uploadFile = (target) => {
            addFileFilms(target);
        };
        return (
            <div className='main-screen-container'>
                <SearchInstruments uploadFile={(e) => uploadFile(e)}/>
                {films.length === 0
                    ?(<Spin className='film-spin'/>)
                    :(<div className='film-container'>
                        {films
                            .filter((elem) => elem.visible === true)
                            .map((elem, index) => (
                                <FilmItem
                                    key={index}
                                    id={elem._id}
                                    title={elem.name}
                                />
                            ))}
                    </div>)
                }</div>
        );
    }
}


const mapStateToProps = (state) => ({
    films: state.mainReducer
});
export default connect(mapStateToProps, actions)(FilmCollection);
