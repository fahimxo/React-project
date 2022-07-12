
import React from 'react';
import './builder.css'

const Builder = ({title,add,remove}) => {
    return (
        <div className='builder'>
            <div>{title}</div>
            <button onClick={add}>add</button>
            <button onClick={remove} className='remove'>remove</button>
        </div>
    );
}

export default Builder;
