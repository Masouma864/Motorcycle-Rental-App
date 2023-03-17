import { useEffect, useState } from 'react';
import { useSelector, useDispatch , useRef} from 'react-redux';
import { getMotorcycles } from '../../redux/motorcycle/motorcycle';
import MotorcycleCard from './MotorcycleCard/MotorcycleCard';

import './motorcycles.css';

function Motorcycles() {
    const motorcycles = useSelector((state) => state.motorcycles);
    const dispatch = useDispatch();
    const [prevButtonDisabled, setPrevButtonDisabled] = useState(true);
  const [nextButtonDisabled, setNextButtonDisabled] = useState(false);

    const handleNextPage = () => {
        if (motorcyclesContainerRef.current) {
            const container = motorcyclesContainerRef.current;
            container.scrollLeft += container.offsetWidth;
            const maxScrollLeft = container.scrollWidth - container.clientWidth;
            if (container.scrollLeft >= maxScrollLeft) {
              setNextButtonDisabled(true);
            }
            setPrevButtonDisabled(false);
        }
    };

    const handlePrevPage = () => {
        if (motorcyclesContainerRef.current) {
            const container = motorcyclesContainerRef.current;
            container.scrollLeft -= container.offsetWidth;
            if (container.scrollLeft === 0) {
              setPrevButtonDisabled(true);
            }
            setNextButtonDisabled(false);
        }
    };

    useEffect(() => {
        const container = motorcyclesContainerRef.current;
    if (container) {
      setPrevButtonDisabled(container.scrollLeft === 0);
      setNextButtonDisabled(
        container.scrollLeft >= container.scrollWidth - container.clientWidth,
      );
    }
  }, [motorcycles]);

    useEffect(() => {
        dispatch(getMotorcycles());
    }, [dispatch]);
    return (
        <div className="d-flex flex-row motorcycles-container " ref={motorcyclesContainerRef}>
            <h2 style={{ marginTop: '3rem' }}>Latest Models</h2>
            <p style={{ color: 'rgb(182 183 184)' }}>Please select a motorcycle model</p>
      <div className="d-flex flex-row motorcycles-container">
            <button type="button" onClick={handlePrevPage} className="pagination-btn btn " disabled={prevButtonDisabled}>
            <RxIcons.RxTriangleLeft size="3em" />
            </button>
            <div className="d-flex flex-row align-items-baseline justify-content-center"></div>
            {motorcycles.map((motorcycle) => (
                <MotorcycleCard motorcycle={motorcycle} key={motorcycle.id} />
            ))}
            </div>
            <button type="button" onClick={handleNextPage} className="pagination-btn btn" disabled={nextButtonDisabled}>
                {'>'}
            </button>
        </div>
    );
}

export default Motorcycles;