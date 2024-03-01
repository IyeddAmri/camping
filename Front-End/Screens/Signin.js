import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { signInWithGoogle, signInWithFacebook, signInWithEmailAndPassword } from '../config/firebase'

const SignInScreen = ({ navigation }) => {
  const handleSignInWithGoogle = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

  const handleSignInWithFacebook = async () => {
    try {
      await signInWithFacebook();
    } catch (error) {
      console.error('Error signing in with Facebook:', error);
    }
  };

  const handleSignInWithEmailAndPassword = async () => {
    // Navigate to the email/password sign-in page
    navigation.navigate('EmailPasswordSignIn');
  };

  const handleSignUp = () => {
    // Navigate to the sign-up page
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Sign In</Text>
      <Button title="Sign in with Google" onPress={handleSignInWithGoogle} />
      <Button title="Sign in with Facebook" onPress={handleSignInWithFacebook} />
      <Button title="Sign in with Email/Password" onPress={handleSignInWithEmailAndPassword} />
      <Button title="Sign Up" onPress={handleSignUp} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default SignInScreen;
