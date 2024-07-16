// src/App.js
import React, { useState } from 'react';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import './App.css';

const App = () => {
    const [feedbacks, setFeedbacks] = useState([]);

    const addFeedback = (feedback) => {
        setFeedbacks([ ...feedbacks, feedback ]);
    };

    return (
        <div className="App">
            <h1>Feedback Page</h1>
            <FeedbackForm onAddFeedback={addFeedback} />
            <FeedbackList feedbacks={feedbacks} />
        </div>
    );
};

export default App;
