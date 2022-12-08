import React, { useState } from 'react'
import Product from './Product';


export default function Main(props){
    const {laptops,mobiles,onAdd}=props;
    const [show,setShow]=useState()
    return <main className=' block ms-3'>
        <div className='row'>
            <div className='col-12 text-center text-md-start'>
                <a className='btn btn-secondary me-5' onClick={()=>setShow(false)}>mobiles</a>
                <a className='btn btn-secondary ' onClick={()=>setShow(true)}>laptop</a>
            </div>

        </div>
       
        
        {
            show ? <div className='row'>
                <h2 className='text-center mt-5'>LAPTOPS</h2>
                {laptops.map((product)=>(
                    <Product key={product.id} product={product} onAdd={onAdd}></Product>
                ))}
            </div>:<div className='row'>
                <h2 className='text-center mt-5'>MOBILES</h2>
                {mobiles.map((product)=>(
                    <Product key={product.id} product={product} onAdd={onAdd}></Product>
                ))}
            </div>
        }
        
    </main>
    
}