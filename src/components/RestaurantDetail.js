import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { iosColors } from '../util/globalStyles';

const RestaurantDetail = ({ item }) => {
  return (
    <View style={styles.detail}>
      {item.image_url !== ''
        ? <Image style={styles.image} source={{ uri: item.image_url }} />
        : <View style={styles.blankImage} />
      }
      <Text style={styles.name}>
        {item.name}
      </Text>
      <Text>
        {item.rating}/5 Stars  ·  {item.review_count} {item.review_count > 1 ? 'Reviews' : 'Review'}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  detail: {
    marginRight: 20,
  },
  image: {
    width: 250,
    height: 125,
    borderRadius: 10,
  },
  blankImage: {
    backgroundColor: iosColors.black,
    width: 250,
    height: 125,
    borderRadius: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingTop: 5,
  }
});

export default RestaurantDetail;