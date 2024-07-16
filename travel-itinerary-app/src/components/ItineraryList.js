import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../api';
import '../App.css';
import { Container } from 'reactstrap';

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
        <div className="container">
            <div class="d-grid gap-2 col-6 mx-auto"> 
            <button className='btn btn-primary' onClick={handleClick}>新規しおり作成</button>
            </div>
            
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