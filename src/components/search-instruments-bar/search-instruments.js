import React from 'react';
import { connect } from 'react-redux';
import { Select, Button, Input } from 'antd';
import * as search_actions from '../../action-creators/search-ac';
import * as sort_actions from '../../action-creators/sort-data-ac';
import './search-instruments.css';

const SearchInstruments = (props) => {
    const Option = Select.Option;
    const {
        sortStatus,
        method,
        inputValue,
        uploadFile,
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

    return(
        <div className='instrument-panel'>
            <input type='file'
                onChange={(e) => uploadFile(e.target)}/>
            <Input
                value={inputValue}
                className='search-input'
                placeholder='Search film'
                onChange={(e) => onInputChange(e.target.value)}
            />
            <Select
                onSelect={(value) => changeSearchMethod(value)}
                defaultValue='by_name'>
                <Option value='by_name'>
                    by name
                </Option>
                <Option value='by_actor'>
                    by actor
                </Option>
            </Select>
            <Button className='sort-button'
                onClick={() => sortToggle()}>
                { sortStatus === 'not_sorted' || sortStatus === 'sorted_za'
                    ? 'Sort A-Z'
                    : 'Sort Z-A' }
            </Button>
        </div>
    );
};

const mapStateToProps = (state) => ({
    method: state.search.method,
    inputValue: state.search.searchString,
    sortStatus: state.sortStatus.status
});

const mapDispatchToProps = {
    ...search_actions,
    ...sort_actions
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchInstruments);