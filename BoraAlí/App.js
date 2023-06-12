import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducers/reducer';
import Home from './screens/Home';
import CreateCar from './screens/CreateCar';
import Cars from './screens/Cars';
import Map from './screens/Map';


const store = createStore(reducer);

const Stack = createStackNavigator();

const App = () => {
  return (
    <View style={styles.container}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Create" component={CreateCar} />
        <Stack.Screen name="Car" component={Cars} />
        <Stack.Screen name="Map" component={Map} />
        
      </Stack.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <App />
      </NavigationContainer>
    </Provider>
  );
};
