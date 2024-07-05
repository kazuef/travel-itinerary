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
        <Route path="/" exact component={ItineraryList} />
        <Route path="/create" component={ItineraryForm} />
        <Route path="/edit/:id" component={ItineraryForm} />
        <Route path="/itinerary/:id" component={ItineraryDetail} />
      </Routes>
    </Router>
  );
};

export default App;