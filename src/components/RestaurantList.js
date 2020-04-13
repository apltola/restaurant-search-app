import React, { useState, useEffect } from 'react';
import { Animated, View, Text, StyleSheet, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Divider } from 'react-native-elements';
import RestaurantDetail from './RestaurantDetail';
import { iosColors } from '../util/globalStyles';

const RestaurantList = ({ title, restaurants, navigation }) => {
  return (
    <View style={styles.restaurantList}>
      <Text style={styles.title}>
        {title}
      </Text>
      <FlatList
        style={{paddingBottom: 15, paddingLeft: 10,}}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={restaurants}
        keyExtractor={r => r.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('Restaurant', { item })}>
              <RestaurantDetail item={item} />
            </TouchableOpacity>
          )
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
    paddingLeft: 10,
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

export default withNavigation(RestaurantList);