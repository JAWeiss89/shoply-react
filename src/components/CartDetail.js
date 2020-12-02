import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import '../styles/CartDetail.css';


const CartDetail = () => {
    const cartItems = useSelector(store => store.cart); //array
    const uniqueCartItems = [...new Set(cartItems)]
    const products = useSelector(store => store.products); // obj
    const dispatch = useDispatch();

    const removeFromCart = (event) => {
        const id = event.target.parentNode.parentNode.id;
        dispatch({type: "REMOVEFROMCART", payload:id})
    }

    const addToCart = (event) => {
        const id = event.target.parentNode.parentNode.id;
        dispatch({type: "ADDTOCART", payload: id})
    }

    const qtyOfItem = (item) => {
        let count = 0;
        for (let cartItem of cartItems) {
            if (item === cartItem) {
                count ++;
            }
        }
        return count;
    }

    const calculateSubtotal = () => {
        let subtotal=0;
        const prices = cartItems.map((item) => {
            return Number(products[item]["price"])
        });
        for (let price of prices) {
            subtotal = subtotal + price;
        }
        return subtotal;
    }

    return (
        <div className="CartDetail">
            <h1>Here are the items in your cart</h1>
            <h2>Subtotal: ${calculateSubtotal()}</h2>
            <Link to="/">
            <button className="CartDetail-continue"><i class="fas fa-chevron-left"></i><i class="fas fa-chevron-left"></i> Continue Shopping</button>
            </Link>
            <div className="CartDetail-items">
            {uniqueCartItems.map((item) => {
                return (
                    <div className="CartDetail-items-item" key={item} id={item}>
                        <p>{products[item]["name"]} | ${products[item]["price"]}</p>
                        <img src={products[item]["image_url"]} alt={products[item]["name"]} />
                        <p> qty: {qtyOfItem(item)}</p>
                        <div className="CartDetail-items-adjust-quantity">
                            <button onClick={removeFromCart}>-</button>
                            <button onClick={addToCart}>+</button>
                        </div>

                    </div>
                )
            })}                
            </div>


        </div>
    )
}

export default CartDetail;