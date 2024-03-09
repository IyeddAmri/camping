import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, ImageBackground, Modal, TouchableWithoutFeedback } from 'react-native';
import * as Animatable from 'react-native-animatable';

const backgroundImage = { uri: 'https://i.pinimg.com/564x/83/56/f0/8356f0a379e8cb613c4c3eedbc09d936.jpg' };

const Checklist = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Tent', checked: false },
    { id: 2, name: 'Sleeping bags', checked: false },
    { id: 3, name: 'Cooking stove', checked: false },
    { id: 4, name: 'Food supplies', checked: false },
    { id: 5, name: 'Water bottles', checked: false },
    { id: 6, name: 'First aid kit', checked: false },
    { id: 7, name: 'Flashlights', checked: false },
    { id: 8, name: 'Matches/lighter', checked: false },
    { id: 9, name: 'Map/Compass', checked: false },
    { id: 10, name: 'Sunscreen', checked: false },
    { id: 11, name: 'Insect repellent', checked: false },
    { id: 12, name: 'Portable stove', checked: false },
    { id: 13, name: 'Cooking utensils', checked: false },
    { id: 14, name: 'Cooler', checked: false },
    { id: 15, name: 'Camping chairs', checked: false },
    { id: 16, name: 'Portable table', checked: false },
    { id: 17, name: 'Sleeping pads', checked: false },
    { id: 18, name: 'Pillows', checked: false },
    { id: 19, name: 'Hiking boots', checked: false },
    { id: 20, name: 'Rain gear', checked: false },
  ]);

  const [fadeAnim] = useState(new Animated.Value(0));
  const [showModal, setShowModal] = useState(false);
  const checklistRef = useRef(null);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(() => {
    if (items.every(item => item.checked)) {
      checklistRef.current.bounceIn();
      setShowModal(true);
    }
  }, [items]);

  const handleCheckboxChange = (itemId) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <Animatable.View ref={checklistRef} style={[styles.container, { opacity: fadeAnim }]}>
        <Text style={styles.title}>Camping Checklist</Text>
        {items.map(item => (
          <TouchableOpacity
            key={item.id}
            style={styles.itemContainer}
            onPress={() => handleCheckboxChange(item.id)}>
            <View style={styles.checkbox}>
              {item.checked && <View style={styles.checkedIndicator} />}
            </View>
            <Text style={styles.itemText}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </Animatable.View>

      <Modal
        animationType="fade"
        transparent={true}
        visible={showModal}
        onRequestClose={closeModal}>
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={styles.modalBackground}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Congratulations!</Text>
              <Text style={styles.modalText}>You're ready now for your trip!</Text>
              <TouchableOpacity style={styles.modalButton} onPress={closeModal}>
                <Text style={styles.modalButtonText}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    padding: 20,
    color: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderRadius: 4,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkedIndicator: {
    width: 14,
    height: 14,
    backgroundColor: 'green',
    borderRadius: 2,
  },
  itemText: {
    fontSize: 18,
    color: '#fff',
    marginLeft: 10,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  modalButton: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  modalButtonText: {
    fontSize: 18,
    color: '#fff',
  },
});

export default Checklist;
