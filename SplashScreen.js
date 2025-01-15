import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 3000); // Delay for 3 seconds before navigating to Home Screen
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://path/to/your/splash-image.jpg' }} // Replace with an actual image URL
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' },
  image: { width: '100%', height: '100%', resizeMode: 'cover' },
});

export default SplashScreen;
