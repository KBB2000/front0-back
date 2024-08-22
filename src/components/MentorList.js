import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/MentorList.css';

function MentorList({ areaOfInterest }) {
    const [mentors, setMentors] = useState([]);

    useEffect(() => {
        if (areaOfInterest) {
            axios.get('/api/mentors')
                .then(response => {
                    setMentors(response.data.filter(mentor =>
                        mentor.areas_of_expertise.includes(areaOfInterest)
                    ));
                })
                .catch(error => console.error('Error fetching mentors:', error));
        }
    }, [areaOfInterest]);

    return (
        <div className="mentor-list">
            <h2>Available Mentors</h2>
            {mentors.length > 0 ? (
                <ul>
                    {mentors.map(mentor => (
                        <li key={mentor.id} className={mentor.is_premium ? 'premium' : ''}>
                            {mentor.name} - {mentor.areas_of_expertise} {mentor.is_premium && '(Premium)'}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No mentors available for this area of interest.</p>
            )}
        </div>
    );
}

export default MentorList;
