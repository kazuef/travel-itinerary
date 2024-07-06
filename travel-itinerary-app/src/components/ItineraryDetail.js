import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import api from '../api';


const ItineraryDetail = () => {
  const [itinerary, setItinerary] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  
  
  return (
    <div>ItineraryDetail</div>
  )
}

export default ItineraryDetail