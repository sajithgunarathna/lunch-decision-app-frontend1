import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import instance from '../axiosConfig';

function Session() {
    const { sessionId } = useParams();
    const { userId } = useParams();
    const navigate = useNavigate();
    const [session, setSession] = useState(null);
    const [restaurantName, setRestaurantName] = useState('');
    const [restaurants, setRestaurants] = useState([]);
    const [error, setError] = useState('');
    const [inputError, setInputError] = useState('');

    const fetchSession = async () => {
        try {
            //const response = await instance.get(`/api/sessions/${sessionId}`);
            const response = await instance.get(`/api/restaurants/${sessionId}/restaurants`);
            setSession(response.data);
            setRestaurants(response.data || []);
        } catch (error) {
            console.error('Error fetching session:', error);
            setError('Could not load session');
        }
    };

    useEffect(() => {
        

        fetchSession();
    }, [sessionId,userId]);

    // Validate and add restaurant
    const addRestaurant = async () => {
        // Check if the restaurant name is empty
        if (restaurantName.trim() === '') {
            setInputError('Restaurant name cannot be empty');
            return;
        }

        // Check if the restaurant already exists in the list
        if (restaurants.some(r => r.name.toLowerCase() === restaurantName.trim().toLowerCase())) {
            setInputError('Restaurant already added');
            return;
        }

        // Clear any existing error
        setInputError('');

        try {
            const response = await instance.post(`/api/restaurants/session/${sessionId}/user/${userId}`, { name: restaurantName });
            setRestaurants([...restaurants, response.data]);
            setRestaurantName('');
        } catch (error) {
            console.error('Error adding restaurant:', error);
            setError('Could not add restaurant');
        }
    };

    const endSession = async () => {
        try {
            const response = await instance.post(`/api/sessions/${sessionId}/end`);
            navigate(`/session/${sessionId}/result`, { state: { pickedRestaurant: response.data } });
        } catch (error) {
            console.error('Error ending session:', error);
            setError('Could not end session');
        }
    };

    if (!session) return <div>Loading...</div>;

    return (
        <div>
            <h2>Session: {session.name}</h2>
            <div>
                <input
                    type="text"
                    placeholder="Enter Restaurant Name"
                    value={restaurantName}
                    onChange={(e) => setRestaurantName(e.target.value)}
                />
                <button onClick={addRestaurant} disabled={!restaurantName.trim()}>
                    Submit Restaurant
                </button>
                {inputError && <div style={{ color: 'red' }}>{inputError}</div>}
            </div>
            <div>
                <h3>Restaurants:</h3>
                <ul>
                    {restaurants.map((r) => (
                        <li key={r.id}>{r.name}</li>
                    ))}
                </ul>
            </div>
            <button onClick={endSession}>End Session and Pick a Restaurant</button>
            {error && <div style={{ color: 'red' }}>{error}</div>}
        </div>
    );
}

export default Session;