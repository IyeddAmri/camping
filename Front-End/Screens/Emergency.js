import React from 'react';
import { View, Text, TouchableOpacity, Linking, ImageBackground, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const Emergency = () => {
  const navigation = useNavigation();

  const callEmergencyNumber = () => {
    // Replace '911' with your country's emergency number if needed
    Linking.openURL('tel:198');
  };

  const showCampingAdvice = () => {
    // Example camping advice
    alert("Camping Advice:\n\n1. Always check the weather forecast before going camping.\n2. Bring enough water and food supplies.\n3. Set up your tent away from hazards like cliffs or falling branches.\n4. Keep a safe distance from wild animals.\n5. Pack proper clothing for all weather conditions.");
  };

  const showFirstAidTips = () => {
    // Example first aid tips
    alert("First Aid Tips:\n\n1. For cuts and scrapes, clean the wound with soap and water, then apply a sterile bandage.\n2. If someone is experiencing heatstroke, move them to a cooler place, give them water, and apply cool compresses to their body.\n3. For sprains, elevate the affected limb and apply ice packs wrapped in cloth.");
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.goBackButton} onPress={handleGoBack}>
        <Icon name="arrow-left" size={20} color="#000" />
      </TouchableOpacity>
      <ImageBackground source={{ uri: 'https://i.pinimg.com/564x/d9/af/b6/d9afb60d83eca7f92cfa44316c904337.jpg' }} style={styles.backgroundImage}>
        <TouchableOpacity onPress={showCampingAdvice} style={styles.button}>
          <Text style={styles.buttonText}>Camping Advice</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={showFirstAidTips} style={styles.button}>
          <Text style={styles.buttonText}>First Aid Tips</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={callEmergencyNumber} style={[styles.button, { backgroundColor: 'red' }]}>
          <Text style={[styles.buttonText, { color: 'white' }]}>Call Emergency</Text>
        </TouchableOpacity>
        <Text style={styles.infoText}>If something bad happens, tap here to call emergency services</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  goBackButton: {
    position: 'absolute',
    top: 35,
    left: 20,
    zIndex: 1,
   
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginBottom: 20,
    backgroundColor: '#f0f0f0',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  infoText: {
    marginTop: 20,
    fontSize: 16,
    color: '#777',
    fontStyle: 'italic',
    textAlign: 'center',
  },
});

export default Emergency;
