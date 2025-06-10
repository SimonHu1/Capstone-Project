import React, { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Bookingpage from './pages/Bookingpage';

const initializeTimes = () => {
  return ['17:00', '18:00', '19:00', '20:00', '21:00'];
};

// Reducer to update available times
const updateTimes = (state, date) => {
  return initializeTimes();
};

export default function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/booking"
          element={
            <Bookingpage
              availableTimes={availableTimes}
              dispatch={dispatch}
            />
          }
        />
      </Routes>
    </main>
  );
}
