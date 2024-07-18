import React, { useState, useEffect } from 'react';
import api from '../api';
import { useNavigate, useParams } from 'react-router-dom';

const ItineraryForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            api.get(`/${id}`).then((response) => {
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
            api.put(`/${id}`, itinerary).then(() => {
                navigate('/');
            });
        } else {
            api.post('/', itinerary).then(() => {
                navigate('/');
            });
        }
    };


    return (
        <form className="container" onSubmit={handleSubmit}>
            {/* <header className="itinerary-top">
                <h2 className='itinerary-title'>{id ? '予定編集' : '予定作成'}</h2>
            </header> */}
            <h2 class="mt-3">{id ? 'Edit Itinerary' : 'Create Itinerary'}</h2>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Title</label>
                <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="しおりのタイトル"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3" value={description}
                    onChange={(e) => setDescription(e.target.value)}>
                </textarea>
            </div>
            <div class="mb-3">
                <label class="form-label me-2">Start Date</label>
                <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    required
                />
            </div>
            <div class="mb-3">
                <label class="form-label me-2">End Date</label>
                <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    required
                />
            </div>
            <button class="mb-3 btn btn-primary" type="submit">{id ? 'Update' : 'Create'}</button>
        </form>
    )
}

export default ItineraryForm