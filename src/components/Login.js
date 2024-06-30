import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import instance from '../axiosConfig';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        // Basic validation
        if (!email.trim() || !password.trim()) {
            setError('Both email and password are required');
            return;
        }

        try {
            const response = await instance.post('/api/users/login', { email, password });
            // Assuming the response contains a token or user info
            console.log('Login successful:', response.data);
            // Navigate to another page on successful login, e.g., to the user's session page
            navigate(`/addSession/${response.data.id}`);
        } catch (error) {
            console.error('Error logging in:', error);
            setError('Invalid email or password');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <form onSubmit={handleLogin}>
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
                <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <a href="/signup">Sign up</a></p>
        </div>
    );
}

export default Login;
