import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMotorcycles } from '../../redux/motorcycle/motorcycle';
import MotorcycleCard from './MotorcycleCard/MotorcycleCard';

import './motorcycles.css';

function Motorcycles() {
    const motorcycles = useSelector((state) => state.motorcycles);
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState();

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    useEffect(() => {
        dispatch(getMotorcycles());
    }, [dispatch]);

    useEffect(() => {
        setTotalPages(Math.ceil(motorcycles.length / 3));
    }, []);
    return (
        <div className="d-flex flex-row motorcycles-container">
            <h2 style={{ marginTop: '3rem' }}>Latest Models</h2>
            <p style={{ color: 'rgb(182 183 184)' }}>Please select a car model</p>
      <div className="d-flex flex-row cars-container">
            <button type="button" onClick={handlePrevPage} className="pagination-btn btn">
                {'<'}
            </button>
            <div className="d-flex flex-row flex-wrap align-items-baseline justify-content-center"></div>
            {motorcycles.slice((currentPage - 1) * 3, currentPage * 3).map((motorcycle) => (
                <MotorcycleCard motorcycle={motorcycle} key={motorcycle.id} />
            ))}
            </div>
            <button type="button" onClick={handleNextPage} className="pagination-btn btn">
                {'>'}
            </button>
        </div>
    );
}

export default Motorcycles;