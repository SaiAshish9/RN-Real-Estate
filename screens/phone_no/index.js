import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import TextInput from '../../components/input';
import Btn from '../../components/btn';

const {width, height} = Dimensions.get('window');

const Card = styled.View`
  width: 80%;
  border-radius: 20px;
  background: #fff;
  elevation: 2;
  padding: 20px;
  text-align: left;
`;

const HighlightedText = styled.Text`
  font-weight: bold;
  font-size: 30px;
  color: black;
  margin-bottom: 7px;
`;

const SmallText = styled.Text`
  font-size: 17px;
  color: black;
`;

const Phone = () => {
  return (
    <View
      style={{
        width,
        height,
        backgroundColor: '#d8d7dc',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
      }}>
      <Card>
        <TouchableOpacity>
          <Icon
            name="close-outline"
            size={32}
            style={{position: 'relative', right: 8}}
          />
        </TouchableOpacity>
        <HighlightedText>Hi there,</HighlightedText>
        <SmallText>Please enter your phone</SmallText>
        <SmallText>number to contiinue</SmallText>
        <TextInput
          style={{
            marginTop: 20,
          }}
          text="Enter Phone Number"
        />
        <Btn text="Next" style={{marginVertical: 20}} />
      </Card>
    </View>
  );
};

export default Phone;
