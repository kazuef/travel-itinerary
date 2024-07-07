import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import api from '../api';


const ItineraryDetail = () => {
  const [itinerary, setItinerary] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    api.get(`/itineraries/${id}`).then((response) => {
      setItinerary(response.data);
    });
  }, [id]);

  const handleDelete = () => {
    api.delete(`/itineraries${id}`).then(() => {
      navigate.push('/');
    });
  };

  if (!itinerary) {
    return <div>Loading...</div>;
  }
  
  
  return (
    <div>
      <h2>{itinerary.title}</h2>
      <p>{itinerary.description}</p>
      <p>
        {new Date(itinerary.startDate).toLocaleDateString()} -{' '}
        {new Date(itinerary.endDate).toLocaleDateString()}
      </p>
      <Link to={`/edit/${itinerary.id}`}>Edit</Link>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default ItineraryDetail;