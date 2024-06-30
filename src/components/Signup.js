import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import instance from '../axiosConfig';

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();

        // Basic validation
        if (!name.trim() || !email.trim() || !password.trim()) {
            setError('All fields are required');
            return;
        }

        // Check for email validity (basic pattern check)
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            setError('Please enter a valid email address');
            return;
        }

        // Clear any existing errors
        setError('');

        try {
            await instance.post('/api/users', { name, email, password });
            setSuccessMessage('Signup successful! You can now login.');
            setName('');
            setEmail('');
            setPassword('');
            // Optionally redirect to the login page after successful signup
            setTimeout(() => {
                navigate('/login');
            }, 2000); // Redirect after 2 seconds
        } catch (error) {
            console.error('Error signing up:', error);
            // Extract and set the error message from the response
            if (error.response && error.response.data) {
                setError(error.response.data);
            } else {
                setError('Could not sign up, please try again later.');
            }
        }
    };

    return (
        <div>
            <h2>Sign Up</h2>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}
            <form onSubmit={handleSignup}>
                <div>
                    <input
                        type="text"
                        placeholder="Enter Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Sign Up</button>
            </form>
            <p>Already have an account? <a href="/login">Login</a></p>
        </div>
    );
}

export default Signup;
