import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';

const ItineraryList = () => {
    const [itineraries, setItineraries] = useState([]);

    useEffect(() => {
        api.get('/itineraries').then((response) => {
            setItineraries(response.data);
        });
    }, []);

    return (
        <div>
            <h2>Itineraries</h2>
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