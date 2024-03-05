import React, { useState } from 'react';
import { View, TextInput, StyleSheet, ImageBackground } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import { auth, firestore } from '../config/firebase';
import { Text, TouchableOpacity } from 'react-native';

const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [birthday, setBirthday] = useState('');
  const [error, setError] = useState('');

  const navigation = useNavigation();

  const handleSignUp = async () => {
    try {
      if (password !== repeatPassword) {
        console.error('Passwords do not match');
        return;
      }

      const userCredential = await createUserWithEmailAndPassword(auth, email);

      const userData = {
        email: email,
        username: username,
        birthday: birthday,
        location: 'Tunis', // Assuming you want to keep the location as 'Tunis'
      };

      await setDoc(doc(firestore, 'users', userCredential.user.uid), userData);

      console.log('User signed up successfully:', userCredential.user);

      navigation.navigate('Signin');
    } catch (error) {
      console.error('Error signing up:', error.message);
    }
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
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Repeat Password"
        value={repeatPassword}
        onChangeText={setRepeatPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Your Birthday"
        value={birthday}
        onChangeText={setBirthday}
      />
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
  error: {
    color: 'red',
    marginBottom: 10,
  },
  signupText: {
    marginTop: 20,
    color: '#fff',
  },
  signupLink: {
    color: 'blue',
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
