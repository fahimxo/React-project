
import axios from '../../axios-orders';
import React from 'react';
import './account.css'
import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom';

const Account = () => {
    
    const navigate=useNavigate()
    const {register,handleSubmit,formState: { errors },reset} =useForm()

    const submitHandler =(data)=>{
        console.log(data);
    
        axios.post('/accounts.json',data)
        .then((res)=>{
            console.log(res);
            reset()
            navigate('/checkout')
        }).catch((err)=>{
            console.log(err);
        }) 

    }
    return (
        <div className='account'>
           <h2 className='header'>Account</h2> 
           <form onSubmit={handleSubmit(submitHandler)}>
            <div>
               <input type='text' {...register('name', { required: true })}  placeholder='Name'/>
               {errors.name && <small> name is required</small>}
               <input type='text' {...register('email', { required: true,pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
             })} placeholder='email'/>
               {errors.email && errors.email.type==='pattern' && <small>email is invalid</small>}
               {errors.email && errors.email.type==='required' && <small>email is required</small>}
               <input type='password' {...register('password', { required: true,minLength:5 })} placeholder='password'/>
               {errors.password && errors.password.type === 'minLength' && <small>password is too short</small>}
               {errors.password && errors.password.type === 'required' && <small>password is required</small>}
               </div>
               <button type='Submit' className='btn btn-primary'>Submit</button>
           </form>
        </div>
    );
}

export default Account;
