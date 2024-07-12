import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../api';
import '../App.css';

const ItineraryList = () => {
    const [itineraries, setItineraries] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        api.get('/itineraries').then((response) => {
            setItineraries(response.data);
        });
    }, []);

    const handleClick =() => {
        navigate('/create');
    };
    
    return (
        <div>
            <header class="itinerary-top">
                <h2 class='itinerary-title'>Itineraries</h2>
            </header>
            <button class='btn' onClick={handleClick}>Create New Itinerary</button>
            <ul>
                {itineraries.map((itinerary) => (
                    <li key={itinerary.id}>
                        <Link to={`/itinerary/${itinerary.id}`}>{itinerary.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ItineraryList;