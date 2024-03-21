import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CampsitesPage.css'; // Import custom CSS file for styling

const CampsitesPage = () => {
  const [campsites, setCampsites] = useState([]);
  const [newCampsite, setNewCampsite] = useState({
    Name: '',
    Description: '',
    Type: '',
    Rating: '',
    Distance: '',
    Price: '',
    ImageURL: ''
  });

  useEffect(() => {
    fetchCampsites();
  }, []);

  const fetchCampsites = async () => {
    try {
      const response = await axios.get('http://localhost:5000/campsites/get');
      setCampsites(response.data);
    } catch (error) {
      console.error('Error fetching campsites:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCampsite({ ...newCampsite, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/campsites/add', newCampsite);
      fetchCampsites();
      setNewCampsite({
        Name: '',
        Description: '',
        Type: '',
        Rating: '',
        Distance: '',
        Price: '',
        ImageURL: ''
      });
    } catch (error) {
      console.error('Error creating campsite:', error);
    }
  };

  const handleUpdate = async (campsiteID) => {
    try {
      const updatedCampsite = { ...newCampsite };
      await axios.put(`http://localhost:5000/campsites/put/${campsiteID}`, updatedCampsite);
      fetchCampsites();
      setNewCampsite({
        Name: '',
        Description: '',
        Type: '',
        Rating: '',
        Distance: '',
        Price: '',
        ImageURL: ''
      });
    } catch (error) {
      console.error('Error updating campsite:', error);
    }
  };

  const handleDelete = async (campsiteID) => {
    try {
      await axios.delete(`http://192.168.1.16:5000/campsites/${campsiteID}`);
      fetchCampsites();
    } catch (error) {
      console.error('Error deleting campsite:', error);
    }
  };

  return (
    <div>
      <h2>Campsites</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="Name" value={newCampsite.Name} onChange={handleInputChange} placeholder="Name" required />
        <input type="text" name="Description" value={newCampsite.Description} onChange={handleInputChange} placeholder="Description" required />
        <input type="text" name="Type" value={newCampsite.Type} onChange={handleInputChange} placeholder="Type" required />
        <input type="number" name="Rating" value={newCampsite.Rating} onChange={handleInputChange} placeholder="Rating" required />
        <input type="number" name="Distance" value={newCampsite.Distance} onChange={handleInputChange} placeholder="Distance" required />
        <input type="number" name="Price" value={newCampsite.Price} onChange={handleInputChange} placeholder="Price" required />
        <input type="text" name="ImageURL" value={newCampsite.ImageURL} onChange={handleInputChange} placeholder="Image URL" required />
        <button type="submit">Add Campsite</button>
      </form>
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
            </div>
            <div>
              <button onClick={() => handleUpdate(campsite.CampsiteID)} className="update-button">Update</button>
              <button onClick={() => handleDelete(campsite.CampsiteID)} className="delete-button">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CampsitesPage;
