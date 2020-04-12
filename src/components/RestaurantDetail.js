import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { iosColors } from '../util/globalStyles';

const RestaurantDetail = ({ item }) => {
  return (
    <View>
      {item.image_url !== ''
        ? <Image style={styles.image} source={{ uri: item.image_url }} />
        : <View style={styles.blankImage} />
      }
      <Text style={styles.name}>
        {item.name}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 125,
    borderRadius: 5,
  },
  blankImage: {
    backgroundColor: iosColors.black,
    width: 250,
    height: 125,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingTop: 5,
  }
});

export default RestaurantDetail;