import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getMotorcycles } from '../../redux/motorcycles/motorcycles';
import { addReservation, fetchReservations } from '../../redux/reservations/reservation';
import loader from '../../assets/loader2.gif';

const Modal = ({ selectedCity }) => {
  const [motorcycleName, setMotorcycleName] = useState('');
  const [duration, setDuration] = useState('');
  const [reservationDate, setReservationDate] = useState('');
  const [isLoading, setIsLoading] = useState(false);
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
    setIsLoading(true);
    const selectedMotorcycle = motorcycles.find((motorcycle) => motorcycle.motorcycle_name === motorcycleName);
    const motorcycleId = selectedMotorcycle ? selectedMotorcycle.id : null;
    const selectedCityIsValid = selectedCity && selectedCity.trim().length > 0;
    if (!selectedCityIsValid) {
      toast.error('Please Close the Popup and Select a City');
      setIsLoading(false);
      return;
    }
    const data = {
      reservation_date: reservationDate,
      duration,
      motorcycle_id: motorcycleId,
      city: selectedCity,
    };
    dispatch(addReservation(data)).then(() => {
      toast.info('Successfully made a reservation');
      dispatch(fetchReservations()).then(() => gohome());
      setIsLoading(false);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Fill the fieds below</h3>

      <label htmlFor=" motorcycleName">
        {' '}
        Motorcycle Name:
        <select id="motorcycleName" value={motorcycleName} onChange={(e) => setMotorcycleName(e.target.value)} required>
          <option value="">Select a motorcycle</option>
          {motorcycles.map((motorcycle) => (
            <option key={motorcycle.id} value={motorcycle.motorcycle_name}>{motorcycle.motorcycle_name}</option>
          ))}
        </select>
      </label>
      <label htmlFor="duration">
        Duration:
        <input
          type="number"
          id="duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          required
        />
      </label>
      <label htmlFor="reservationDate">
        Reservation Date:
        <input
          type="date"
          id="reservationDate"
          value={reservationDate}
          onChange={(e) => setReservationDate(e.target.value)}
        />
      </label>
      <button type="submit">
        {isLoading ? (
          <img src={loader} alt="loading" className="spinner" />
        ) : (
          'Book Reservation'
        )}
      </button>
    </form>
  );
};
Modal.propTypes = ({
  selectedCity: PropTypes.string,
}).isRequired;

export default Modal;
