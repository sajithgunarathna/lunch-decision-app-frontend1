import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

function Result() {
    const location = useLocation();
    const navigate = useNavigate();
    const { sessionId } = useParams();
    const pickedRestaurant = location.state?.pickedRestaurant;

    if (!pickedRestaurant) {
        navigate(`/session/${sessionId}`);
        return null;
    }

    return (
        <div>
            <h2>The picked restaurant is: {pickedRestaurant.name}</h2>
            <button onClick={() => navigate('/')}>Start a New Session</button>
        </div>
    );
}

export default Result;