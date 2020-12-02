import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
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
            <Link to={`/products/${id}`}>
            <p className="Product-name">{products[id]["name"]}<span className="Product-price">${products[id]["price"]}</span></p>
            <img src={products[id]["image_url"]} alt={products[id]["name"]}/>
            </Link>
            <p></p>
            <button onClick={addToCart}>Add to Cart</button>
            {cartItems.includes(id) && 
                <button onClick={removeFromCart}>Remove</button>
            }
        </div>
    )
}

export default Product;