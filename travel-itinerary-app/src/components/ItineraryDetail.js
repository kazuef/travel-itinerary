import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import api from '../api';


const ItineraryDetail = () => {
  const [itinerary, setItinerary] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    api.get(`/${id}`).then((response) => {
      setItinerary(response.data);
    });
  }, [id]);

  const handleDelete = () => {
    api.delete(`/${id}`).then(() => {
      navigate('/');
    });
  };

  if (!itinerary) {
    return <div>Loading...</div>;
  }
  
  
  return (
    <div className="container">
      {/* <header className="itinerary-top">
        <h2 className='itinerary-title'>予定詳細</h2>
      </header> */}
      <h2>{itinerary.title}</h2>
      <p>{itinerary.description}</p>
      <p>
        {new Date(itinerary.startDate).toLocaleDateString()} -{' '}
        {new Date(itinerary.endDate).toLocaleDateString()}
      </p>
      <Link to={`/edit/${itinerary.id}`} class="me-2">Edit</Link>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default ItineraryDetail;