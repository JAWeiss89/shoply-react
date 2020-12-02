import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';

import '../styles/ProductDetail.css';

const ProductDetail = () => {

    const products = useSelector(store =>  store.products);
    const cart = useSelector(store => store.cart);
    const {id} = useParams();
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch({type: "ADDTOCART",payload: id})
    }

    const removeFromCart = () => {
        dispatch({type: "REMOVEFROMCART", payload: id})
    }
    return (
        <div className="ProductDetail">
            <div className="ProductDetail-first">
                <img src={products[id]["image_url"]} alt={products[id]["name"]} />
            </div>
            <div className="ProductDetail-second">
                <h2>{products[id]["name"]}</h2>
                <h3>Price: ${products[id]["price"]}</h3>
                <p>{products[id]["description"]}</p>
            </div>
            {cart.includes(id)
            ? <div>
                <button onClick={removeFromCart}>Remove from cart</button>
              </div>
            : <div>
                <button onClick={addToCart}>Add to cart</button>
              </div>}

        </div>
    )
}

export default ProductDetail;