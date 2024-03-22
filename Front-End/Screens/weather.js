import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, ImageBackground, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import sunnyImage from '../assets/ss.webp';
import rainyImage from '../assets/cc.jpg';
import cloudyImage from '../assets/ww.webp';
import unknownImage from '../assets/wlp.jpg';

const weatherImages = {
  clear: sunnyImage,
  rain: rainyImage,
  clouds: cloudyImage,
  unknown: unknownImage,
};

const WeatherInfo = ({ navigation }) => {
  const [city, setCity] = useState('');
  const [weatherInfo, setWeatherInfo] = useState(null);

  const handleInputChange = (text) => setCity(text);

  const getWeather = async () => {
    const apiKey = '3ac980513bf7c529632b853b2d4b0898';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      const { main, wind, weather, name } = data;
      const MT = Math.round(main.temp);
      const FL = Math.round(main.feels_like);

      const weatherConditionImage = weatherImages[weather[0].main.toLowerCase()] || unknownImage;

      const weatherData = {
        location: `Weather in ${name}`,
        temperature: `Temperature: ${MT} C`,
        feelsLike: `Feels Like: ${FL} C`,
        humidity: `Humidity: ${main.humidity} %`,
        wind: `Wind: ${wind.speed} km/h`,
        condition: `Weather Condition: ${weather[0].description}`,
        conditionImage: weatherConditionImage,
      };

      setWeatherInfo(weatherData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ImageBackground
      source={weatherInfo ? weatherInfo.conditionImage : unknownImage}
      style={styles.weatherContainer}
    >
      <TouchableOpacity style={styles.goBackButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <TextInput
        placeholder='Enter city name'
        value={city}
        onChangeText={handleInputChange}
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={getWeather}>
        <Text style={styles.buttonText}>Get Weather</Text>
      </TouchableOpacity>
      {weatherInfo && (
        <View style={styles.weatherInfo}>
          <Text style={styles.location}>{weatherInfo.location}</Text>
          {Object.values(weatherInfo).slice(1, -1).map((info, index) => (
            <Text style={styles.infoText} key={index}>{info}</Text>
          ))}
        </View>
      )}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  weatherContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover',
    padding: 20,
  },
  goBackButton: {
    position: 'absolute',
    top: 35,
    left: 20,
    zIndex: 1,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    marginBottom: 10,
    color: 'white',
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  weatherInfo: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  location: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
    color: 'white',
    marginBottom: 5,
  },
});

export default WeatherInfo;
