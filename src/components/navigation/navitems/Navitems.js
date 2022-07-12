
import React from 'react';
import './navitems.css'
import {NavLink} from 'react-router-dom'

const Navitems = () => {
    return (
        <>
           <ul className='nav-items'>
            <li><NavLink className={({ isActive }) => (isActive ? 'active' : null)} to='/'>Shopping</NavLink></li>
            <li><NavLink className={({ isActive }) => (isActive ? 'active' : null)} to='/account'>Account</NavLink></li>
            </ul> 
        </>
    );
}

export default Navitems;
