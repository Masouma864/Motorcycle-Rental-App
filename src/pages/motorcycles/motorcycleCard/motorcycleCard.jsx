import React from 'react';
import './motorcycle-card.css'

function MotorcycleCard({ motorcycle }) {
  return (
    <div className="motorcycle-card d-flex flex-column p-5">
      <img src={motorcycle.image_url} className='motorcycle-image d-flex flex-column' />
      <h2>{motorcycle.name}</h2>
      <p>{motorcycle.description}</p>
    </div>
  );
}

export default MotorcycleCard;