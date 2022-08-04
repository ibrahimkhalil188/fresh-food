import React from 'react';
import BestProduct from '../component/BestProduct/BestProduct';
import FirstHero from '../component/Hero Section/FirstHero';
import Products from '../component/Products/Products';
import Reviews from '../component/Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <FirstHero></FirstHero>
            <Products></Products>
            <BestProduct></BestProduct>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;