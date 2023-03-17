import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { getMotorcycles } from '../../redux/motorcycles/motorcycles';
import { addReservation, fetchReservations } from '../../redux/reservations/reservation';
import './modal.css';

const Modal = ({ selectedCity, setIsModalOpen }) => {

  const [duration, setDuration] = useState('');
  const [reservationDate, setReservationDate] = useState('');
  const motorcyclesData = useSelector((state) => state.motorcycles);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const gohome = () => navigate('/myreservations');

  const motorcycles = motorcyclesData.map((motorcycle) => ({
    id: motorcycle.id,
    motorcycle_name: motorcycle.name,
  }));

  useEffect(() => {
    dispatch(getMotorcycles());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedMotorcycle  = motorcycles.find((motorcycle) => motorcycle.motorcycle_name === motorcycleName);
    const motorcycleId = selectedMotorcycle ? selectedMotorcycle .id : null;
    const data = {
      reservation_date: reservationDate,
      duration,
      motorcycle_id: motorcycleId,
      city: selectedCity,
    };
    dispatch(addReservation(data));
    dispatch(fetchReservations());
    setIsModalOpen(false);
    gohome();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Fill the fieds below</h3>
     
      <label htmlFor=" motorcycleName"> Motorcycle Name:</label>
      <select id="motorcycleName" value={motorcycleName} onChange={(e) => setMotorcycleName(e.target.value)}>
        <option value="">Select a motorcycle</option>
        {motorcycles.map((motorcycle) => (
          <option key={motorcycle.id} value={motorcycle.motorcycle_name}>{motorcycle.motorcycle_name}</option>
        ))}
      </select>

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
Modal.propTypes = ({
    selectedCity: PropTypes.string,
  }).isRequired;

export default Modal;