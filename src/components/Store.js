import React from 'react';
import Product from '../components/Product';
import Cart from '../components/Cart';
import { useSelector } from 'react-redux'
import '../styles/Store.css';


const Store = () => {
    const products = useSelector(store => store.products)

    return (
        <div className="Store">
            <div className="Store-catalog">
            {Object.keys(products).map((id) => {
                return <Product key={id} id={id}/>
            })}
            </div>

        </div>
    )
}

export default Store;