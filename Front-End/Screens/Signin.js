// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
// import { signInWithEmailAndPassword } from '../config/firebase';
// import { GoogleSignIn, FacebookSignIn } from '../config/googleSignIn'; // Import GoogleSignIn and FacebookSignIn functions from your authentication providers
// import Icon from 'react-native-vector-icons/FontAwesome'; // Import the eye icon

// const SignInScreen = ({ navigation }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [showPassword, setShowPassword] = useState(false);

//   const handleTogglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

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
//       setError('');
//       console.error( error.message);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.imageContainer}>
//         {/* Replace the URL with the actual URL of your image */}
//         <Image source={require('../assets/khayma.png.jpg')} style={styles.image} resizeMode="cover" />
//       </View>

//       <View style={styles.formContainer}>
//         <Text style={styles.heading}>Sign In</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Email"
//           value={email}
//           onChangeText={setEmail}
//           keyboardType="email-address"
//           autoCapitalize="none"
//         />
//         <View style={styles.passwordContainer}>
//           <TextInput
//             style={styles.passwordInput}
//             placeholder="Password"
//             value={password}
//             onChangeText={setPassword}
//             secureTextEntry={!showPassword}
//           />
//           <TouchableOpacity onPress={handleTogglePasswordVisibility} style={styles.eyeIcon}>
//             <Icon name={showPassword ? 'eye-slash' : 'eye'} size={20} color="#ccc" />
//           </TouchableOpacity>
//         </View>
//         {error ? <Text style={styles.error}>{error}</Text> : null}
//         <TouchableOpacity onPress={handleSignInWithEmailAndPassword} style={styles.button}>
//           <Text style={styles.buttonText}>Sign In</Text>
//         </TouchableOpacity>
//         <Text style={styles.signupText}>
//           Don't have an account?{' '}
//           <Text style={styles.signupLink} onPress={handleSignUp}>
//             Sign Up
//           </Text>
//         </Text>
//         <View style={styles.socialLoginContainer}>
//           {/* Google Sign-In */}
//           <TouchableOpacity onPress={handleGoogleSignIn} style={styles.socialButton}>
//             <Image source={require('../assets/google.png')} style={styles.googleIcon} />
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   imageContainer: {
//     flex: 1,
//   },
//   image: {
//     flex: 1,
//     width: '100%',
//     height: '100%',
//   },
//   formContainer: {
//     flex: 1,
//     backgroundColor: 'white', // Add background color for the form section
//     padding: 10,
//     borderRadius: 20,
//   },
//   heading: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     position:"relative",
//     left:130
//   },
//   input: {
//     width: '100%',
//     height: 50,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     marginBottom: 10,
//     borderRadius: 35,
//   },
//   error: {
//     color: 'red',
//     marginBottom: 10,
//   },
//   signupText: {
//     marginTop: 20,
//     position:"relative",
//     left:90
//   },
//   signupLink: {
//     color: 'green',
//     position:"relative",
//     right:3
//   },
//   button: {
//     backgroundColor: '#18C0C1',
//     padding: 10,
//     borderRadius:35,
//     width: '80%',
//     alignItems: 'center',
//     marginTop: 10,
//     position:"relative",
//     left:35
//   },
//   buttonText: {
//     color: '#fff',
//     fontWeight: 'bold',


//   },
 
//   socialButton: {
//     padding: 10,
//     borderRadius: 5,
//     marginRight: 10,
//     alignItems: 'center',
//     flex: 1,
//   },
  
//   googleIcon: {
//     width: 24,
//     height: 24,
//     justifyContent: 'center',
   

   
//   },

//   socialLoginContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center', // Align items in the center
//     marginTop: 20,
//   },

//     passwordContainer: {
//       position: 'relative',
//       width: '100%',
//       marginBottom: 10,
//     },
//     passwordInput: {
//       width: '100%',
//       height: 50,
//       borderWidth: 1,
//       borderColor: '#ccc',
//       borderRadius: 35,
//       paddingHorizontal: 10,
//       backgroundColor: '#fff',
//     },
//     eyeIcon: {
//       position: 'absolute',
//       top: 15,
//       right: 10,
//     },
//   });
//   export default SignInScreen;
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { signInWithEmailAndPassword } from '../config/firebase';
import { GoogleSignIn, FacebookSignIn } from '../config/googleSignIn'; // Import GoogleSignIn and FacebookSignIn functions from your authentication providers
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the FontAwesome icon library

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

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
      setError('');
      console.error( error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {/* Replace the URL with the actual URL of your image */}
        <Image source={require('../assets/khayma.png.jpg')} style={styles.image} resizeMode="cover" />
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.heading}>Sign In</Text>
        <View style={styles.inputContainer}>
          <Icon name="envelope" size={20} color="#ccc" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        <View style={styles.inputContainer}>
          <Icon name="lock" size={20} color="#ccc" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity onPress={handleTogglePasswordVisibility} style={styles.eyeIcon}>
            <Icon name={showPassword ? 'eye-slash' : 'eye'} size={20} color="#ccc" />
          </TouchableOpacity>
        </View>
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
            <Image source={require('../assets/google.png')} style={styles.googleIcon} />
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
    height: '100%',
  },
  formContainer: {
    flex: 1,
    backgroundColor: 'white', // Add background color for the form section
    padding: 10,
    borderRadius: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    position:"relative",
    left:130
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 35,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  signupText: {
    marginTop: 20,
    position:"relative",
    left:90
  },
  signupLink: {
    color: 'green',
    position:"relative",
    right:3
  },
  button: {
    backgroundColor: '#18C0C1',
    padding: 10,
    borderRadius:35,
    width: '80%',
    alignItems: 'center',
    marginTop: 10,
    position:"relative",
    left:35
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  socialButton: {
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
    alignItems: 'center',
    flex: 1,
  },
  googleIcon: {
    width: 24,
    height: 24,
    justifyContent: 'center',
  },
  socialLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'center', // Align items in the center
    marginTop: 20,
  },
  eyeIcon: {
    position: 'absolute',
    top: 15,
    right: 10,
  },
});

export default SignInScreen;
