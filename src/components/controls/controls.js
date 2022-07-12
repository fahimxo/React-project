import React from 'react';
import Builder from './builder/builder';
import './controls.css'

const product=[
    {title:'product 1',type:'product1'},
    {title:'product 2',type:'product2'},
    {title:'product 3',type:'product3'},
    {title:'product 4',type:'product4'},
]
const Controls = ({addProduct,removeProduct,Tprice,showModal}) => {
    
    return (
       <div className='controls'>
    <div className='price'>
        <p>Total Price :{Tprice}</p>
    </div>
    {product.map((p)=>{
    return  <Builder key={p.title}
     title={p.title}
     remove={()=>removeProduct(p.type)} 
     add={()=>addProduct(p.type)}/> 
    })}
    <button onClick={showModal} className='btn btn-sm btn-primary my-3'>Orders</button>
</div> 
    );
}

export default Controls;
