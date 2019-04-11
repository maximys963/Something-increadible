/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actionCreators/action-creator';
import { Spin } from 'antd';
import FilmItem from '../../components/film-item/film-item';
import './main-screen.css';

class MainScreen extends Component {

    componentDidMount(){
        this.props.asyncfetchingData();
    }


    render() {
        return (
            <div className='main-screen-container'>
                <div className='film-container'>
                    {this.props.films
                        ? this.props.films.map( (elem, i) => (
                            <FilmItem
                                key={i}
                                title={ elem.title }
                                id={ elem.id }
                            />))
                        : <Spin/>
                    }
                </div>
            </div>
        );
    }
}

MainScreen.propTypes = {
    fetchingData : PropTypes.func
};
const mapStateToProps = (state) => ({
    films: state.data
});
export default connect(mapStateToProps, actions)(MainScreen);
