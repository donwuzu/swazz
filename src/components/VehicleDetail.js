import React from 'react';
import { useParams } from 'react-router-dom';

const vehicles = [
  {
    id: 1,
    name: 'Nissan',
    image: '/nissan.jpg',
    specs: 'Durability',
    details: 'Nissan is known for its durability and reliability. It provides a smooth driving experience with its advanced technology and robust design.',
    model: 'Altima',
    mileage: '25 MPG',
    fuelType: 'Petrol',
    year: 2022,
  },
  {
    id: 2,
    name: 'KIA',
    image: '/kia.avif',
    specs: 'Economical',
    details: 'KIA offers economical cars with great fuel efficiency. It is an excellent choice for budget-conscious buyers looking for modern features.',
    model: 'Sorento',
    mileage: '30 MPG',
    fuelType: 'Petrol',
    year: 2023,
  },
  {
    id: 3,
    name: 'Isuzu',
    image: '/isuzu.jpeg',
    specs: 'Muscle',
    details: 'Isuzu vehicles are known for their muscle and power. They are perfect for tough terrains and heavy-duty performance.',
    model: 'D-Max',
    mileage: '22 MPG',
    fuelType: 'Diesel',
    year: 2021,
  },
  {
    id: 4,
    name: 'Ferrari',
    image: '/F12.jpeg',
    specs: 'Sport',
    details: 'Ferrari F12 is a high-performance sports car that combines speed, luxury, and cutting-edge technology. It is designed for those who seek the thrill of driving.',
    model: 'F12berlinetta',
    mileage: '15 MPG',
    fuelType: 'Petrol',
    year: 2020,
  },
  {
    id: 5,
    name: 'Tesla',
    image: '/Tesla.webp',
    specs: 'Electric',
    details: 'Tesla is a leading electric vehicle manufacturer, known for its innovative technology and sustainable driving solutions. It offers a premium driving experience with zero emissions.',
    model: 'Model S',
    mileage: '370 miles per charge',
    fuelType: 'Electric',
    year: 2023,
  },
  {
    id: 6,
    name: 'Toyota',
    image: '/toyota.jpg',
    specs: 'Reliable',
    details: 'Toyota is renowned for its reliability and commitment to sustainability. It offers a premium driving experience with a range of fuel-efficient and hybrid vehicles, making it a popular choice for eco-conscious consumers.',
    model: 'Camry',
    mileage: '28 MPG',
    fuelType: 'Hybrid',
    year: 2022,
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
      <div className="vehicle-detail-grid">
      <p className="vehicle-detail-specs"><strong>Specifications:</strong> {vehicle.specs}</p>
      <p className="vehicle-detail-description">{vehicle.details}</p>
      <p className="vehicle-detail-model"><strong>Model:</strong> {vehicle.model}</p>
      <p className="vehicle-detail-mileage"><strong>Mileage:</strong> {vehicle.mileage}</p>
      <p className="vehicle-detail-fuel-type"><strong>Fuel Type:</strong> {vehicle.fuelType}</p>
      <p className="vehicle-detail-year"><strong>Year:</strong> {vehicle.year}</p>
      </div>
      <p className="vehicle-detail-more-info">
        For more information, please Click This Link 👉  
      </p>
    </div>
  );
};

export default VehicleDetail;

