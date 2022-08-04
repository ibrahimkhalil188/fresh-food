import React, { useEffect, useState } from 'react';
import './Products.css'
import { BsCartCheck } from 'react-icons/bs'
import { AiOutlineHeart, AiOutlineEye } from 'react-icons/ai'
const Products = () => {
    const [products, setProducts] = useState()
    const url = 'fakedata.json'
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    })
    return (
        <div className='main' id='product'>
            <h2>Our products</h2>
            <div className='products-div'>
                {
                    products?.map(product =>
                        <div className='card' key={product.id}>
                            <img src={product.image} alt="" />
                            <div className='card-footer'>
                                <span title='Show Details'>
                                    <AiOutlineEye></AiOutlineEye>
                                </span>
                                <span title='Add to whitelist'>
                                    <AiOutlineHeart></AiOutlineHeart>
                                </span>
                                <span title='Add to cart'>
                                    <BsCartCheck></BsCartCheck>
                                </span>
                            </div>
                            <div className='product-details'>
                                <p>Name: {product.name}</p>
                                <p>Price: ${product.price}</p>
                            </div>
                            <button>BUY NOW</button>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Products;