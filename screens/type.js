import React from 'react';
import ImageBg from '../components/imageBackground';
import {View, Dimensions, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components';

const {width, height} = Dimensions.get('window');

const Circle = styled.View`
  background: #fff;
  width: ${width * 0.3}px;
  height: ${width * 0.3}px;
  border-radius: ${width * 0.15}px;
`;

const Type = ({navigation}) => {
  return (
    <ImageBg path={require('../assets/images/splash/splash.png')}>
      <View
        style={{
          paddingHorizontal: width * 0.05,
          paddingVertical: height * 0.03,
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon name="arrow-back-outline" color="#fff" size={32} />
        </TouchableOpacity>
        <Text
          style={{
            color: '#fff',
            display: 'flex',
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 27,
            marginVertical: height * 0.16,
          }}>
          Are you ?
        </Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: width * 0.1,
          }}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              navigation.push('userDetails');
            }}>
            <Circle></Circle>
            <Text
              style={{
                color: '#fff',
                display: 'flex',
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 23,
                marginVertical: height * 0.03,
              }}>
              Company
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              navigation.push('userDetails');
            }}>
            <Circle></Circle>
            <Text
              style={{
                color: '#fff',
                display: 'flex',
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 23,
                marginVertical: height * 0.03,
              }}>
              User
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBg>
  );
};

export default Type;
