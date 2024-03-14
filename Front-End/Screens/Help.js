import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Help = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>Welcome to Camping Support</Text>
        <Text style={styles.intro}>If you need assistance or have any questions regarding camping, feel free to reach out to our support team at <Text style={styles.email}>jessergafsi2@gmail.com</Text>.</Text>
      </View>

      <View style={styles.box}>
        <Text style={styles.sectionTitle}>Frequently Asked Questions:</Text>
        <View style={styles.faqItem}>
          <Text style={styles.faqQuestion}>How do I set up a tent?</Text>
          <Text style={styles.faqAnswer}>Check Our Survival Tips...</Text>
        </View>
        {/* Add more FAQs here */}
      </View>

      <View style={styles.box}>
        <Text style={styles.sectionTitle}>Contact Us:</Text>
        <Text style={styles.contactInfo}>Email: jessergafsi2@gmail.com</Text>
        {/* Add more contact information here */}
      </View>

      <View style={styles.box}>
        <Text style={styles.sectionTitle}>Helpful Tips:</Text>
        <Text style={styles.tip}>Check Our Emergency Section...</Text>
        {/* Add more tips here */}
      </View>

      <View style={styles.box}>
        <Text style={styles.sectionTitle}>Additional Resources:</Text>
        <Text style={styles.resourceLink}>- Camping Gear Reviews</Text>
        <Text style={styles.resourceLink}>- Beginner's Guide to Camping</Text>
        {/* Add more resource links here */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  box: {
    backgroundColor: '#f9f9f9',
    marginBottom: 20,
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#800080', // Purple color
  },
  intro: {
    fontSize: 18,
    marginBottom: 20,
    color: '#333', // Dark gray color
  },
  email: {
    textDecorationLine: 'underline',
    color: '#007bff', // Blue color
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  faqItem: {
    marginBottom: 15,
  },
  faqQuestion: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  faqAnswer: {
    fontSize: 16,
    color: '#666',
  },
  contactInfo: {
    fontSize: 18,
    color: '#666',
  },
  tip: {
    fontSize: 16,
    color: '#666',
  },
  resourceLink: {
    fontSize: 16,
    color: '#007bff',
  },
});

export default Help;
