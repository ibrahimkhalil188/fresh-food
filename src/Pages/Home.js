import React from 'react';
import BestProduct from '../component/BestProduct/BestProduct';
import BusinessSum from '../component/Business/BusinessSum';
import FirstHero from '../component/Hero Section/FirstHero';
import Products from '../component/Products/Products';

const Home = () => {
    return (
        <div>
            <FirstHero></FirstHero>
            <Products></Products>
            <BestProduct></BestProduct>
            <BusinessSum></BusinessSum>
        </div>
    );
};

export default Home;