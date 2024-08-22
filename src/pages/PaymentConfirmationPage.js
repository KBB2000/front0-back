import React from 'react';
import '../styles/PaymentConfirmationPage.css';

function PaymentConfirmationPage() {
    return (
        <div className="payment-confirmation-container">
            <h1>Payment Successful!</h1>
            <p>Your booking has been confirmed. You will receive an email with the session details shortly.</p>
            <p>Thank you for using Mentor Booking!</p>
        </div>
    );
}

export default PaymentConfirmationPage;
