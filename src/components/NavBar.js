import React from 'react'

export default function NavBar(props){
    const {setShow}=props
    return(
        <header className='row block center'>
            <div className='col-7 text-start'>
                <a href='#/' className='text-dark text-decoration-none'>
                    <p className='head'>SHOPING CART</p>
                    
                </a>

            </div>
            <div className='col-5 text-end d-block d-lg-none'>
                {props.children}
            </div>
            
        </header>


    )
    
}