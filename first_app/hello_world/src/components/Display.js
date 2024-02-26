import React from 'react';

const Display = ({ bmi, bmiCategory }) => {
    return (
        <div>
            <div>Your BMI is: {bmi.toFixed(2)}</div>
            <div>BMI Category: {bmiCategory}</div>
        </div>
    );
};

export default Display;
