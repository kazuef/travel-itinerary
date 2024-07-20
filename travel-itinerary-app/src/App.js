import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ItineraryForm from './components/ItineraryForm';
import ItineraryList from './components/ItineraryList';
import ItineraryDetail from './components/ItineraryDetail';
import Headers from './components/Headers';

const App = () => {
  return (
    <div>
      <Headers />

      <Routes>
        <Route path="/" exact element={<ItineraryList />} />
        <Route path="/create" element={<ItineraryForm />} />
        <Route path="/edit/:id" element={<ItineraryForm />} />
        <Route path="/itinerary/:id" element={<ItineraryDetail />} />
      </Routes>
    </div>
  );
};

export default App;