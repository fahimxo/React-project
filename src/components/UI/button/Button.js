import './button.css'

import React from 'react';

const Button = (props) => {
    return (
        <>
          <button className={`btn mx-4 ${props.btnType}`} onClick={props.click}>
            {props.children}</button>  
        </>
    );
}

export default Button;
