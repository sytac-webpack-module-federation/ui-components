import React from 'react';

const Button = ({ children }) => {
    return <button onClick={() => console.log('React button clicked!')}>{children}</button>;
};

export default Button;