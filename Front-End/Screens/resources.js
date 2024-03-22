import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';
import SurvivalTipsDetails from './SurvivalTipsDetails';

const Resources = () => {
    const [data, setData] = useState(null);
    const [searchCategory, setSearchCategory] = useState('');
    const [selectedTip, setSelectedTip] = useState(null);
 
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://192.168.43.44:5000/res/getAll');
          setData(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
  
    const filteredData = data ? data.filter(resource =>
      resource.Category.toLowerCase().includes(searchCategory.toLowerCase())
    ) : [];
  
    const handleTipClick = (tip) => {
      setSelectedTip(tip);
    };
  
    const handleCloseDetails = () => {
      setSelectedTip(null);
    };
  
    return (
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search by category"
            value={searchCategory}
            onChangeText={text => setSearchCategory(text)}
          />
          {filteredData.length > 0 ? (
            <View style={styles.resourceContainer}>
              {filteredData.map((resource, index) => (
                <TouchableOpacity key={resource.ResourceID} onPress={() => handleTipClick(resource)} style={[styles.resourceBox, index % 2 !== 0 ? styles.even : styles.odd]}>
                  <Text style={styles.title}>{resource.Title}</Text>
                  <Text style={styles.category}>{resource.Category}</Text>
                  <Image source={{ uri: resource.ImageURL }} style={styles.image} />
                </TouchableOpacity>
              ))}
            </View>
          ) : (
            <Text style={styles.loading}>No resources found</Text>
          )}
          <SurvivalTipsDetails
            isVisible={selectedTip !== null}
            onClose={handleCloseDetails}
            title={selectedTip?.Title}
            description={selectedTip?.Description}
            category={selectedTip?.Category}
          />
        </View>
      </ScrollView>
    );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  searchInput: {
    width: '80%',
    height: 40,
    marginTop: 40, 
    marginBottom: 10,
    paddingHorizontal: 15,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 25,
    backgroundColor: '#fff',
    fontSize: 16,
    color: '#333',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  resourceContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  resourceBox: {
    width: '48%',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    marginBottom: 10,
    textAlign: 'center',
  },
  category: {
    fontStyle: 'italic',
    marginBottom: 10,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  odd: {
    marginRight: '2%',
  },
  even: {
    marginLeft: '2%',
  },
  loading: {
    fontSize: 18,
    fontStyle: 'italic',
  },
});

export default Resources;