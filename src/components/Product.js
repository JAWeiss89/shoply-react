import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import '../styles/Product.css';


const Product = ( {id} ) => {
    const dispatch = useDispatch();
    const products = useSelector(store => store.products);
    const cartItems = useSelector(store => store.cart);
    const addToCart= (event) => {
        const productID = event.target.parentNode.id;
        dispatch({type: "ADDTOCART", payload: productID})
    }
    const removeFromCart = (event) => {
        const productID = event.target.parentNode.id;
        dispatch({type: "REMOVEFROMCART", payload: productID})
    }


    return (
        <div className="Product" id={id}>
            <p className="Product-name">{products[id]["name"]}<span className="Product-price">${products[id]["price"]}</span></p>
            <img src={products[id]["image_url"]} alt={products[id]["name"]}/>
            <p></p>
            <button onClick={addToCart}>Add to Cart</button>
            {cartItems.includes(id) && 
                <button onClick={removeFromCart}>Remove</button>
            }
        </div>
    )
}

export default Product;