import React from 'react';
import { Link } from 'react-router-dom';
import './motorcycle-card.css';
import PropTypes from 'prop-types';
import * as FaIcons from 'react-icons/fa';
import { IconContext } from 'react-icons';

const MotorcycleCard = ({ motorcycle }) => (
  <Link className="link" to={`/details/${motorcycle.id}`}>
    <div className="motorcycle-card d-flex flex-column p-5 position-relative">
      <img src={motorcycle.image_url} className="motorcycle-image d-flex flex-column" alt="img" />
      <div style={{ backgroundColor: '#afacac' }} className="back-for-motorcycles" />
      <h2 style={{ margin: '3rem' }} className="motorcycle-name">{motorcycle.name}</h2>
      <p style={{ color: 'rgb(182 183 184)' }}>{motorcycle.description}</p>
      <div className="motorcycles-icons d-flex flex-row">
        <IconContext.Provider value={{ color: '#c3c0c0' }}>
          <FaIcons.FaTwitter />
          <FaIcons.FaFacebookF />
          <FaIcons.FaPinterestP />
        </IconContext.Provider>
      </div>
    </div>
  </Link>
);

MotorcycleCard.propTypes = ({
  motorcycle: PropTypes.object,
}).isRequired;

export default MotorcycleCard;
