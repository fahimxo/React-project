import React from 'react';
import Navbar from '../navigation/navbar/Navbar';
import'./layout.css'

const Layout = (props) => {
    return (
        <>
          <Navbar/>  
          <main className='content'>{props.children}</main>
        </>
    );
}

export default Layout;
