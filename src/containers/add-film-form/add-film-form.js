import React, { Component } from 'react';
import { connect} from 'react-redux';
import { Select, Input, Button, Alert, message } from 'antd';
import * as add_actions from '../../action-creators/add-form-ac';
import * as validation_actions from '../../action-creators/add-form-validation-ac';
import './add-film-form.css';
import PropTypes from 'prop-types';

class AddFilmForm extends Component{
    constructor(props){
        super(props);

    }
    componentDidUpdate(prevProps) {

        const {addingStatus,
            changeAddStatus,
            nameValid,
            yearValid,
            actorsValid
        } = this.props;

        if(addingStatus !== prevProps.addingStatus){
            this.updateAnswer();
            changeAddStatus('no-status');
        }

        if(nameValid !== prevProps.nameValid
           || yearValid !== prevProps.yearValid
           || actorsValid !== prevProps.actorsValid){
            this.responsiveHeightCrutch();
        }
    }

    updateAnswer = () => {
        const {addingStatus} = this.props;
        if(addingStatus === 'success'){
            message.success('Film successfully added', 1);
        }else if(addingStatus === 'failure'){
            message.error('Film was not added', 1);
        }
    };

    formValidation = () => {
        const {
            changeFilmActors,
            changeFilmName,
            changeFilmYear,
            nameValid,
            yearValid,
            actorsValid,
        } = this.props;

        this.checkYear();
        this.checkName();
        this.checkActors();
        if (nameValid && yearValid && actorsValid){
            this.prepareDataToRequest();
            changeFilmActors('');
            changeFilmName('');
            changeFilmYear('');
        }
    };

    prepareDataToRequest = () => {
        const { actors, year, name, format, addFilm } = this.props;
        const actorsFromStore = actors.split(',');
        const filmYearFromStore = Number(year);
        const requestData = {
            name,
            year: filmYearFromStore,
            actors: actorsFromStore,
            format,
        };
        addFilm(requestData);
    };

    checkYear = () => {
        const {year, yearValidation } = this.props;
        const yearRegexp = /189[5-9]|19\d\d|200\d|201\d|2020$/;
        if(yearRegexp.test(year)){
            yearValidation(true);
        }else{
            yearValidation(false);
        }
    };
    checkName = () => {
        const {name, nameValidation } = this.props;
        if(name === ''){
            nameValidation(false);
        }else{
            nameValidation(true);
        }
    };

    checkActors = () => {
        const { actors, actorsValidation }= this.props;
        if(actors === ''){
            actorsValidation(false);
        }else{
            actorsValidation(true);
        }
    };

    responsiveHeightCrutch = () => {
        const { nameValid,
            yearValid,
            actorsValid } = this.props;
        const validResultArr = [nameValid, yearValid, actorsValid];
        let amount = 0;
        validResultArr.map( elem => {
            if(elem === false){
                amount++
            }
        });
        let countedHeight = 320 + amount * 20;
        return(countedHeight);
    };

    render(){
        const Option = Select.Option;
        const { TextArea } = Input;
        const {
            validation,
            changeFilmFormat,
            changeFilmActors,
            changeFilmName,
            changeFilmYear,
            name,
            nameValid,
            year,
            yearValid,
            actors,
            actorsValid,
            yearValidation,
            nameValidation,
            actorsValidation,
        } = this.props;
        return(
            <div className='add-form-container'>

                <div className='add-form-group' style={{height: this.responsiveHeightCrutch()}}>
                    <Input
                        className='add-input'
                        value={name}
                        placeholder='Film name'
                        onBlur={() => this.checkName()}
                        onFocus={() => nameValidation(null)}
                        onChange={(e) => changeFilmName(e.target.value)}/>
                    {nameValid === false ? (<div className='validation-error'> name can't be empty </div>) : null}
                    <Input
                        className='add-input'
                        value={year}
                        placeholder='Year'
                        onBlur={() => {this.checkYear()}}
                        onFocus={() => {yearValidation(null)}}
                        onChange={(e) => changeFilmYear(e.target.value)}/>
                    {yearValid === false ? (<div className='validation-error'>year must be from number from 1895 to 2020 </div>) : null}
                    <Select
                        className='add-select'
                        placeholder='Format'
                        defaultValue='DVD'
                        onSelect={(value) => changeFilmFormat(value)}>
                        <Option value='DVD'>DVD</Option>
                        <Option value='Blu-Ray'>Blu-Ray</Option>
                        <Option value='VHS'>VHS</Option>
                    </Select>
                    <TextArea
                        className='add-actors-area'
                        value={actors}
                        rows={4}
                        placeholder='Actors'
                        onFocus={() => actorsValidation(null)}
                        onBlur={() => this.checkActors()}
                        onChange={(e) => changeFilmActors(e.target.value)}/>
                    {actorsValid === false ? (<div className='validation-error'>actors can't me empty</div>) : null}
                    <Button
                        className='add-button'
                        type='primary'
                        onClick={() => this.formValidation()}>Add film</Button>
                </div>
                {validation === false ? (<Alert message="All fields required" type="error" showIcon />) : null}
            </div>
        );
    }}


AddFilmForm.propTypes = {
    addFilm: PropTypes.func,
    changeFilmName: PropTypes.func,
    changeFilmYear: PropTypes.func,
    changeFilmFormat: PropTypes.func,
    changeFilmActors: PropTypes.func,
    validateInputs: PropTypes.func,
    name: PropTypes.string,
    nameValid: PropTypes.bool,
    year: PropTypes.string,
    yearValid: PropTypes.bool,
    format: PropTypes.string,
    actors: PropTypes.string,
    actorsValid: PropTypes.bool,
    validation: PropTypes.bool
};

const mapStateToProps = (state) => ({
    name: state.form.name,
    nameValid: state.form.nameValid,
    year: state.form.year,
    yearValid: state.form.yearValid,
    format: state.form.format,
    actors: state.form.actors,
    actorsValid: state.form.actorsValid,
    validation: state.form.valid,
    addingStatus: state.form.addingStatus,
});

const mapDispatchToProps = {
    ...add_actions,
    ...validation_actions
};

export default connect(mapStateToProps, mapDispatchToProps)(AddFilmForm);

