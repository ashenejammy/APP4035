import React, { useState } from 'react';
const StudentSummary = () => {
    // Sample student details (replace with actual data)
    const sampleStudent = {
      fullName: 'John Doe',
      gender: 'Male',
      schoolName: 'ABC High School',
      admissionNumber: '12345',
      totalFees: 1000,
      feesPaid: 500,
    };
  
    // State to track whether details are visible
    const [showDetails, setShowDetails] = useState(false);
  
    // Calculate fees balance
    const feesBalance = sampleStudent.totalFees - sampleStudent.feesPaid;
  
    // Toggle details visibility
    const toggleDetails = () => {
      setShowDetails(!showDetails);
    };
  
    return (
      <div>
        <h2>Student Summary</h2>
        <button onClick={toggleDetails}>Show Details</button>
        {showDetails && (
          <div>
            <p>
              <strong>Full Name:</strong> {sampleStudent.fullName}
            </p>
            <p>
              <strong>Gender:</strong> {sampleStudent.gender}
            </p>
            <p>
              <strong>School Name:</strong> {sampleStudent.schoolName}
            </p>
            <p>
              <strong>Admission Number:</strong> {sampleStudent.admissionNumber}
            </p>
            <p>
              <strong>Total Fees:</strong> ${sampleStudent.totalFees}
            </p>
            <p>
              <strong>Fees Paid:</strong> ${sampleStudent.feesPaid}
            </p>
            <p>
              <strong>Fees Balance:</strong> ${feesBalance}
            </p>
          </div>
        )}
      </div>
    );
  };
  
  export default StudentSummary;