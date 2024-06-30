import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import instance from '../axiosConfig';

function Home() {
    const [sessionName, setSessionName] = useState('');
    const [sessionId, setSessionId] = useState('');
    const [userId, setUserId] = useState('');
    const [error, setError] = useState('');
    const [sessionIdError, setSessionIdError] = useState('');
    const [userIdError, setUserIdError] = useState('');
    const navigate = useNavigate();

    // Validate and start a new session
    const startSession = async () => {
        // Check if the session name is empty
        if (!sessionName.trim()) {
            setError('Session name cannot be empty');
            return;
        }

        // Check if the user ID is empty
        if (!userId.trim()) {
            setUserIdError('User ID cannot be empty');
            return;
        }

        // Clear any existing error
        setError('');

        try {
            const response = await instance.post('/api/sessions', { name: sessionName });
            navigate(`/session/${response.data.id}/user/${userId}`);
        } catch (error) {
            console.error('Error starting session:', error);
            setError('Failed to start session');
        }
    };

    // Validate and join an existing session
    const joinSession = () => {
        console.log('inside the join session');
        // Check if the session ID is empty
        if (!sessionId.trim()) {
            setSessionIdError('Session ID cannot be empty');
            return;
        }

        // Check if the user ID is empty
        if (!userId.trim()) {
            setUserIdError('User ID cannot be empty');
            return;
        }

        // Clear any existing error
        setSessionIdError('');
        navigate(`/session/${sessionId}/user/${userId}`);
    };

    return (
        <div>
            <h1>Lunch Decision App</h1>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            {sessionIdError && <div style={{ color: 'red' }}>{sessionIdError}</div>}
            {userIdError && <div style={{ color: 'red' }}>{userIdError}</div>}
            <div>
                <input
                    type="text"
                    placeholder="New Session Name"
                    value={sessionName}
                    onChange={(e) => setSessionName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Enter User ID"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                />
                <button onClick={startSession}>Start Session</button>
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Enter Session ID"
                    value={sessionId}
                    onChange={(e) => setSessionId(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Enter User ID"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                />
                <button onClick={joinSession}>Join Session</button>
            </div>
            <div>
                
            </div>
        </div>
    );
}

export default Home;