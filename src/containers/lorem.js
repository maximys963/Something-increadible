/* eslint-disable no-unused-vars */
import  React from 'react';

const MockPage = ({currentPage}) =>(
    <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
        {`this is mock page ${currentPage}`}
    </div>
);

export default MockPage;