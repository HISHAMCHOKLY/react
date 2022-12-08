import React from 'react'

export default function Cart(props){
    const {cartItems,onAdd,onRemove,onDelete}=props;
    let total=0
    cartItems.forEach(element => {
        total+=(element.price*element.qty)
    });
    return <aside className='row block mt-2'>
        <h2 className='text-center'>Cart Item</h2>
        <div>
            {cartItems.length===0 &&<div>Cart is empty</div>}
        </div>
        {cartItems.map((item)=>(
            <div className='row'>
                <div key={item.id} className='col-12 col-md-10 offset-md-1'>
                    <div  className="row">
                        <div className='col-4  text-end'>{item.name}</div>
                        <div className='col-1 text-center '>
                            <a onClick={()=>onAdd(item)} className="text-success pt-0 pb-0 "><i class="fa-solid fa-plus"></i></a>
                        </div>
                        <div className='col-1 '>    
                            <a onClick={()=>onRemove(item)} className="text-danger pt-0 pb-0 ms-1"><i class="fa-solid fa-minus"></i></a>
                        </div>
                        
                        <div className='col-lg-4 col-3 col-sm-2 col-md-2'>
                            <p className='price ms-2'>{item.qty}x{item.price}</p>
                        </div>
                        <div className='col-1 text-lg-end text-start'>    
                            <a onClick={()=>onDelete(item)} className="text-danger pt-0 pb-0"><i class="fa-solid fa-trash"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            
        ))}
        {cartItems.length!==0 && (
            <div className='row mt-3'>
                <div className='col-12 text-center'>
                    <h4>
                        TOTAL  :₹{total}
                    </h4>
                </div>
                
            </div>
        )}
    </aside>
    
}