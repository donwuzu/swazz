import React from 'react';
import { Link } from 'react-router-dom';


const Vehicle = ({ vehicle }) => (
  <Link to={`/gallery`} className="vehicle-item">
    <img src={vehicle.image} alt={vehicle.name} className="vehicle-image" />
    <h3 className="vehicle-name">{vehicle.name}</h3>
  </Link>
);

export default Vehicle;
