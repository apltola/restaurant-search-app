import React, { useState, useEffect } from 'react';
import { Animated, View, Text, StyleSheet, Dimensions, FlatList } from 'react-native';
import { Divider } from 'react-native-elements';
import RestaurantDetail from './RestaurantDetail';
import { iosColors } from '../util/globalStyles';

const RestaurantList = ({ title, restaurants }) => {
  return (
    <View style={styles.restaurantList}>
      <Text style={styles.title}>
        {title}
      </Text>
      <FlatList
        style={{paddingBottom: 15}}
        horizontal={true}
        data={restaurants}
        keyExtractor={r => r.id}
        renderItem={({ item }) => {
          return <RestaurantDetail item={item} />
        }}
      />
      {/* <Divider style={styles.divider} /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 5,
  },
  restaurantList: {
    paddingBottom: 15,
    paddingTop: 10,
    borderWidth: 0,
  },
  divider: {
    backgroundColor: iosColors.grey,
    marginBottom: 10,
  }
});

export default RestaurantList;