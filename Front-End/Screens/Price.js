import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Assuming you're using Expo

const PriceScreen = ({ navigation }) => {
  const [selectedPayment, setSelectedPayment] = useState(null);

  const handlePaymentSelect = (paymentMethod) => {
    setSelectedPayment(paymentMethod);
  };

  // Handle going back
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={goBack}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.contentBox}>
        <Text style={styles.heading}>Price Details</Text>
        {/* Price details */}
        <Text style={styles.priceText}>Price: $100 per night</Text>
        <Text style={styles.priceText}>Additional Fees: $20 cleaning fee</Text>

        {/* Payment method selection */}
        <Text style={styles.subHeading}>Select Payment Method:</Text>
        <TouchableOpacity
          style={[styles.paymentOption, selectedPayment === 'creditCard' && styles.selectedPayment]}
          onPress={() => handlePaymentSelect('creditCard')}>
          <Text>Credit Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.paymentOption, selectedPayment === 'paypal' && styles.selectedPayment]}
          onPress={() => handlePaymentSelect('paypal')}>
          <Text>PayPal</Text>
        </TouchableOpacity>
        {/* Add more payment options as needed */}

        {/* Button to proceed with payment */}
        <TouchableOpacity style={styles.paymentButton} disabled={!selectedPayment}>
          <Text style={styles.paymentButtonText}>Proceed with Payment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  contentBox: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', // Box shadow for hover effect
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  subHeading: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  priceText: {
    fontSize: 18,
    marginBottom: 10,
  },
  paymentOption: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  selectedPayment: {
    backgroundColor: '#e6f7ff', // Example background color for selected option
  },
  paymentButton: {
    backgroundColor: '#18C0C1',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  paymentButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1, // Ensure the button stays on top
  },
});

export default PriceScreen;
