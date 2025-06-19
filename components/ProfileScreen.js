import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
  Switch,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function ProfileScreen() {
  const [profilePicture, setProfilePicture] = useState(
    'https://4kwallpapers.com/images/wallpapers/satoru-gojo-blue-3840x2160-16951.jpg'
  ); // Default avatar
  const [theme, setTheme] = useState('light'); // Light mode by default
  const [stats, setStats] = useState({
    collaborations: 15,
    tracks: 7,
    followers: 24,
  });

  // Function to pick a profile picture
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfilePicture(result.assets[0].uri);
      Alert.alert('Success', 'Profile picture updated!');
    }
  };

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Function to increase a random stat
  const incrementRandomStat = () => {
    const keys = Object.keys(stats);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    setStats({ ...stats, [randomKey]: stats[randomKey] + 1 });
    Alert.alert('Stats Updated', `${randomKey} increased by 1!`);
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme === 'light' ? '#92B5FF' : '#1E1E1E' },
      ]}
    >
      {/* Profile Picture */}
      <TouchableOpacity onPress={pickImage}>
        <Image source={{ uri: profilePicture }} style={styles.avatar} />
        <Text style={styles.changePictureText}>Change Picture</Text>
      </TouchableOpacity>

      {/* User Info */}
      <Text style={[styles.name, { color: theme === 'light' ? '#000' : '#FFF' }]}>
        Thwin Khant Nyar Zaw
      </Text>
      <Text
        style={[
          styles.subtitle,
          { color: theme === 'light' ? '#555' : '#CCC' },
        ]}
      >
        Music Enthusiast | Vocalist
      </Text>

      {/* Stats Section */}
      <View style={styles.statsContainer}>
        {Object.keys(stats).map((key) => (
          <View style={styles.statBox} key={key}>
            <Text
              style={[
                styles.statValue,
                { color: theme === 'light' ? '#555' : '#FFF' },
              ]}
            >
              {stats[key]}
            </Text>
            <Text
              style={[
                styles.statLabel,
                { color: theme === 'light' ? '#555' : '#CCC' },
              ]}
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </Text>
          </View>
        ))}
      </View>

      {/* Theme Toggle */}
      <View style={styles.themeToggleContainer}>
        <Text
          style={[
            styles.themeLabel,
            { color: theme === 'light' ? '#000' : '#FFF' },
          ]}
        >
          Dark Mode
        </Text>
        <Switch value={theme === 'dark'} onValueChange={toggleTheme} />
      </View>

      {/* Update Stats Button */}
      <TouchableOpacity style={styles.button} onPress={incrementRandomStat}>
        <Text style={styles.buttonText}>Update Random Stat</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: '#FFC107',
    marginBottom: 10,
  },
  changePictureText: {
    color: '#3B82F6',
    fontSize: 14,
    marginBottom: 20,
    textDecorationLine: 'underline',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 30,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
    marginBottom: 30,
  },
  statBox: {
    alignItems: 'center',
    padding: 10,
  },
  statValue: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 14,
    marginTop: 5,
  },
  themeToggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  themeLabel: {
    fontSize: 16,
    marginRight: 10,
  },
  button: {
    backgroundColor: '#3B82F6',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
