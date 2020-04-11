import React, { useState } from 'react';
import { Animated, View, Text, StyleSheet, Dimensions } from 'react-native';
import Dialog, { DialogContent, DialogFooter, DialogButton, ScaleAnimation } from 'react-native-popup-dialog';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SCREEN_HEIGHT = Dimensions.get('window').height;

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [requestFailed, setRequestFailed] = useState(false);

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
      setRequestFailed(true);
    }
  }

  return (
    <View style={styles.container}>
      <SearchBar
        value={searchTerm}
        onValueChange={setSearchTerm}
        onValueSubmit={() => searchApi()}
      />
      <Animated.ScrollView>
        <View style={{marginTop: 30}}>
          <Text>
            results: {JSON.stringify(results, null, 2)}
          </Text>
        </View>
      </Animated.ScrollView>
        
      {/* <Dialog
        visible={true}
        onTouchOutside={() => setRequestFailed(false)}
        dialogAnimation={new ScaleAnimation({ initialValue: 0, useNativeDriver: true })}
        footer={
          <DialogFooter>
            <DialogButton
              text="OK :/"
              onPress={() => setRequestFailed(false)}
              //textStyle={{color: iosColors.darkBlue, fontSize: 18}}
            />
          </DialogFooter>
        }
      >
        <DialogContent>
          <View>
            <Text>Jokin meni vikaan!</Text>
          </View>
        </DialogContent>
      </Dialog> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    minHeight: SCREEN_HEIGHT,
  }
});

export default SearchScreen;
