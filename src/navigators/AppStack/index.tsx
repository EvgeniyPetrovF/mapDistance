import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import DetailsScreen from '../../features/Home/screens/DetailsScreen';
import HomeScreen from '../../features/Home/screens/HomeScreen';
import {StackParamList} from '../../models/navigation';

const Stack = createNativeStackNavigator<StackParamList>();

const options: Record<string, NativeStackNavigationOptions> = {
  app: {headerShown: false},
  details: {headerShown: true},
};

const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={options.app}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={options.details}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
