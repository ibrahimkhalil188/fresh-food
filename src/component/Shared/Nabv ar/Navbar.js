import React from 'react';
import "./Navbar.css"

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='logo'>
                <h2>FreshFood</h2>
            </div>
            <div>
                <input type='text' className='search-bar' ></input ><span className='search'>Search</span>
            </div>
            <div className='menu'>
                <li><a href='#home'>Home</a></li>
                <li><a href='#product'>Product</a></li>
                <li><a href='#about'>About</a></li>
            </div>
        </div>
    );
};

export default Navbar;