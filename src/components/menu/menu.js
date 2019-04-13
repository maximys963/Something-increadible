/* eslint-disable no-unused-vars,quotes */
import React from 'react';
import './menu.css';
import {Link} from 'react-router-dom';

const Menu = () => (
    <div className='menu-container'>
        <div className='logo'> WebbyLab Test</div>
        <ul className='menu-list'>
            <li><Link className='router-link' to={`/`}>All films</Link></li>
            <li><Link className='router-link' to={`/add`}>Add film</Link></li>
            <li><Link className='router-link' to={`/pages/lorem`}>Lorem</Link></li>
            <li><Link className='router-link' to={`/pages/ipsum`}>Ipsum</Link></li>
            <li><Link className='router-link' to={`/pages/dolor`}>Dolor</Link></li>
        </ul>
    </div>
);

export default Menu;