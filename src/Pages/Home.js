import React from 'react';
import BestProduct from '../component/BestProduct/BestProduct';
import FirstHero from '../component/Hero Section/FirstHero';
import Products from '../component/Products/Products';

const Home = () => {
    return (
        <div>
            <FirstHero></FirstHero>
            <Products></Products>
            <BestProduct></BestProduct>
        </div>
    );
};

export default Home;