import React, { useState } from 'react';

const StudentForm = () => {
    const [studentdets, setstudentdets] = useState({
        fullName: '',
        gender: '',
        school: '',
        admNo: '',
        totalFees: '',
        feesPaid: '',
    });

    // handle the input changes
    const handleInput = (e) => {
        const { name, value } = e.target;
        setstudentdets((prevdets) => ({
            ...prevdets,
            [name]: value,
        }));
    };

    // handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Student details: ", studentdets);
    };

    return (
        <div>
            <h2>Student Details</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='fullName'>Full Name: </label>
                    <input type='text' id='fullname' name='fullName' value={studentdets.fullName} onChange={handleInput} required></input>
                </div>
                <div>
                    <label htmlFor='gender'>Gender: </label>
                    <input type='text' id='gender' name='gender' value={studentdets.gender} onChange={handleInput} required></input>
                </div>
                <div>
                    <label htmlFor='school'>School: </label>
                    <input type='text' id='school' name='school' value={studentdets.school} onChange={handleInput} required></input>
                </div>
                <div>
                    <label htmlFor='admNo'>Adm No: </label>
                    <input type='text' id='admno' name='admNo' value={studentdets.admNo} onChange={handleInput} required></input>
                </div>
                <div>
                    <label htmlFor='totalFees'>Total Fees: </label>
                    <input type='text' id='totalfees' name='totalFees' value={studentdets.totalFees} onChange={handleInput} required></input>
                </div>
                <div>
                    <label htmlFor='feesPaid'>Fees Paid: </label>
                    <input type='text' id='feespaid' name='feesPaid' value={studentdets.feesPaid} onChange={handleInput} required></input>
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};
export default StudentForm;
