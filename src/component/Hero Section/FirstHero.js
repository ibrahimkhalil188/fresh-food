import React from 'react';
import background from '../../Image/greenbackground.jpg';
import heroImage from '../../Image/fresh-food.webp'
import './FirstHero.css'
//import Button from '../Shared/Button/Button';
const FirstHero = () => {
    return (
        <div className='hero' style={{ backgroundImage: `url(${background})`, height: '85vh', backgroundRepeat: 'no-repeat', backgroundSize: "cover", backgroundPosition: "center" }}>

            <div className='hero-text'>
                <h1>Fresh Vegetable, Meals and more, online delivery.</h1>
                <h3>Best Online Grocery Shop in Bangladesh. We Deliver
                    to your door whatever you want in the local store.</h3>
                {/* <div className='button'>
                    <Button>BUY NOW</Button>
                </div> */}
            </div>
            <div className='hero-image'>
                <img src={heroImage} alt="" />
            </div>
        </div>
    );
};

export default FirstHero; 