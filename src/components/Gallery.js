import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const vehiclesData = [
  {
    id: 1,
    name: 'Nissan',
    image: '/nissan.jpg',
    specs: 'Durability',
    details: 'Nissan is known for its durability and reliability.',
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
    details: 'KIA offers economical cars with great fuel efficiency.',
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
    details: 'Isuzu vehicles are known for their muscle and power.',
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
    details: 'Ferrari F12 is a symbol of high performance and luxury in sports cars.',
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
    details: 'Tesla is a leader in electric vehicle innovation and sustainability.',
    model: 'Model S',
    mileage: '370 miles per charge',
    fuelType: 'Electric',
    year: 2023,
  },
  {
    id: 6,
    name: 'Toyota',
    image: '/toyota.jpg',
    specs: 'Sustainable',
    details: 'Technical in innovation and sustainability.',
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

const Gallery = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [filterOption, setFilterOption] = useState('');
  const [vehicles] = useState(vehiclesData);
  const navigate = useNavigate();

  const handleVehicleClick = (id) => {
    navigate(`/vehicle/${id}`);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilterOption(e.target.value);
  };

  const sortedVehicles = [...vehicles].sort((a, b) => {
    if (sortOption === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortOption === 'year') {
      return b.year - a.year;
    } else {
      return 0;
    }
  });

  const filteredVehicles = sortedVehicles.filter(vehicle => {
    const matchesSearch = vehicle.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          vehicle.specs.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterOption ? vehicle.fuelType.toLowerCase() === filterOption.toLowerCase() : true;
    return matchesSearch && matchesFilter;
  });

  const clearSearch = () => {
    setSearchQuery('');
  };

  return (
    <div className="container">
      <h2 className="title">Vehicle Gallery</h2>

      <div className="controls">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search vehicles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          {searchQuery && (
            <button onClick={clearSearch} className="clear-button">Clear</button>
          )}
        </div>
        <div className="sort-filter-container">
          <label htmlFor="sort" className="sort-label">Sort By:</label>
          <select id="sort" onChange={handleSortChange} value={sortOption} className="sort-select">
            <option value="">Select</option>
            <option value="name"> A-Z</option>
            <option value="year">Year / Newest-Oldest</option>
          </select>
          <label htmlFor="filter" className="filter-label">Fuel Type:</label>
          <select id="filter" onChange={handleFilterChange} value={filterOption} className="filter-select">
            <option value="">Select</option>
            <option value="Petrol">Petrol</option>
            <option value="Diesel">Diesel</option>
            <option value="Electric">Electric</option>
            <option value="Hybrid">Hybrid</option>
          </select>
        </div>
      </div>

      {filteredVehicles.length === 0 ? (
        <p className="no-results">Nothing was found matching your search criteria.</p>
      ) : (
        <div className="gallery-grid">
          {filteredVehicles.map((vehicle) => (
            <div key={vehicle.id} className="gallery-item" onClick={() => handleVehicleClick(vehicle.id)}>
              <img src={vehicle.image} alt={vehicle.name} className="gallery-image" />
              <h3 className="gallery-title">{vehicle.name}</h3>
              <p>{vehicle.specs}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;
