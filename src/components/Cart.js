import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import '../styles/Cart.css';

const Cart = () => {
    const [displayCart, setDisplayCart] = useState(false);

    const cart = useSelector(store => store.cart);

    const toggleCart = () => {
        setDisplayCart(!displayCart);
    }

    return (
        <div className="Cart">
            <p onClick={toggleCart}>Cart <i className="fas fa-shopping-cart"></i> ({cart.length})</p>
        </div>
    )
}

export default Cart;