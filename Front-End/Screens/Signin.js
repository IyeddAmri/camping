// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
// import { signInWithEmailAndPassword } from '../config/firebase';
// import { GoogleSignIn, FacebookSignIn } from '../config/googleSignIn'; // Import GoogleSignIn and FacebookSignIn functions from your authentication providers

// const SignInScreen = ({ navigation }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSignInWithEmailAndPassword = async () => {
//     try {
//       await signInWithEmailAndPassword(email, password);
//       navigation.navigate('HomePage');
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   const handleSignUp = () => {
//     navigation.navigate('SignUp');
//   };

//   // Function to handle Google sign-in
//   const handleGoogleSignIn = async () => {
//     try {
//       const user = await GoogleSignIn(); // Call the GoogleSignIn function from your authentication provider
//       console.log('Google sign-in successful:', user);
//       // Navigate to the home page or perform any additional logic as needed
//     } catch (error) {
//       setError('Error signing in with Google.');
//       console.error('Error signing in with Google:', error.message);
//     }
//   };

//   // Function to handle Facebook sign-in
//   const handleFacebookSignIn = async () => {
//     try {
//       const user = await FacebookSignIn(); // Call the FacebookSignIn function from your authentication provider
//       console.log('Facebook sign-in successful:', user);
//       // Navigate to the home page or perform any additional logic as needed
//     } catch (error) {
//       setError('Error signing in with Facebook.');
//       console.error('Error signing in with Facebook:', error.message);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Sign In</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//         keyboardType="email-address"
//         autoCapitalize="none"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />
//       {error ? <Text style={styles.error}>{error}</Text> : null}
//       <TouchableOpacity onPress={handleSignInWithEmailAndPassword} style={styles.button}>
//         <Text style={styles.buttonText}>Sign In</Text>
//       </TouchableOpacity>
//       <Text style={styles.signupText}>
//         Don't have an account?{' '}
//         <Text style={styles.signupLink} onPress={handleSignUp}>
//           Sign Up
//         </Text>
//       </Text>
//       <View style={styles.socialLoginContainer}>
//         {/* Google Sign-In */}
//         <TouchableOpacity onPress={handleGoogleSignIn}>
//           {/* Insert Google Icon here */}
//           <Text>Google Icon</Text>
//         </TouchableOpacity>
//         {/* Facebook Sign-In */}
//         <TouchableOpacity onPress={handleFacebookSignIn}>
//           {/* Insert Facebook Icon here */}
//           <Text>Facebook Icon</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   heading: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   input: {
//     width: '100%',
//     height: 50,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     marginBottom: 10,
//   },
//   error: {
//     color: 'red',
//     marginBottom: 10,
//   },
//   signupText: {
//     marginTop: 20,
//   },
//   signupLink: {
//     color: 'blue',
//   },
//   button: {
//     backgroundColor: '#007bff',
//     padding: 10,
//     borderRadius: 5,
//     width: '100%',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   buttonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   socialLoginContainer: {
//     flexDirection: 'row',
//     marginTop: 20,
//   },
// });

// export default SignInScreen;
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { signInWithEmailAndPassword } from '../config/firebase';
import { GoogleSignIn, FacebookSignIn } from '../config/googleSignIn'; // Import GoogleSignIn and FacebookSignIn functions from your authentication providers
import { AntDesign, FontAwesome } from '@expo/vector-icons'; // Import icons from vector library

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignInWithEmailAndPassword = async () => {
    try {
      await signInWithEmailAndPassword(email, password);
      navigation.navigate('HomePage');
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };

  // Function to handle Google sign-in
  const handleGoogleSignIn = async () => {
    try {
      const user = await GoogleSignIn(); // Call the GoogleSignIn function from your authentication provider
      console.log('Google sign-in successful:', user);
      // Navigate to the home page or perform any additional logic as needed
    } catch (error) {
      setError('Error signing in with Google.');
      console.error('Error signing in with Google:', error.message);
    }
  };

  // Function to handle Facebook sign-in
  const handleFacebookSignIn = async () => {
    try {
      const user = await FacebookSignIn(); // Call the FacebookSignIn function from your authentication provider
      console.log('Facebook sign-in successful:', user);
      // Navigate to the home page or perform any additional logic as needed
    } catch (error) {
      setError('Error signing in with Facebook.');
      console.error('Error signing in with Facebook:', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {/* Replace 'yourImageSource' with the actual source of your image */}
        <Image source={require('../assets/khayma.webp')} style={styles.image} resizeMode="cover" />
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.heading}>Sign In</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        {error ? <Text style={styles.error}>{error}</Text> : null}
        <TouchableOpacity onPress={handleSignInWithEmailAndPassword} style={styles.button}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <Text style={styles.signupText}>
          Don't have an account?{' '}
          <Text style={styles.signupLink} onPress={handleSignUp}>
            Sign Up
          </Text>
        </Text>
        <View style={styles.socialLoginContainer}>
          {/* Google Sign-In */}
          <TouchableOpacity onPress={handleGoogleSignIn} style={styles.socialButton}>
            <AntDesign name="google" size={24} color="white" />
          </TouchableOpacity>
          {/* Facebook Sign-In */}
          <TouchableOpacity onPress={handleFacebookSignIn} style={styles.socialButton}>
            <FontAwesome name="facebook" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '10%',
  },
  formContainer: {
    flex: 1,
    backgroundColor: 'white', // Add background color for the form section
    padding: 20,
    borderTopLeftRadius: 20, // Optional: Add border radius to match the image container
    borderTopRightRadius: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  signupText: {
    marginTop: 20,
  },
  signupLink: {
    color: 'blue',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  socialLoginContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  socialButton: {
    backgroundColor: '#3b5998', // Facebook blue color
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
    alignItems: 'center',
    flex: 1,
  },
});

export default SignInScreen;
