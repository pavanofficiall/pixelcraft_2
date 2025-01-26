import React, { useEffect } from 'react';

const Payment = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.stripe.com/v3/pricing-table.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handleSubscription = async (planId) => {
    const userId = 'user123'; // Replace with actual user ID
    const subscription = planId === 'plan_vip' ? 'vip' : 'basic';
    await fetch('http://localhost:3001/save-subscription', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId, subscription }),
    });
  };

  return (
    <div className="container mx-auto p-4">
      <stripe-pricing-table
        pricing-table-id="prctbl_1Ql5dlL40vIGR2yfAKMd5ygT"
        publishable-key="pk_test_51QixbRL40vIGR2yf4JUaK5dsDtmVRF9DSxOSMUJ31MiCmO5lC0qJsIyfmyZxrD59nxQ8kb9bZOSQSzdCrnqteR7T004YeZabPW"
      ></stripe-pricing-table>
      <div className="text-center mt-8">
        <a
          href="https://billing.stripe.com/p/login/test_6oEeWM5eq6JtaY07ss"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
          onClick={() => handleSubscription('plan_vip')}
        >
          Go to Customer Portal
        </a>
      </div>
    </div>
  );
};

export default Payment;