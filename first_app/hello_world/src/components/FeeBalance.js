import React, { useState } from 'react';

const FeesBalanceCalculator = () => {
  // State to store student details
  const [initialPayment, setInitialPayment] = useState('');
  const [totalFees, setTotalFees] = useState('');
  const [feesBalance, setFeesBalance] = useState(null);

  // Handle input changes
  const handleInitialPaymentChange = (e) => {
    setInitialPayment(e.target.value);
  };

  const handleTotalFeesChange = (e) => {
    setTotalFees(e.target.value);
  };

  // Calculate fees balance
  const calculateBalance = () => {
    if (initialPayment && totalFees) {
      const balance = totalFees - initialPayment;
      setFeesBalance(balance);
    } else {
      setFeesBalance(null);
    }
  };

  return (
    <div>
      <h2>Fees Balance Calculator</h2>
      <div>
        <label htmlFor="initialPayment">Initial Payment:</label>
        <input
          type="number"
          id="initialPayment"
          value={initialPayment}
          onChange={handleInitialPaymentChange}
        />
      </div>
      <div>
        <label htmlFor="totalFees">Total Fees:</label>
        <input
          type="number"
          id="totalFees"
          value={totalFees}
          onChange={handleTotalFeesChange}
        />
      </div>
      <button onClick={calculateBalance}>Calculate Balance</button>
      {feesBalance !== null && (
        <p>
          Fees Balance: <strong>${feesBalance}</strong>
        </p>
      )}
    </div>
  );
};

export default FeesBalanceCalculator;
