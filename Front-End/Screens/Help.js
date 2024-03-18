import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Help = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Welcome to Camping Support</Text>
      <Text style={styles.intro}>If you need assistance or have any questions regarding camping, feel free to reach out to our support team at <Text style={styles.email}>jessergafsi2@gmail.com</Text>.</Text>
      
      <View style={styles.faq}>
        <Text style={styles.faqTitle}>Frequently Asked Questions:</Text>
        <View style={styles.faqItem}>
          <Text style={styles.faqQuestion}>How do I set up a tent?</Text>
          <Text style={styles.faqAnswer}>Check Our Servival Tips...</Text>
        </View>
        {/* Add more FAQs here */}
      </View>
      
      <View style={styles.contact}>
        <Text style={styles.contactTitle}>Contact Us:</Text>
        <Text style={styles.contactInfo}>Email: jessergafsi2@gmail.com</Text>
        {/* Add more contact information here */}
      </View>
      
      <View style={styles.tips}>
        <Text style={styles.tipsTitle}>Helpful Tips:</Text>
        <Text style={styles.tip}>Check Our Emergency Section...</Text>
        {/* Add more tips here */}
      </View>
      
      <View style={styles.resources}>
        <Text style={styles.resourcesTitle}>Additional Resources:</Text>
        <Text style={styles.resourceLink}>- Camping Gear Reviews</Text>
        <Text style={styles.resourceLink}>- Beginner's Guide to Camping</Text>
        {/* Add more resource links here */}
      </View>
    </ScrollView>
  );
};
console.log("done")
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
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
  faq: {
    marginBottom: 20,
  },
  faqTitle: {
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
  contact: {
    marginBottom: 20,
  },
  contactTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  contactInfo: {
    fontSize: 18,
    color: '#666',
  },
  tips: {
    marginBottom: 20,
  },
  tipsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  tip: {
    fontSize: 16,
    color: '#666',
  },
  resources: {},
  resourcesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  resourceLink: {
    fontSize: 16,
    color: '#007bff',
  },
});

export default Help;
