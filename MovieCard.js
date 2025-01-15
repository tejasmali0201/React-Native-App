// MovieCard.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const MovieCard = ({ movie, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <Image source={{ uri: movie.image?.medium }} style={styles.image} />
        <Text style={styles.title}>{movie.name}</Text>
        <Text style={styles.summary}>{movie.summary.slice(0, 100)}...</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: { marginBottom: 20 },
  image: { width: 100, height: 150 },
  title: { fontSize: 18, fontWeight: 'bold' },
  summary: { fontSize: 14, color: '#666' },
});

export default MovieCard;
