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

    const handleClick = () => {
        navigate('/create');
    };

    return (
        <div className="container">
            <div className="d-grid gap-2 col-6 mx-auto mb-3">
                <button className='btn btn-primary' onClick={handleClick}>新規しおり作成</button>
            </div>

            <div className="row row-cols-1 row-cols-md-4 g-4">
                {itineraries.map((itinerary) => (
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{itinerary.title}</h5>
                                <p className="card-text">{itinerary.description}</p>
                                <p>
                                    {new Date(itinerary.startDate).toLocaleDateString()} -{' '}
                                    {new Date(itinerary.endDate).toLocaleDateString()}
                                </p>
                                <Link to={`/itinerary/${itinerary.id}`} className="btn btn-primary">詳細</Link>
                            </div>
                            {/* <img src="..." className="card-img-top" alt="..."></img> */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ItineraryList;