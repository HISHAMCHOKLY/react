import NavBar from './components/NavBar';
import Main from './components/Main';
import Cart from './components/Cart';
import data from './data'
import { useState } from 'react';

function App() {
  const {laptops,mobiles}=data;
  const [cartItems, setCartItems] = useState([]);
  const [show,setShow]=useState()
  const onAdd=(product)=>{
    const exist=cartItems.find((x)=>x.id===product.id)
    if(exist){
      setCartItems(
        cartItems.map((x)=>
          x.id===product.id ?{...exist,qty:exist.qty+1}:x
          )
        );
    }else{
      setCartItems([...cartItems,{...product,qty:1}])
    }
  };
  const onRemove=(product)=>{
    const exist=cartItems.find((x)=>x.id===product.id)
    if(exist.qty===1){
      setCartItems(cartItems.filter((x)=>x.id !== product.id))
    }else{
      setCartItems(
        cartItems.map((x)=>
          x.id===product.id ?{...exist,qty:exist.qty-1}:x
          )
        );
    }

  }
  const onDelete=(product)=>{
    const exist=cartItems.find((x)=>x.id===product.id)
    if(exist){
      setCartItems(cartItems.filter((x)=>x.id !== product.id))
    }

  }
  return (
    <div className="App">
      <div className='row'>
        <div className='col-12'>
          <NavBar>
                <a onClick={()=>setShow(false)}><i class="fa-solid fa-house me-3 mt-4"></i></a>
                <a onClick={()=>setShow(true)}><i class="fa-solid fa-cart-shopping me-3 mt-4"></i></a>
          </NavBar>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-8 d-none d-lg-block'>
          <Main laptops={laptops} mobiles={mobiles} onAdd={onAdd}></Main>
        </div>
        <div className='col-md-4 d-none d-lg-block'>
            <Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} onDelete={onDelete}></Cart>
        </div>
        
      </div>
      <div className='row'>
      {
           show ?<div className='col-12 d-block d-lg-none'>
           <Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} onDelete={onDelete}></Cart>
         </div>:<div className='col-12 d-block d-lg-none'>
          <Main laptops={laptops} mobiles={mobiles} onAdd={onAdd}></Main>
        </div>
      }
        
      </div>




      
    </div>
  );
}

export default App;
