import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './home';
import Icon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components';

const {height, width} = Dimensions.get('window');

const Fav = styled.TouchableOpacity`
  height: 50px;
  width: 50px;
  background-color: #4479fa;
  border-radius: 20px;
  position: absolute;
  bottom: ${height * 0.055}px;
  left: ${width * 0.43}px;
  z-index: 5;
`;

function MyTabBar({state, descriptors, navigation}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        elevation: 3,
        backgroundColor: '#fff',
        height: height * 0.09,
        alignItems: 'center',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
      }}>
      <StatusBar
        translucent
        barStyle="dark-content"
        // light-content
        backgroundColor={'transparent'}
        color="#000"
      />
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        var icon;
        switch (index) {
          case 0:
            icon = 'planet-outline';
            break;
          case 1:
            icon = 'home-outline';
            break;
          case 2:
            icon = 'search-outline';
            break;
          case 3:
            icon = 'person';
            break;
        }

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            key={index}
            onLongPress={onLongPress}
            style={{flex: 1, alignItems: 'center'}}>
            <Icon
              name={icon}
              size={23}
              color={isFocused ? '#4479fa' : '#c4c4c4'}
            />
            <Text
              style={{
                color: isFocused ? '#000' : '#c4c4c4',
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 12,
              }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
      <Fav
        style={{
          // display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Icon name={'add'} size={30} color={'#fff'} />
      </Fav>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const Try = () => <View />;

export default function App() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={(props) => <MyTabBar {...props} />}>
      <Tab.Screen name="Explore" component={Try} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Try} />
      <Tab.Screen name="My Profile" component={Try} />
    </Tab.Navigator>
  );
}
