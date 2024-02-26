import React from 'react';

const CalculateButton = ({ onClick }) => {
    return (
        <div>
            <button onClick={onClick}>Calculate BMI</button>
        </div>
    );
};

export default CalculateButton;
