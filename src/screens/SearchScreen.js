import React, { useState } from 'react';
import { Animated, View, Text, StyleSheet, Dimensions } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import AwesomeAlert from 'react-native-awesome-alerts';
//     https://www.npmjs.com/package/react-native-alert-pro
import { MaterialIcons } from '@expo/vector-icons';
import { iosColors } from '../util/globalStyles';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [showErrorDialog, setShowErrorDialog] = useState(false);

  const searchApi = async () => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'helsinki'
        }
      });
      setResults(response.data.businesses);
    } catch(err) {
      console.log(err);
      setShowErrorDialog(true);
      setErrorMessage('Jokin meni pieleen...');
    }
  }

  return (
    <View style={styles.container}>
      <SearchBar
        value={searchTerm}
        onValueChange={setSearchTerm}
        onValueSubmit={() => searchApi()}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Animated.ScrollView>
        <View style={{marginTop: 30}}>
          <Text>
            results: {JSON.stringify(results, null, 2)}
          </Text>
        </View>
      </Animated.ScrollView>

      <AwesomeAlert
        show={showErrorDialog}
        showProgress={false}
        title="Jokin meni pieleen!"
        message="Yritä myöhemmin uudestaan..."
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showCancelButton={false}
        showConfirmButton={true}
        cancelText=""
        confirmText="     OK     "
        confirmButtonColor="#DD6B55"
        onCancelPressed={() => setShowErrorDialog(false)}
        onConfirmPressed={() => setShowErrorDialog(false)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    minHeight: SCREEN_HEIGHT,
  },
});

export default SearchScreen;
