import React, {useState} from 'react';
import {useSelector} from 'react-redux';

const Cart = () => {
    const [displayCart, setDisplayCart] = useState(false);

    const cart = useSelector(store => store.cart);
    const products = useSelector(store => store.products)

    const toggleCart = () => {
        setDisplayCart(!displayCart);
    }

    return (
        <div className="Cart">
            <h2 onClick={toggleCart}>Cart <i className="fas fa-shopping-cart"></i> ({cart.length})</h2>
            {displayCart &&
            <div className="Cart-expanded">
                <p>Cart Items:</p>
                <ul>
                    {cart.map((cartItem) => <li key={cartItem}> {products[cartItem]["name"]} </li>)}
                </ul>
            </div>
            }
        </div>
    )
}

export default Cart;