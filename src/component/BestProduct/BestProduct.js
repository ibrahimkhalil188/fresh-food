import React from 'react';
import banner1 from '../../Image/banner1.jpg'
import banner2 from '../../Image/banner2.jpg'
import './BestProduct.css'
import { FaQuoteLeft } from 'react-icons/fa'
const BestProduct = () => {
    return (
        <div className='best-product-div'>
            <div>
                <img className='quote-banner' src={banner1} alt="" />
                <p></p>
                <div className='quote-one'>
                    <FaQuoteLeft></FaQuoteLeft><br></br>
                    FRESH FOOD <br></br>EAT FRESH FELL FRESH
                    <button>BUY NOW</button>
                </div>
            </div>
            <div>
                <img className='quote-banner' src={banner2} alt="" />
                <div className='quote-two'>
                    Love your health and love your vegetables.
                    <button>BUY NOW</button>
                </div>
            </div>
        </div>
    );
};

export default BestProduct;