import React from 'react';
import { Link } from 'react-router-dom';

const vehicles = [
  {
    id: 1,
    name: 'Nissan',
    image: '/nissan.jpg',
    specs: 'Durability',
    details: 'Nissan is known for its durability and reliability.',
  },
  {
    id: 2,
    name: 'KIA',
    image: '/kia.avif',
    specs: 'Economical',
    details: 'KIA offers economical cars with great fuel efficiency.',
  },
  {
    id: 3,
    name: 'Isuzu',
    image: '/isuzu.jpeg',
    specs: 'Muscle',
    details: 'Isuzu vehicles are known for their muscle and power.',
  },
  {
    id: 4,
    name: 'Ferrari',
    image: '/F12.jpeg',
    specs: 'Sport',
    details: 'Ferrari F12 is a symbol of high performance and luxury in sports cars.',
  },
  {
    id: 5,
    name: 'Tesla',
    image: '/Tesla.webp',
    specs: 'Electric',
    details: 'Tesla is a leader in electric vehicle innovation and sustainability.',
  },
  {
    id: 6,
    name: 'Toyota',
    image: '/toyota.jpg',
    specs: 'Sustainable',
    details: 'Toyota is known for its technical innovation and sustainability.',
  },
  // Add more vehicles as needed
];

const Vehicles = () => (
  <div className="vehicles-container">
    {vehicles.map((vehicle) => (
      <Link to={`/gallery`} key={vehicle.id} className="vehicle-item-link">
      <div key={vehicle.id} className="vehicle-item">
        <img src={vehicle.image} alt={vehicle.name} className="vehicle-image" />
        <h3 className="vehicle-name">{vehicle.name}</h3>
       
       
      </div>
      </Link>
    ))}
  </div>
);

export default Vehicles;
