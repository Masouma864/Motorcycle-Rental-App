import React, { useEffect, useState } from 'react';
import './userReservationTable.css';
import { Table, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import loader from '../../assets/loader.gif';
import loaders from '../../assets/loader2.gif';
import date from '../../assets/date.png';
import city from '../../assets/city.png';
import motorcycle from '../../assets/motorcycle.png';
import del from '../../assets/del.png';
import time from '../../assets/time.png';
import {
  fetchReservations,
  deleteReservation,
} from '../../redux/reservations/reservation';
import { getMotorcycles } from '../../redux/motorcycles/motorcycles';

const UserReservationTable = () => {
  const motorcyclesData = useSelector((state) => state.motorcycles);
  const { reservations, loading, error } = useSelector(
    (state) => state.reservations,
  );
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const motorcycles = motorcyclesData.map((motorcycle) => ({
    id: motorcycle.id,
    motorcycle_name: motorcycle.name,
  }));

  useEffect(() => {
    dispatch(getMotorcycles());
    dispatch(fetchReservations());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCancelClick = (id) => {
    setIsLoading(true);
    dispatch(deleteReservation(id)).then(() => {
      toast.info('Reservation deleted');
      dispatch(fetchReservations());
      setIsLoading(false);
    });
  };

  useEffect(() => {
    dispatch(fetchReservations());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="center">
        <img className="loading-motorcycles" src={loaders} alt="loading" />
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="tablecont">
      {reservations.length === 0 && <div className="no-reservations">No reservations added yet</div>}
      {reservations.length > 0 && (
        <Table striped bordered hover className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>
                Motorcycle
                {' '}
                <img src={motorcycle} alt="date" className="table-img" />
              </th>
              <th>
                City
                {' '}
                <img src={city} alt="city" className="table-img" />
              </th>
              <th>
                Date
                {' '}
                <img src={date} alt="date" className="table-img" />
              </th>
              <th>
                Duration
                {' '}
                <img src={time} alt="time" className="table-img" />
              </th>
              <th>
                Delete
                {' '}
                <img src={del} alt="delete" className="table-img" />
              </th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((reservation) => {
              const motorcycle = motorcycles.find((motorcycle) => motorcycle.id === reservation.motorcycle_id);
              const motorcycleName = motorcycle ? motorcycle.motorcycle_name : 'Unknown Motorcycle';
              return (
                <tr key={reservation.id}>
                  <td>{reservation.id}</td>
                  <td>{motorcycleName}</td>
                  <td>{reservation.city}</td>
                  <td>{reservation.reservation_date}</td>
                  <td>
                    {reservation.duration}
                    {' '}
                    hrs
                  </td>
                  <td>
                    <Button
                      className="table-btn"
                      variant="danger"
                      onClick={() => handleCancelClick(reservation.id)}
                    >
                      {isLoading ? (
                        <img src={loader} alt="loading" className="spinner" />
                      ) : (
                        'Cancel Reservation'
                      )}
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default UserReservationTable;
