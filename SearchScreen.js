import React, { useState } from 'react';
import { View, FlatList, Text, Image, TextInput, StyleSheet } from 'react-native';
import axios from 'axios';

const SearchScreen = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    setLoading(true);
    axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
      .then(response => {
        setSearchResults(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search Movies"
        value={searchTerm}
        onChangeText={setSearchTerm}
        onSubmitEditing={handleSearch}
      />
      {loading ? <Text>Loading...</Text> : (
        <FlatList
          data={searchResults}
          keyExtractor={(item) => item.show.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('Details', { movie: item.show })}>
              <View style={styles.movieCard}>
                <Image source={{ uri: item.show.image?.medium }} style={styles.movieImage} />
                <Text style={styles.movieTitle}>{item.show.name}</Text>
                <Text style={styles.movieSummary}>{item.show.summary.slice(0, 100)}...</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
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

export default SearchScreen;
import MovieCard from '../components/MovieCard';

const renderMovie = ({ item }) => (
  <MovieCard
    movie={item.show}
    onPress={() => navigation.navigate('Details', { movie: item.show })}
  />
);
import SearchBar from '../components/SearchBar';

const SearchScreen = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Implement the search functionality
  };

  return (
    <View style={styles.container}>
      <SearchBar
        value={searchTerm}
        onChange={setSearchTerm}
        onSubmit={handleSearch}
      />
      {/* Rest of the UI */}
    </View>
  );
};
