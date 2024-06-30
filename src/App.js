import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Session from './components/Session';
import Result from './components/Result';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Signup />} />
                <Route path="/session/:sessionId/user/:userId" element={<Session />} />
                <Route path="/session/:sessionId/result" element={<Result />} />
                <Route path="/addSession/:userId" element={<Home/>}/>
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
}

export default App;