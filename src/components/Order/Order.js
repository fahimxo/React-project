
import React from 'react';
import Button from '../UI/button/Button';
import'./order.css'

const Order = ({products,contin,cancel,Tprice}) => {
    return (
        <>
        <h4>orders</h4>
       
        <ul className='order-list'>
            {Object.keys(products).map((item)=>{
                return <li key={item}>{item} : {products[item]}</li>
            })}
            
        </ul>
        <p>Total Price: {Tprice}</p>
        <p>continue?</p>
        <Button btnType='btn-success'  click={contin} >Yes</Button>
        <Button btnType='btn-danger' click={cancel} >No</Button>
        </>
    );
}

export default Order;
