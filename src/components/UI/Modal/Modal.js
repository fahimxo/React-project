
import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import './Modal.css'

const Modal = (props) => {
    return (
        <>
        <Backdrop show={props.show} close={props.closeModal}/>
      <div style={{
          transform:props.show?'translateY(0)':'translateY(-100vh)',
          opacity:props.show?'1':'0',
      }} className='mymodal'>{props.children}</div>
      </>
    );
}

export default Modal;
