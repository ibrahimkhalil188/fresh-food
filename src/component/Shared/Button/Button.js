import React from 'react';
import './Button.css'
const Button = ({ children }) => {
    return (
        <div>
            <button className='button-large'>{children}</button>
        </div>
    );
};

export default Button;