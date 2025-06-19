import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  const [welcomeMessage, setWelcomeMessage] = useState('Welcome to VoxMusica!');

  // Function to generate a random welcome message
  const generateWelcomeMessage = () => {
    const messages = [
      'Let the music flow!',
      'Welcome back, Rockstar!',
      'Sing. Collaborate. Shine!',
      'Music brings us together!',
      'Hit the high notes today!',
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    setWelcomeMessage(randomMessage);
  };

  return (
    <ImageBackground
      source={{ uri: 'https://cdn.pixabay.com/photo/2017/08/30/10/47/concert-2691353_1280.jpg' }} // Background image URL
      style={styles.background}
    >
      {/* Overlay for readability */}
      <View style={styles.overlay}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.title}>VoxMusica</Text>
          <Text style={styles.subtitle}>{welcomeMessage}</Text>
        </View>

        {/* Button Section */}
        <View style={styles.cardContainer}>
          <TouchableOpacity
            style={styles.card}
            onPress={() => {
              generateWelcomeMessage();
              navigation.navigate('Collaborate');
            }}
          >
            <Ionicons name="people-outline" size={40} color="#4CAF50" />
            <Text style={styles.cardText}>Collaborate</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.card}
            onPress={() => {
              generateWelcomeMessage();
              navigation.navigate('Profile');
            }}
          >
            <Ionicons name="person-circle-outline" size={40} color="#3B82F6" />
            <Text style={styles.cardText}>Profile</Text>
          </TouchableOpacity>
        </View>

        {/* Floating Action Button */}
        <TouchableOpacity style={styles.fab} onPress={generateWelcomeMessage}>
          <Ionicons name="musical-notes-outline" size={30} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(30, 58, 138, 0.8)', // Semi-transparent overlay
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  header: {
    marginBottom: 50,
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FFFFFF', // White text
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#D1D5DB', // Light gray text
    textAlign: 'center',
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  card: {
    backgroundColor: '#FFFFFF', // White card
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 150,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // For Android shadow
  },
  cardText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1E3A8A',
  },
  fab: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    backgroundColor: '#4CAF50',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // For Android shadow
  },
});
