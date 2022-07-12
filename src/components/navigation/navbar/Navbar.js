import React from 'react';
import Navitems from '../navitems/Navitems';
import './navbar.css'
const Navbar = () => {
    return (
        <>
           <header className='navbar'>
            <nav>
                <Navitems/>
            </nav>
            </header> 
        </>
    );
}

export default Navbar;
