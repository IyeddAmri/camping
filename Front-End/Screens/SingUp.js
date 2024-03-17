import React, { useState } from 'react';
import { View, TextInput, StyleSheet, ImageBackground, TouchableOpacity, Text, Picker } from 'react-native';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore'; // Import Firestore functions
import { auth, firestore } from '../config/firebase'; // Assuming 'firestore' is your Firestore instance
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the eye icon

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [birthday, setBirthday] = useState('');
  const [location, setLocation] = useState('');

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

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      
      const userData = {
        email: email,
        username: username,
        birthday: birthday,
        location: location
      };
      await setDoc(doc(firestore, 'utilisateurr', userCredential.user.uid), userData);

      console.log('User signed up successfully:', userCredential.user);
    } catch (error) {
      console.error('Error signing up:', error.message);
      setError(error.message); // Set error state
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
          <Icon name={showPassword ? 'eye-slash' : 'eye'} size={20} color="#ccc" />
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
          <Icon name={showRepeatPassword ? 'eye-slash' : 'eye'} size={20} color="#ccc" />
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
      <Picker.Item label="Ariana" value="Ariana" />
  <Picker.Item label="Beja" value="Beja" />
  <Picker.Item label="Ben Arous" value="Ben Arous" />
  <Picker.Item label="Bizerte" value="Bizerte" />
  <Picker.Item label="Gabes" value="Gabes" />
  <Picker.Item label="Gafsa" value="Gafsa" />
  <Picker.Item label="Jendouba" value="Jendouba" />
  <Picker.Item label="Kairouan" value="Kairouan" />
  <Picker.Item label="Kasserine" value="Kasserine" />
  <Picker.Item label="Kebili" value="Kebili" />
  <Picker.Item label="Kef" value="Kef" />
  <Picker.Item label="Mahdia" value="Mahdia" />
  <Picker.Item label="Manouba" value="Manouba" />
  <Picker.Item label="Medenine" value="Medenine" />
  <Picker.Item label="Monastir" value="Monastir" />
  <Picker.Item label="Nabeul" value="Nabeul" />
  <Picker.Item label="Sfax" value="Sfax" />
  <Picker.Item label="Sidi Bouzid" value="Sidi Bouzid" />
  <Picker.Item label="Siliana" value="Siliana" />
  <Picker.Item label="Sousse" value="Sousse" />
  <Picker.Item label="Tataouine" value="Tataouine" />
  <Picker.Item label="Tozeur" value="Tozeur" />
  <Picker.Item label="Tunis" value="Tunis" />
  <Picker.Item label="Zaghouan" value="Zaghouan" />

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
