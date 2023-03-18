import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMotorcycles } from '../../redux/motorcycles/motorcycles';
import './motorcycles.css';
import MotorcycleCarousel from '../../components/carousel/MotorcycleCarousel';

const Motorcycles = () => {
  const motorcycles = useSelector((state) => state.motorcycles);
  const [currentUser, setCurrentUser] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMotorcycles());
    setCurrentUser(localStorage.getItem('current_user'));
  }, [dispatch]);

  return (
    <div className="d-flex flex-column align-items-center justify-content-center w-100 overflow-hidden">
      <h4 className="user-name">{`Welcome, ${currentUser}`}</h4>
      <h2 className="motorcycles-section-title">Latest Models</h2>
      <p style={{ color: 'rgb(182 183 184)' }} className="mb-0">Please select a motorcycle model</p>
      <div className="d-flex flex-row motorcycles-container position-relative justify-content-around">
        <MotorcycleCarousel motorcycles={motorcycles} />
      </div>
    </div>
  );
};

export default Motorcycles;
