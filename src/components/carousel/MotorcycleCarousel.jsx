import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'react-bootstrap';
import * as RxIcons from 'react-icons/rx';

import './carousel.css';

const MotorcycleCarousel = ({ motorcycles }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handlePrev = () => {
    if (index < motorcycles.length - 3) {
      setIndex(index - 3);
    } else {
      setIndex(index - 3);
    }
  };

  const handleNext = () => {
    if (index < motorcycles.length - 3) {
      setIndex(index + 3);
    }
  };

  const isPrevDisabled = index === 0;
  const isNextDisabled = index === motorcycles.length;

  return (
    <>
      <div className="d-flex justify-content-center mt-3">
        <button
          type="button"
          onClick={handlePrev}
          className="pagination-btn btn left"
          disabled={isPrevDisabled}
        >
          <RxIcons.RxTriangleLeft size="3em" />
        </button>
      </div>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        interval={null}
        className="w-100"
        controls={false}
        indicators
      >
        {motorcycles.map((motorcycle, i) => (
          <Carousel.Item key={motorcycle.id}>
            <div className="d-flex justify-content-around">
              {motorcycles.slice(i, i + 3).map((motorcycle) => (
                <MotorcycleCarousel key={motorcycle.id} motorcycle={motorcycle} />
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="d-flex justify-content-center mt-3">
        <button
          type="button"
          onClick={handleNext}
          className="pagination-btn btn right"
          disabled={isNextDisabled}
        >
          <RxIcons.RxTriangleRight size="3em" />
        </button>
      </div>
    </>
  );
};

MotorcycleCarousel.propTypes = ({
  motorcycles: PropTypes.array,
}).isRequired;

export default MotorcycleCarousel;
