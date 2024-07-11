import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ItineraryForm from './components/ItineraryForm';
import ItineraryList from './components/ItineraryList';
import ItineraryDetail from './components/ItineraryDetail';
 
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<ItineraryList />} />
        <Route path="/create" element={<ItineraryForm />} />
        <Route path="/edit/:id" element={<ItineraryForm />} />
        <Route path="/itinerary/:id" element={<ItineraryDetail />} />
      </Routes>
    </Router>
  );
};

export default App;