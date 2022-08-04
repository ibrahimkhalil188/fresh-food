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
        <div className='products-div'>
            <h1>Our products</h1>
            {
                products.map(product =>
                    <div>

                    </div>)
            }
        </div>
    );
};

export default Products;