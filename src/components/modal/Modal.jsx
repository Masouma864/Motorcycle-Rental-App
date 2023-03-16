import React, { useState } from 'react';
import './modal.css';

const Modal = () => {
  const [userId, setUserId] = useState('');
  const [bikeId, setBikeId] = useState('');
  const [duration, setDuration] = useState('');
  const [reservationDate, setReservationDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      userId,
      bikeId,
      duration,
      reservationDate,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Feel the fieds below</h3>
      <label htmlFor="userId">User ID:</label>
      <input
        type="text"
        id="userId"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />

      <label htmlFor="bikeId">Bike ID:</label>
      <input
        type="text"
        id="bikeId"
        value={bikeId}
        onChange={(e) => setBikeId(e.target.value)}
      />

      <label htmlFor="duration">Duration:</label>
      <input
        type="number"
        id="duration"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
      />

      <label htmlFor="reservationDate">Reservation Date:</label>
      <input
        type="date"
        id="reservationDate"
        value={reservationDate}
        onChange={(e) => setReservationDate(e.target.value)}
      />

      <button type="submit">Book Reservation</button>
    </form>
  );
};

export default Modal;