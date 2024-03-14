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
  } catch (error) {
    console.error(error);
  }
};

const App = () => {
  useEffect(() => {
    fetchData();
  }, []);

  return null; // Since we're just fetching data, we don't need to render anything
};

export default App;
