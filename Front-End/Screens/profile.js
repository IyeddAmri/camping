import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { auth, firestore, doc, getDoc } from '../config/firebase';

export default function Profile() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (auth.currentUser) { // Check if currentUser is not null
          const userDocRef = doc(firestore, 'users', auth.currentUser.uid);
          const userDocSnapshot = await getDoc(userDocRef);
    
          if (userDocSnapshot.exists()) {
            setUserData(userDocSnapshot.data());
          } else {
            console.log('User data not found');
          }
        } else {
          console.log('User not authenticated'); // Handle the case where currentUser is null
        }
      } catch (error) {
        console.error('Error fetching user data:', error.message);
      }
    };
  
    fetchUserData(); // Call the fetchUserData function when the component mounts
  
  }, []);
  
  return (
    <View style={styles.container}>
      {userData ? (
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
      ) : (
        <Text>Loading user data...</Text>
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
