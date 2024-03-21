// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// import { auth, firestore, doc, getDoc } from '../config/firebase';

// export default function Profile() {
//   const [userData, setUserData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         if (!auth.currentUser) {
//           throw new Error('User not authenticated');
//         }

//         const userDocRef = doc(firestore, 'utilisateurr', auth.currentUser.uid);
//         const userDocSnapshot = await getDoc(userDocRef);

//         if (!userDocSnapshot.exists()) {
//           throw new Error('User data not found');
//         }

//         setUserData(userDocSnapshot.data());
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching user data:', error.message);
//         setError(error.message);
//         setLoading(false);
//       }
//     };

//     fetchUserData();
//   }, []);

//   return (
//     <View style={styles.container}>
//       {loading ? (
//         <Text style={styles.loadingText}>Loading user data...</Text>
//       ) : error ? (
//         <Text style={styles.errorText}>Error: {error}</Text>
//       ) : (
//         <View style={styles.userDataContainer}>
//           <View style={styles.userDetail}>
//             <Text style={styles.label}>Username:</Text>
//             <Text style={styles.value}>{userData.username}</Text>
//           </View>
//           <View style={styles.userDetail}>
//             <Text style={styles.label}>Email:</Text>
//             <Text style={styles.value}>{userData.email}</Text>
//           </View>
//           <View style={styles.userDetail}>
//             <Text style={styles.label}>Location:</Text>
//             <Text style={styles.value}>{userData.location}</Text>
//           </View>
//           <View style={styles.userDetail}>
//             <Text style={styles.label}>Birthday:</Text>
//             <Text style={styles.value}>{userData.birthday}</Text>
//           </View>
//         </View>
//       )}
//     </View>
//   );
// }
  
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     backgroundColor: '#F5F5F5',
//   },
//   userDataContainer: {
//     backgroundColor: '#FFFFFF',
//     borderRadius: 10,
//     padding: 20,
//     elevation: 5,
//   },
//   userDetail: {
//     marginBottom: 10,
//   },
//   label: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333333',
//   },
//   value: {
//     fontSize: 16,
//     color: '#666666',
//   },
//   loadingText: {
//     fontSize: 16,
//     color: '#666666',
//   },
//   errorText: {
//     fontSize: 16,
//     color: 'red',
//   },
// });



import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, TouchableOpacity, Animated, Easing } from 'react-native';

import { auth, firestore, doc, getDoc } from '../config/firebase';

export default function Profile() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fadeAnim = useState(new Animated.Value(0))[0];

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (!auth.currentUser) {
          throw new Error('User not authenticated');
        }

        const userDocRef = doc(firestore, 'utilisateurr', auth.currentUser.uid);
        const userDocSnapshot = await getDoc(userDocRef);

        if (!userDocSnapshot.exists()) {
          throw new Error('User data not found');
        }

        setUserData(userDocSnapshot.data());
        setLoading(false);
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 500,
          easing: Easing.linear,
          useNativeDriver: true,
        }).start();
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
        <ActivityIndicator size="large" color="#0000ff" />
      ) : error ? (
        <Text style={styles.errorText}>Error: {error}</Text>
      ) : (
        <Animated.View style={[styles.userDataContainer, { opacity: fadeAnim }]}>
          <View style={styles.userDetail}>
            <Text style={styles.label}>Username:</Text>
            <Text style={styles.value}>{userData.username}</Text>
          </View>
          <View style={styles.userDetail}>
            <Text style={styles.label}>Email:</Text>
            <Text style={styles.value}>{userData.email}</Text>
          </View>
          <View style={styles.userDetail}>
            <Text style={styles.label}>Location:</Text>
            <Text style={styles.value}>{userData.location}</Text>
          </View>
          <View style={styles.userDetail}>
            <Text style={styles.label}>Birthday:</Text>
            <Text style={styles.value}>{userData.birthday}</Text>
          </View>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        </Animated.View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  userDataContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    elevation: 5,
    width: '80%',
  },
  userDetail: {
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  },
  value: {
    fontSize: 16,
    color: '#666666',
  },
  loadingText: {
    fontSize: 16,
    color: '#666666',
  },
  errorText: {
    fontSize: 16,
    color: 'red',
  },
  editButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  editButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

