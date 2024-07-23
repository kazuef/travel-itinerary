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

    const handleClick = () => {
        navigate('/create');
    };

    return (
        <div className="container">
            <div class="d-grid gap-2 col-6 mx-auto mb-3">
                <button className='btn btn-primary' onClick={handleClick}>新規しおり作成</button>
            </div>

            <div class="row row-cols-1 row-cols-md-4 g-4">
                {itineraries.map((itinerary) => (
                    <div class="col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">{itinerary.title}</h5>
                                <p class="card-text">{itinerary.description}</p>
                                <p>
                                    {new Date(itinerary.startDate).toLocaleDateString()} -{' '}
                                    {new Date(itinerary.endDate).toLocaleDateString()}
                                </p>
                                <Link to={`/itinerary/${itinerary.id}`} class="btn btn-primary">詳細</Link>
                            </div>
                            {/* <img src="..." class="card-img-top" alt="..."></img> */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ItineraryList;