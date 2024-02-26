import React from 'react';

const InputForm = ({ label, value, onChange }) => {
    return (
        <div>
            <label>{label}</label>
            <input
                type="number"
                value={value}
                onChange={(e) => onChange(parseFloat(e.target.value))}
            />
        </div>
    );
};

export default InputForm;
