import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, ScrollView, Image } from 'react-native';
import axios from 'axios';

const OutdoorAdventuresScreen = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await axios.get('http://192.168.110.188:5000/activities');
        
        const outdoorActivities = response.data.filter(activity => activity.Category === 'Outdoor Adventures');
        setActivities(outdoorActivities);
      } catch (error) {
        console.error('Error fetching activities:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchActivities();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Outdoor Adventures Screen</Text>
      {activities.map(activity => (
        <View key={activity.ActivityID} style={styles.activityContainer}>
          <Image source={{ uri: activity.ImageURL }} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.activityName}>{activity.Name}</Text>
            <Text style={styles.description}>{activity.Description}</Text>
            {}
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  activityContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#f0f0f0',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
  textContainer: {
    flex: 1,
    padding: 10,
  },
  activityName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
  },
});

export default OutdoorAdventuresScreen;
