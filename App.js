import React, {useEffect} from 'react';
import RNBootSplash from 'react-native-bootsplash';
import Language from './screens/language';
import Phone from './screens/phone_no';
import Type from './screens/type';
import PhoneVerification from './screens/phoneVerification';
import UserDetails from './screens/userDetails';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  const start = async () => {
    RNBootSplash.show();
    await RNBootSplash.hide({duration: 250});
  };
  const Stack = createStackNavigator();

  useEffect(() => {
    start();
  }, []);

  return (
    <NavigationContainer
      ref={(navigator) => {
        // setNavigator(navigator);
      }}>
      <Stack.Navigator initialRouteName="language" headerMode="none">
        <Stack.Screen name="language" component={Language} />
        <Stack.Screen name="phone" component={Phone} />
        <Stack.Screen name="verification" component={PhoneVerification} />
        <Stack.Screen name="type" component={Type} />
        <Stack.Screen name="userDetails" component={UserDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
