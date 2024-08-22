import React, { useState } from 'react';
import BookingForm from "../components/BookingForm";
import MentorList from '../components/MentorList';

function BookingPage() {
    const [areaOfInterest, setAreaOfInterest] = useState('');

    const handleBookingSubmit = (bookingData) => {
        console.log('Booking submitted:', bookingData);
    };

    return (
        <div className="container">
            <h1>Book a Mentor Session</h1>
            <BookingForm onSubmit={handleBookingSubmit} />
            <MentorList areaOfInterest={areaOfInterest} />
        </div>
    );
}

export default BookingPage;
