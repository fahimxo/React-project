import React,{useState,useEffect} from 'react';
import Controls from '../../components/controls/controls';
import Order from '../../components/Order/Order';
import Modal from '../../components/UI/Modal/Modal';
import axios from '../../axios-orders';
import Loader from '../../components/UI/loader/Loader';
import { useNavigate } from 'react-router-dom';

const prices ={
    product1:49,
    product2:69,
    product3:89,
    product4:79
}
const Shopping = () => {
useEffect(() => {
    axios.get('/products.json')
    .then((res)=>{
        setProducts(res.data)
    })
   
}, []);
let navigate = useNavigate();
    
    const [products,setProducts]=useState({})
    const [totalPrice,setTotalPrice]=useState(0)
    const [showModal,setShowModal]=useState(false)
    const [isLoading,setIsLoading]=useState(false)

    const addProductHandler=(type)=>{
        const preCount=products[type]
        const updatedCount=preCount+1
        const updatedProduct={...products}
        updatedProduct[type]=updatedCount
        setProducts(updatedProduct)
    
        const newPrice=prices[type]+totalPrice
        setTotalPrice(newPrice)
        
       
    }
    const removeProductHandler=(type)=>{
        const preCount=products[type]
        if (preCount>0) {
           const updatedCount= preCount-1
           const updatedProduct={...products}
           updatedProduct[type]=updatedCount;
           setProducts(updatedProduct)
           console.log(updatedProduct);
           const newPrice=totalPrice- prices[type]
           setTotalPrice(newPrice)
           console.log(newPrice);
        }
    }
    const modalHandler=()=>{
        setShowModal(!showModal)
    }
    const continueHandler=()=>{
        
        setIsLoading(true)
        const order={
            products,
            totalPrice,
            customer:{
                name:'rahim',
                id:77
            }
        }
        axios.post('/orders.json',order)
        .then((response)=>{
            console.log(response);
            setIsLoading(false)
            setShowModal(false)
            navigate('/checkout')    
        }).catch((err)=>{
            console.log(err);
            setIsLoading(false)
            setShowModal(false)
        })
    }
    return (
        <div>
            <Modal show={showModal} closeModal={modalHandler}>
                {isLoading?<Loader/>:<Order 
                products={products} 
                Tprice={totalPrice} 
                contin={continueHandler} 
                cancel={modalHandler}/>}
            </Modal>
            <Controls 
            addProduct={addProductHandler} 
            Tprice={totalPrice} 
            removeProduct={removeProductHandler}
            showModal={modalHandler}/>
        </div>
    );
}

export default Shopping;
