import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product'
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    const handlerAddToCart = (product) => {
        const newCart = [...cart, product]
        console.log(newCart, product)
        setCart(newCart)
    }

    useEffect(() => {
        fetch(`products.json`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product handlerAddToCart={handlerAddToCart} key={product.id} product={product}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;