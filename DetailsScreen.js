import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const DetailsScreen = ({ route }) => {
  const { movie } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: movie.image?.original }} style={styles.movieImage} />
      <Text style={styles.movieTitle}>{movie.name}</Text>
      <Text style={styles.movieSummary}>{movie.summary}</Text>
      <Text style={styles.detailsTitle}>Genres:</Text>
      <Text style={styles.detailsText}>{movie.genres?.join(', ')}</Text>
      <Text style={styles.detailsTitle}>Premiered:</Text>
      <Text style={styles.detailsText}>{movie.premiered}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  movieImage: { width: '100%', height: 250, marginBottom: 20 },
  movieTitle: { fontSize: 24, fontWeight: 'bold' },
  movieSummary: { fontSize: 16, color: '#666' },
  detailsTitle: { fontSize: 18, fontWeight: 'bold', marginTop: 10 },
  detailsText: { fontSize: 16, color: '#333' },
});

export default DetailsScreen;
