import React, { useState } from 'react';
import axios from 'axios';

const DonationForm = () => {
  const [amount, setAmount] = useState('');

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleDonate = async () => {
    if (!amount || amount <= 0) {
      alert('Please enter a valid amount');
      return;
    }

    const res = await loadRazorpayScript();
    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/create-order', { amount });
      const { orderId } = response.data;

      const options = {
        key: 'rzp_test_rkDyuSoV7C6SDM', 
        amount: amount * 100,
        currency: 'INR',
        name: 'Your Organization',
        description: 'Donation',
        order_id: orderId,
        handler: (response) => {
          alert('Thank you for your donation!');
          console.log(response);
        },
        prefill: {
          name: '',
          email: '',
          contact: ''
        },
        theme: {
          color: '#3399cc'
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error(error);
      alert('Something went wrong while creating the order.');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '350px' }}>
      <h2>Donate</h2>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount"
        style={{ padding: '10px', width: '200px' }}
      />
      <br />
      <button onClick={handleDonate} style={{ marginTop: '20px', padding: '10px 20px' }}>
        Donate Now
      </button>
    </div>
  );
};

export default DonationForm;
