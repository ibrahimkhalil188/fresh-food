import React from 'react';
import './Button.css'
const Button = ({ children }) => {
    return (
        <div>
            <button>{children}</button>
        </div>
    );
};

export default Button;