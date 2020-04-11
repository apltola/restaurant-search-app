import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';

const _SearchBar = ({value, onValueChange, onValueSubmit}) => {

  const getPlatform = () => {
    if (Platform.OS === 'android') {
      return 'android';
    } else if (Platform.OS === 'ios') {
      return 'ios';
    } else {
      return 'default';
    }
  }

  return (
    <View>
      <SearchBar
        platform={getPlatform()}
        containerStyle={styles.container}
        placeholder="Hae"
        onChangeText={v => onValueChange(() => v)}
        value={value}
        cancelButtonTitle="Sulje"
        autoCorrect={false}
        onEndEditing={() => onValueSubmit()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    //borderColor: "goldenrod",
    //borderWidth: 2,
    backgroundColor: "#fff"
  }
});

export default _SearchBar;
