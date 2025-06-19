import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';

export default function CollaborateScreen() {
  const [statusMessage, setStatusMessage] = useState('Ready to collaborate?'); // Initial status message
  const [isCollaborating, setIsCollaborating] = useState(false); // Collaboration state

  // Function to handle collaboration start
  const startCollaboration = () => {
    setIsCollaborating(true); // Set collaboration state to active
    setStatusMessage('Collaboration in progress... 🎶');

    // Simulate a process and show completion
    setTimeout(() => {
      setIsCollaborating(false);
      setStatusMessage('Collaboration complete! ✨');
      Alert.alert('Success', 'Your collaboration session has ended.');
    }, 3000); // 3-second delay to simulate collaboration
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <Text style={styles.title}>Collaborate with Singers!</Text>
      <Text style={styles.subtitle}>Real-time pitch correction and harmonization</Text>

      {/* Image Section */}
      <Image
        source={{
          uri: 'https://cdn.pixabay.com/photo/2016/11/19/14/00/concert-1836077_1280.jpg',
        }}
        style={styles.image}
      />

      {/* Status Message */}
      <Text style={styles.status}>{statusMessage}</Text>

      {/* Action Button */}
      <TouchableOpacity
        style={[styles.button, isCollaborating && styles.disabledButton]} // Disable button if collaborating
        onPress={startCollaboration}
        disabled={isCollaborating}
      >
        <Text style={styles.buttonText}>
          {isCollaborating ? 'Collaborating...' : 'Start Collaborating'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92B5FF', // Deep blue background
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#EEEEE', // White text
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#FFFFFF', // Light gray text
    marginBottom: 20,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 15,
    marginBottom: 20,
  },
  status: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF', // White text for status
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#3B82F6', // Light blue button
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // For Android shadow
  },
  buttonText: {
    color: '#FFFFFF', // White text
    fontSize: 18,
    fontWeight: 'bold',
  },
  disabledButton: {
    backgroundColor: '#9CA3AF', // Gray color when disabled
  },
});
