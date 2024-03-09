import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, ImageBackground, TouchableOpacity, Text } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Picker } from '@react-native-picker/picker';
import { doc, setDoc } from 'firebase/firestore'; // Import Firestore functions
import { auth } from '../config/firebase';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the eye icon

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [birthday, setBirthday] = useState('');
  const [location, setLocation] = useState('Tunis');
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleRepeatPasswordVisibility = () => {
    setShowRepeatPassword(!showRepeatPassword);
  };

  const handleSignUp = async () => {
    try {
      if (password !== repeatPassword) {
        console.error('Passwords do not match');
        return;
      }

      // Create user in Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      // Save additional user information to Firestore
      const userData = {
        email: email,
        username: username,
        birthday: birthday,
        location: location
      };
      await setDoc(doc('users', userCredential.user.uid), userData);

      console.log('User signed up successfully:', userCredential.user);
    } catch (error) {
      console.error('Error signing up:', error.message);
    }
    navigation.navigate('Signin');
  };

  return (
    <ImageBackground
      source={require('../assets/green.avif')}
      style={styles.container}
      resizeMode="cover"
    >
      <Text style={styles.heading}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Your E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity onPress={handleTogglePasswordVisibility} style={styles.eyeIcon}>
          <Icon name={showPassword ? 'eye-slash' : 'eye'} size={20} color="#000" />
        </TouchableOpacity>
      </View>
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Repeat Password"
          value={repeatPassword}
          onChangeText={setRepeatPassword}
          secureTextEntry={!showRepeatPassword}
        />
        <TouchableOpacity onPress={handleToggleRepeatPasswordVisibility} style={styles.eyeIcon}>
          <Icon name={showRepeatPassword ? 'eye-slash' : 'eye'} size={20} color="#000" />
        </TouchableOpacity>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Your Birthday"
        value={birthday}
        onChangeText={setBirthday}
      />
      <Picker
        selectedValue={location}
        onValueChange={(itemValue) => setLocation(itemValue)}
        style={styles.input}
      >
        <Picker.Item label="khanget el ragouba" value="Tunis" />
        <Picker.Item label="barnousa" value="Sfax" />
        <Picker.Item label="dahmani" value="Sousse" />
        <Picker.Item label="kef" value="Kairouan" />
        <Picker.Item label="boulifa" value="Bizerte" />
      </Picker>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TouchableOpacity onPress={handleSignUp} style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <Text style={styles.signupText}>
        Already have an account?{' '}
        <Text style={styles.signupLink} onPress={() => navigation.navigate('Signin')}>
          Sign In
        </Text>
      </Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  input: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  passwordContainer: {
    position: 'relative',
    width: '80%',
    marginBottom: 10,
  },
  passwordInput: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  eyeIcon: {
    position: 'absolute',
    top: 15,
    right: 10,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  signupText: {
    marginTop: 20,
    color: '#000',
  },
  signupLink: {
    color: 'green',
  },
  button: {
    backgroundColor: '#18C0C1',
    padding: 15,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default SignUpScreen;

