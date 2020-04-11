import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <View style={styles.container}>
      <SearchBar
        value={searchTerm}
        onValueChange={setSearchTerm}
        onValueSubmit={() => console.log('submitted...')}
      />

      <View style={{marginTop: 30}}>
        <Text>
          search: {JSON.stringify(searchTerm, null, 2)}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  }
});

export default SearchScreen;
