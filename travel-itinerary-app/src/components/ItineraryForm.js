import React, { useState, useEffect } from 'react';
import api from '../api';
import { useNavigate, useParams } from 'react-router-dom';

const ItineraryForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const [scheduleTime, setScheduleTime] = useState('');

    const [forms, setForms] = useState([{ id: Date.now() }]);
    const [schedule, setSchedule] = useState([{}]);

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

    const addForm =  () => {
        setForms([...forms, { id: Date.now() }]);
    }

    const deleteForm = (id) => {
        const newForms = forms.filter(form => form.id !== id);
        setForms(newForms);
    }

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
            <h2 className='border-bottom border-success pb-2'>{id ? '旅程編集' : '旅程作成'}</h2>
            <div className="border rounded-2 p-3 mb-3">
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Title</label>
                    <input
                        type="text"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="しおりのタイトル"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                    <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3" value={description}
                        onChange={(e) => setDescription(e.target.value)}>
                    </textarea>
                </div>
                <div className="mb-3">
                    <label class="form-label me-2">Start Date</label>
                    <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label class="form-label me-2">End Date</label>
                    <input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        required
                    />
                </div>
            </div>

            <h3 className='border-bottom border-success pb-2 mb-3'>スケジュール</h3>
            <botton className="mb-3 me-2 btn btn-primary" type='button' onClick={addForm}>Add</botton>

            {forms.map(form => (
                <div className="border rounded-2 p-3 mb-3" key={form.id}>
                    <div className="mb-3">
                        <input
                            type='time'
                            class='form-control'
                            value={schedule.time}
                            onChange={(e) => setSchedule(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type='text'
                            class='form-control'
                            placeholder='タイトル'
                            value={schedule.title}
                            onChange={(e) => setSchedule(e.target.value)}
                            required
                        />
                    </div>
                    <div className='mb-3'>
                        <textarea
                            class='form-control'
                            placeholder='説明'
                            rows='3'
                            value={schedule.description}
                            onChange={(e) => setSchedule(e.target.value)}
                        >
                        </textarea>
                    </div>
                    <botton className="me-2 btn btn-primary" type='button' onClick={deleteForm}>Delete</botton>
                </div>
            ))}

            <button className="mb-3 btn btn-primary" type="submit">{id ? 'Update' : 'Create'}</button>
        </form>
    )
}

export default ItineraryForm