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
  {
    id: 7,
    name: 'Ford',
    image: '/ford.jpg',
    specs: 'Versatile',
    details: 'Ford offers versatile vehicles with advanced features and great performance.',
    model: 'Mustang',
    mileage: '20 MPG',
    fuelType: 'Petrol',
    year: 2021,
  },
  {
    id: 8,
    name: 'BMW',
    image: '/bmw.webp',
    specs: 'Luxury',
    details: 'BMW is known for its luxury and high-performance vehicles.',
    model: 'X5',
    mileage: '22 MPG',
    fuelType: 'Diesel',
    year: 2022,
  },
  {
    id: 9,
    name: 'Audi',
    image: '/audi.jpg',
    specs: 'Premium',
    details: 'Audi provides premium vehicles with cutting-edge technology and performance.',
    model: 'A8',
    mileage: '24 MPG',
    fuelType: 'Hybrid',
    year: 2023,
  },
  {
    id: 10,
    name: 'Mercedes-Benz',
    image: '/mercedes.jpg',
    specs: 'Elegant',
    details: 'Mercedes-Benz is renowned for its elegant design and superior comfort.',
    model: 'E-Class',
    mileage: '27 MPG',
    fuelType: 'Petrol',
    year: 2021,
  },
  {
    id: 11,
    name: 'Honda',
    image: '/honda.webp',
    specs: 'Reliable',
    details: 'Honda cars are reliable and fuel-efficient.',
    model: 'Civic',
    mileage: '32 MPG',
    fuelType: 'Petrol',
    year: 2022,
  },
  {
    id: 12,
    name: 'Chevrolet',
    image: '/chevrolet.webp',
    specs: 'Durable',
    details: 'Chevrolet vehicles are known for their durability and performance.',
    model: 'Malibu',
    mileage: '29 MPG',
    fuelType: 'Petrol',
    year: 2021,
  },
  {
    id: 13,
    name: 'Hyundai',
    image: '/hyundai.jpg',
    specs: 'Affordable',
    details: 'Hyundai offers affordable vehicles with modern features.',
    model: 'Elantra',
    mileage: '33 MPG',
    fuelType: 'Petrol',
    year: 2023,
  },
  {
    id: 14,
    name: 'Mazda',
    image: '/mazda.jpg',
    specs: 'Sporty',
    details: 'Mazda is known for its sporty design and engaging driving experience.',
    model: 'Mazda3',
    mileage: '28 MPG',
    fuelType: 'Petrol',
    year: 2022,
  },
  {
    id: 15,
    name: 'Volkswagen',
    image: '/volkswagen.webp',
    specs: 'Efficient',
    details: 'Volkswagen cars are efficient and packed with technology.',
    model: 'Passat',
    mileage: '30 MPG',
    fuelType: 'Diesel',
    year: 2021,
  },
  {
    id: 16,
    name: 'Subaru',
    image: '/subaru.jpg',
    specs: 'All-Wheel Drive',
    details: 'Subaru vehicles come with all-wheel drive as standard.',
    model: 'Outback',
    mileage: '26 MPG',
    fuelType: 'Petrol',
    year: 2023,
  },
];

const Vehicles = () => (
  <div className="vehicles-container">
    {vehicles.map((vehicle) => (
      <Link to={`/vehicle/${vehicle.id}`} key={vehicle.id} className="vehicle-item-link">
      <div key={vehicle.id} className="vehicle-item">
        <img src={vehicle.image} alt={vehicle.name} className="vehicle-image" />
        <h3 className="vehicle-name">{vehicle.name}</h3>
       
       
      </div>
      </Link>
    ))}
  </div>
);

export default Vehicles;
