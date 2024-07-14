import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../api';
import '../App.css';

const ItineraryList = () => {
    const [itineraries, setItineraries] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        api.get('/').then((response) => {
            setItineraries(response.data);
        });
    }, []);

    const handleClick =() => {
        navigate('/create');
    };
    
    return (
        <div>
            <header className="itinerary-top">
                <h2 className='itinerary-title'>旅行のしおり</h2>
            </header>
            <button className='btn' onClick={handleClick}>新規しおり作成</button>
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