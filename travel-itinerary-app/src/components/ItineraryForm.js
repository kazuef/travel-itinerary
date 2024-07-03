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
    </form>
  )
}

export default ItineraryForm