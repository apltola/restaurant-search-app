import React from 'react';
import { StatusBar } from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';

StatusBar.setBarStyle('dark-content');

const headerStyle = {
  
}

const navigator = createStackNavigator({
  Search: SearchScreen,
},{
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'hello',
    headerStyle: headerStyle
  }
});

export default createAppContainer(navigator);

/* const AppContainer = createAppContainer(navigator);

export default function App() {
  return (
    <View>
      <AppContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
}); */



// YELP STUFF
// client id ZWU8CccgSjJcDx-4DUu92g
// api key -VRBQGxVcT3ilzaRTUXDwrUkt39x4PsNiVVORJYjWlgzJHt5EFMEotVWZMn5nw2-NgzNNBDiK5TQf6IJNoVDegtmOVmEHrPwaobqZsyZIWouoXvPrJ9dek5xQmFNXnYx