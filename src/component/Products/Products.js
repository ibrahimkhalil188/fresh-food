import React, { useEffect, useState } from 'react';
import './Products.css'
const Products = () => {
    const [products, setProducts] = useState()
    const url = 'fakedata.json'
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    })
    return (
        <div className='main'>
            <h1>Our products</h1>
            <div className='products-div'>
                {
                    products.map(product =>
                        <div className='card'>
                            <img src={product.image} alt="" />
                            <p>Name: {product.name}</p>
                            <p>Price: ${product.price}</p>
                            <div className=''>
                                <h1>Hi</h1>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Products;