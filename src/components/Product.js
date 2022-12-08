import React from 'react'

export default function Product(props) {
    const {product,onAdd}=props;
  return (
      <div className='col-12 col-md-4 col-sm-6 mt-3'>
        <div class="card border border-secondary" width="18rem">
            <img src={product.image} alt={product.name} class=" img-fluid p-2"></img>
            <div class="card-body">
              <h5 class="card-title">{product.name}</h5>
              <p class="card-text">₹{product.price}</p>
              <a className='btn btn-success' onClick={()=>onAdd(product)}>ADD TO CART</a>
            </div>
          </div>
      </div>  
  )
}
