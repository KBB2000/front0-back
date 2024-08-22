import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/BookingForm.css";

function BookingForm({ onSubmit }) {
    const [studentName, setStudentName] = useState('');
    const [mentorId, setMentorId] = useState('');
    const [time, setTime] = useState('');
    const [areaOfInterest, setAreaOfInterest] = useState('');
    const [bookedSessions, setBookedSessions] = useState([]); 
    const navigate = useNavigate(); 
    const mentors = [
        { id: 1, name: 'John Doe', interest: 'web development' },
        { id: 2, name: 'Jane Smith', interest: 'data science' },
        { id: 3, name: 'Emily Johnson', interest: 'design' },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const selectedMentor = mentors.find(mentor => mentor.id === parseInt(mentorId));

        const newSession = {
            studentName,
            mentorName: selectedMentor?.name || 'Unknown Mentor',
            time,
            areaOfInterest,
        };

        setBookedSessions([...bookedSessions, newSession]);

        setStudentName('');
        setMentorId('');
        setTime('');
        setAreaOfInterest('');

        onSubmit(newSession);

        navigate('/booked-session', { state: { sessionData: newSession } });
        alert("Added Data Succesfully...")
    };

    const filteredMentors = mentors.filter(mentor => 
        mentor.interest.toLowerCase() === areaOfInterest.toLowerCase()
    );

    return (
        <div className="form-container">
            <h2>Book a Session</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Your Name" 
                    value={studentName} 
                    onChange={(e) => setStudentName(e.target.value)} 
                    required 
                />

                <select 
                    value={areaOfInterest} 
                    onChange={(e) => setAreaOfInterest(e.target.value)} 
                    required
                >
                    <option value="">Select Area of Interest</option>
                    <option value="web development">Web Development</option>
                    <option value="data science">Data Science</option>
                    <option value="design">Design</option>
                </select>

                <select value={mentorId} onChange={(e) => setMentorId(e.target.value)} required>
                    <option value="">Select Mentor</option>
                    {filteredMentors.length > 0 ? (
                        filteredMentors.map(mentor => (
                            <option key={mentor.id} value={mentor.id}>
                                {mentor.name}
                            </option>
                        ))
                    ) : (
                        <option disabled>No mentors available for the selected area</option>
                    )}
                </select>

                <input 
                    type="time" 
                    value={time} 
                    onChange={(e) => setTime(e.target.value)} 
                    required 
                />
                <button type="submit">Book Session</button>
            </form>

            <div className="booked-sessions">
                <h3>Booked Sessions</h3>
                {bookedSessions.length === 0 ? (
                    <p>No sessions booked yet.</p>
                ) : (
                    <ul>
                        {bookedSessions.map((session, index) => (
                            <li key={index}>
                                <strong>{session.studentName}</strong> booked a session with <strong>{session.mentorName}</strong> at <strong>{session.time}</strong> for <strong>{session.areaOfInterest}</strong>.
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default BookingForm;
