import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import axios from 'axios';

const HomeScreen = ({ navigation }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('https://api.tvmaze.com/search/shows?q=all')
      .then(response => setMovies(response.data))
      .catch(error => console.error(error));
  }, []);

  const renderMovie = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Details', { movie: item.show })}>
      <View style={styles.movieCard}>
        <Image source={{ uri: item.show.image?.medium }} style={styles.movieImage} />
        <Text style={styles.movieTitle}>{item.show.name}</Text>
        <Text style={styles.movieSummary}>{item.show.summary.slice(0, 100)}...</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search Movies"
        onFocus={() => navigation.navigate('Search')}
      />
      <FlatList
        data={movies}
        keyExtractor={(item) => item.show.id.toString()}
        renderItem={renderMovie}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  searchBar: { height: 40, borderColor: '#ccc', borderWidth: 1, marginBottom: 10, paddingLeft: 10 },
  movieCard: { marginBottom: 20 },
  movieImage: { width: 100, height: 150 },
  movieTitle: { fontSize: 18, fontWeight: 'bold' },
  movieSummary: { fontSize: 14, color: '#666' },
});

export default HomeScreen;
import MovieCard from '../components/MovieCard';

const renderMovie = ({ item }) => (
  <MovieCard
    movie={item.show}
    onPress={() => navigation.navigate('Details', { movie: item.show })}
  />
);
