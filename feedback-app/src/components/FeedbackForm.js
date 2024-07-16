// src/components/FeedbackForm.js
import React, { useState } from 'react';

const FeedbackForm = ({ onAddFeedback }) => {
    const [name, setName] = useState('');
    const [feedback, setFeedback] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && feedback) {
            onAddFeedback({ name, feedback });
            setName('');
            setFeedback('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="feedback">Feedback:</label>
                <textarea
                    id="feedback"
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    required
                ></textarea>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default FeedbackForm;
