import React from 'react';
import { View, Text, TouchableOpacity, Linking, ImageBackground, StyleSheet } from 'react-native';

const Emergency = () => {
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

  return (
    <View style={styles.container}>
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
    alignItems: 'center',
    justifyContent: 'center',
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
