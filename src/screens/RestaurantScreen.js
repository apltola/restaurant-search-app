import React, { useState, useEffect } from 'react';
import { Animated, View, Text, StyleSheet, Dimensions, FlatList, Image, ActivityIndicator } from 'react-native';
import { iosColors } from '../util/globalStyles';
import yelp from '../api/yelp';

const RestaurantScreen = ({ navigation }) => {
  const [restaurant, setRestaurant] = useState(null);
  const id = navigation.getParam('id');

  const getRestaurant = async id => {
    try {
      const response = await yelp.get(`/${id}`);
      setRestaurant(response.data);
    } catch(err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getRestaurant(id);
    //return () => {};
  }, [])

  if (!restaurant) {
    return (
      <View style={{flex: 1, justifyContent:'center'}}>
        <ActivityIndicator size='large' color="#0070f3" />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Animated.ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>
          {restaurant.name}
        </Text>
        {restaurant.photos.map(photo => {
          return (
            <Image key={photo} style={styles.image} source={{ uri: photo }} />
          )
        })}
      </Animated.ScrollView>

      {/* <View style={{paddingTop: 50}}>
        <Text>{JSON.stringify(restaurant, null, 2)}</Text>
      </View> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingBottom: 10,
  },
  image: {
    height: 200,
    width: 300,
    //alignSelf: 'center',
    borderRadius: 10,
    marginTop: 15,
  }
});



export default RestaurantScreen;