import React from 'react';
import Bookingform from '../components/Bookingform';

export default function Bookingpage({ availableTimes, dispatch }) {
  return (
    <section style={{ padding: '2rem' }}>
      <h1>Book a Table</h1>
      <p>Fill out the form below to reserve your table at Little Lemon.</p>
      <Bookingform availableTimes={availableTimes} dispatch={dispatch} />
    </section>
  );
}