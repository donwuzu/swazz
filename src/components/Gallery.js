import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


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
    specs: 'Sustainable ',
    details: 'Technical in innovation and sustainability.',
  },
  // Add more vehicles as needed
];

const Gallery = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleVehicleClick = (id) => {
    navigate(`/vehicle/${id}`);
  };

  const filteredVehicles = vehicles.filter(vehicle =>
    vehicle.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    vehicle.specs.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const clearSearch = () => {
    setSearchQuery('');
  };


  return (
    <div className="container">
      <h2 className="title">Vehicle Gallery</h2>

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
