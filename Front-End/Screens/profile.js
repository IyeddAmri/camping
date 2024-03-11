import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { auth, firestore, doc, getDoc } from '../config/firebase';

export default function Profile() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (!auth.currentUser) {
          throw new Error('User not authenticated');
        }

        const userDocRef = doc(firestore, 'users', auth.currentUser.uid);
        const userDocSnapshot = await getDoc(userDocRef);

        if (!userDocSnapshot.exists()) {
          throw new Error('User data not found');
        }

        setUserData(userDocSnapshot.data());
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error.message);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Loading user data...</Text>
      ) : error ? (
        <Text>Error: {error}</Text>
      ) : (
        <View>
          <Text style={styles.label}>Username:</Text>
          <Text style={styles.value}>{userData.username}</Text>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>{userData.email}</Text>
          <Text style={styles.label}>Location:</Text>
          <Text style={styles.value}>{userData.location}</Text>
          <Text style={styles.label}>Birthday:</Text>
          <Text style={styles.value}>{userData.birthday}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
    marginBottom: 10,
  },
});
