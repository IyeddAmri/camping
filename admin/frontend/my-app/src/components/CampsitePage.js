import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CampsitesPage = () => {
  const [campsites, setCampsites] = useState([]);

  useEffect(() => {
    fetchCampsites();
  }, []);

  const fetchCampsites = async () => {
    try {
      const response = await axios.get('http://192.168.1.16:5000/campsites/get');
      setCampsites(response.data);
    } catch (error) {
      console.error('Error fetching campsites:', error);
    }
  };

  return (
    <div>
      <h2>Campsites</h2>
      <div className="campsites-container">
        {campsites.map(campsite => (
          <div key={campsite.CampsiteID} className="campsite">
            <img src={campsite.ImageURL} alt={campsite.Name} />
            <div className="campsite-details">
              <h3>{campsite.Name}</h3>
              <p>{campsite.Description}</p>
              <p>Type: {campsite.Type}</p>
              <p>Rating: {campsite.Rating}</p>
              <p>Distance: {campsite.Distance} miles</p>
              <p>Price: ${campsite.Price} per night</p>
              {/* Add more details as needed */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CampsitesPage;
