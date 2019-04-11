/* eslint-disable no-unused-vars,quotes */
import React from 'react';
import './menu.css';
import {Link} from 'react-router-dom';
const Menu = () => (
    <div className='menu-container'>
        <div className='logo'> Studio Ghibli</div>
        <ul className='menu-list'>
            <li><Link to={`/pages/lorem`}>Lorem</Link></li>
            <li><Link to={`/pages/ipsum`}>Ipsum</Link></li>
            <li><Link to={`/pages/dolor`}>Dolor</Link></li>
            <li><Link to={`/pages/sit`}>Sit</Link></li>
            <li><Link to={`/pages/amet`}>Amet</Link></li>
        </ul>
    </div>
);

export default Menu;