import React from 'react';
import { useParams } from 'react-router-dom';

const vehicles = [
  {
    id: 1,
    name: 'Nissan',
    image: '/nissan.jpg',
    specs: 'Durability',
    details: 'Nissan is known for its durability and reliability. It provides a smooth driving experience with its advanced technology and robust design.',
  },
  {
    id: 2,
    name: 'KIA',
    image: '/kia.avif',
    specs: 'Economical',
    details: 'KIA offers economical cars with great fuel efficiency. It is an excellent choice for budget-conscious buyers looking for modern features.',
  },
  {
    id: 3,
    name: 'Isuzu',
    image: '/isuzu.jpeg',
    specs: 'Muscle',
    details: 'Isuzu vehicles are known for their muscle and power. They are perfect for tough terrains and heavy-duty performance.',
  },
  {
    id: 4,
    name: 'Ferrari',
    image: '/F12.jpeg',
    specs: 'Sport',
    details: 'Ferrari F12 is a high-performance sports car that combines speed, luxury, and cutting-edge technology. It is designed for those who seek the thrill of driving.',
  },
  {
    id: 5,
    name: 'Tesla',
    image: '/Tesla.webp',
    specs: 'Electric',
    details: 'Tesla is a leading electric vehicle manufacturer, known for its innovative technology and sustainable driving solutions. It offers a premium driving experience with zero emissions.',
  },

  {
    id: 6,
    name: 'Toyota',
    image: '/toyota.jpg',
    specs: 'Sustainable',
    details: 'Toyota is a vehicle manufacturer, known for its innovative technology and sustainable driving solutions. It offers a premium driving experience.',
  },
  // Add more vehicles as needed
];

const VehicleDetail = () => {
  const { id } = useParams();
  const vehicle = vehicles.find(v => v.id.toString() === id);

  if (!vehicle) {
    return <p>Vehicle not found</p>;
  }

  return (
    <div className="vehicle-detail-container">
      <h2 className="vehicle-detail-title">{vehicle.name}</h2>
      <img src={vehicle.image} alt={vehicle.name} className="vehicle-detail-image" />
      <p className="vehicle-detail-specs"><strong>Specifications:</strong> {vehicle.specs}</p>
      <p className="vehicle-detail-description">{vehicle.details}</p>
      <p className="vehicle-detail-more-info">
        For more information, please <a href="/contact" className="vehicle-detail-contact-link">contact us</a>.
      </p>
    </div>
  );
};

export default VehicleDetail;
