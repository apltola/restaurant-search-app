import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import RestaurantDetail from './RestaurantDetail';

const RestaurantList = ({ title, restaurants, navigation }) => {
  if (!restaurants.length) {
    return null;
  }

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
            <TouchableOpacity onPress={() => navigation.navigate('Restaurant', { id: item.id })}>
              <RestaurantDetail item={item} />
            </TouchableOpacity>
          )
        }}
      />
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
});

export default withNavigation(RestaurantList);