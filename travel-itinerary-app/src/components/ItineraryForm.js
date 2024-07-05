import React, { useState, useEffect } from 'react';
import api from '../api';
import { useHistory, useParams } from 'react-router-dom';

const ItineraryForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            api.get(`/itineraries/${id}`).then((response) => {
                const { title, description, startDate, endDate } = response.data;
                setTitle(title);
                setDescription(description);
                setStartDate(startDate);
                setEndDate(endDate);
            });
        }
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const itinerary = { title, description, startDate, endDate };
        if (id) {
            api.put(`/itineraries/${id}`, itinerary).then(() => {
                history.push('/');
            });
        } else {
            api.post('/itineraries', itinerary).then(() => {
                history.push('/');
            });
        }
    };


    return (
        <form onSubmit={handleSubmit}>
            <h2>{id ? 'Edit Itinerary' : 'Create Itinerary'}</h2>
            <div>
                <label>Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Description</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div>
                <label>Start Date</label>
                <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    required                
                />
            </div>
            <div>
                <label>End Date</label>
                <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    required
                />
            </div>
            <button type="submit">{id ? 'Update' : 'Create'}</button>
        </form>
    )
}

export default ItineraryForm