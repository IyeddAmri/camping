import React, { useEffect } from 'react';
import axios from 'axios';

const fetchData = async () => {
  const options = {
    method: 'GET',
    url: 'https://bando-radio-api.p.rapidapi.com/countries',
    headers: {
      'X-RapidAPI-Key': '79d6960173msh89628b626831c28p11700djsn3c3afbe6d1ab',
      'X-RapidAPI-Host': 'bando-radio-api.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    // You might want to return the data here if you want to use it outside of this function
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    // You might want to throw the error again if you want the calling code to handle it
    throw error;
  }
};

const App = () => {
  useEffect(() => {
    // Wrap the fetchData function in an async IIFE to use async/await syntax inside useEffect
    (async () => {
      try {
        await fetchData();
      } catch (error) {
       
      }
    })();
  }, []);

  return null; 
};

export default App;
