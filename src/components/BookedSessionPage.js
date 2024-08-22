import React from 'react';
import { useLocation } from 'react-router-dom';

function BookedSessionPage() {
    const location = useLocation();
    const sessionData = location.state?.sessionData;

    return (
        <div>
            <h2>Session Booked Successfully!</h2>
            {sessionData ? (
                <div>
                    <p><strong>Student Name:</strong> {sessionData.studentName}</p>
                    <p><strong>Mentor Name:</strong> {sessionData.mentorName}</p>
                    <p><strong>Time:</strong> {sessionData.time}</p>
                    <p><strong>Area of Interest:</strong> {sessionData.areaOfInterest}</p>
                </div>
            ) : (
                <p>No session data available.</p>
            )}
        </div>
    );
}

export default BookedSessionPage;
