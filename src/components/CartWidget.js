import React from 'react';
import cart from './cart.png';

function CartWidget() {
    return(
        <img src={cart} alt='cart' style={{whidth:'100%',height:'40px'}} />
    );
}

export default CartWidget;