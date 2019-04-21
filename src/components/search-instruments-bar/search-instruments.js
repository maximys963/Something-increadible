/* eslint-disable no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';
import { Select, Button, Input, message } from 'antd';
import * as search_actions from '../../action-creators/search-ac';
import * as sort_actions from '../../action-creators/sort-data-ac';
import * as vc_actions from '../../action-creators/video-collection-ac';
import PropTypes from 'prop-types';
import './search-instruments.css';

const SearchInstruments = (props) => {
    const Option = Select.Option;
    const { sortStatus,
        addFileFilms,
        method,
        inputValue,
        searchByName,
        searchByActor,
        changeSearchMethod,
        inputChangesToStore,
        sortByAz,
        sortByZa
    } = props;

    const onInputChange = (value) => {
        inputChangesToStore(value);
        if(method === 'by_name'){
            searchByName(value);
        }else if(method === 'by_actor'){
            searchByActor(value);
        }
    };

    const sortToggle = () => {
        if(sortStatus === 'not_sorted' || sortStatus === 'sorted_za'){
            sortByAz();
        }else if(sortStatus === 'sorted_az'){
            sortByZa();
        }
    };

    const uploadFile = (target) => {
        const nameFile = target.files[0].name;
        const type = nameFile.slice(nameFile.length - 3, nameFile.length);
        if(type !== 'txt'){
            message.error('This is not appropriate file type ');
            target.value = '';
        }else{
            addFileFilms(target);
        }
    };

    return(
        <div className='instrument-panel'>
            <input
                className='upload-input'
                type='file'
                onChange={(e) => uploadFile(e.target)}/>
            <Input
                value={inputValue}
                className='search-input'
                placeholder='Search film'
                onChange={(e) => onInputChange(e.target.value)}
            />
            <Select
                className='select-method'
                onSelect={(value) => changeSearchMethod(value)}
                defaultValue='by_name'>
                <Option value='by_name'>
                    by name
                </Option>
                <Option value='by_actor'>
                    by actor
                </Option>
            </Select>
            <Button
                htmlType='button'
                id='sort-button'
                onClick={() => sortToggle()}>
                { sortStatus === 'not_sorted' || sortStatus === 'sorted_za'
                    ? 'Sort A-Z'
                    : 'Sort Z-A' }
            </Button>
        </div>
    );
};

SearchInstruments.propTypes = {
    sortStatus: PropTypes.string,
    method: PropTypes.string,
    inputValue: PropTypes.string,
    uploadFile: PropTypes.func,
    searchByName: PropTypes.func,
    searchByActor: PropTypes.func,
    changeSearchMethod: PropTypes.func,
    inputChangesToStore: PropTypes.func,
    sortByAz: PropTypes.func,
    sortByZa: PropTypes.func
};

const mapStateToProps = (state) => ({
    method: state.search.method,
    inputValue: state.search.searchString,
    sortStatus: state.sortStatus.status
});

const mapDispatchToProps = {
    ...search_actions,
    ...sort_actions,
    ...vc_actions

};

export default connect(mapStateToProps, mapDispatchToProps)(SearchInstruments);








