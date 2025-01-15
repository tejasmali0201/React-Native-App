// SearchBar.js
import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const SearchBar = ({ value, onChange, onSubmit }) => {
  return (
    <TextInput
      style={styles.searchBar}
      placeholder="Search Movies"
      value={value}
      onChangeText={onChange}
      onSubmitEditing={onSubmit}
    />
  );
};

const styles = StyleSheet.create({
  searchBar: { height: 40, borderColor: '#ccc', borderWidth: 1, marginBottom: 10, paddingLeft: 10 },
});

export default SearchBar;
