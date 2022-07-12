
import React from 'react';
import './Backdrop.css'
const Backdrop = ({show,close}) => {
    return (
        <>
          {show?<div className='backdrop'onClick={close}></div>:null }
        </>
    );
}

export default Backdrop;
