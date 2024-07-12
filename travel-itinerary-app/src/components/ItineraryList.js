import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';
import '../App.css';

const ItineraryList = () => {
    const [itineraries, setItineraries] = useState([]);

    useEffect(() => {
        api.get('/itineraries').then((response) => {
            setItineraries(response.data);
        });
    }, []);

    return (
        <div>
            <header class="itinerary-top">
                <h2 class='itinerary-title'>Itineraries</h2>
            </header>
            <Link to='/create'>Create New Itinerary</Link>
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