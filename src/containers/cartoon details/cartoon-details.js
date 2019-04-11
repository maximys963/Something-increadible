/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import { connect } from 'react-redux';
import './cartoon-details.css';

class CartoonDetails extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        const {itemId, cartoons} = this.props;
        return(
            <div className='cartoon-details-container'>
                {cartoons
                    .filter(elem => elem.id === itemId)
                    .map((elem, i) => (
                        <div key={i}>
                            <h3>{elem.title}</h3>
                            <p>{elem.director}</p>
                            <p>{elem.producer}</p>
                            <p>{elem.release_date}</p>
                            <p>{elem.rt_score}</p>
                            <p>{elem.description}</p>
                        </div>))}
            </div>);
    }
}

const mapStateToProps = (state) => ({
    cartoons: state.data
});

export default connect(mapStateToProps, null)(CartoonDetails);