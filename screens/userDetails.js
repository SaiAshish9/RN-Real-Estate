import React from 'react';
import {View, Dimensions} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import {HighlightedText, SmallText} from './styles';
import TextInput from '../components/input';
import Btn from '../components/btn';

const {height, width} = Dimensions.get('window');

const UserDetails = ({navigation}) => {
  return (
    <View
      style={{
        height,
        width,
        paddingHorizontal: width * 0.05,
        paddingVertical: height * 0.03,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
      }}>
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon name="arrow-back-outline" size={32} />
        </TouchableOpacity>
        <HighlightedText style={{marginVertical: 10}}>
          Enter your details to signup
        </HighlightedText>
        <TextInput
          style={{
            marginTop: 20,
          }}
          text="First Name"
        />
        <TextInput
          style={{
            marginTop: 20,
          }}
          text="Last Name"
        />
        <TextInput
          style={{
            marginTop: 20,
          }}
          text="Phone Number"
        />
        <TextInput
          style={{
            marginTop: 20,
          }}
          text="Email"
        />
        <TextInput
          style={{
            marginTop: 20,
          }}
          text="Address"
        />
      </View>

      <Btn
        onPress={() => {
          navigation.push('verification');
        }}
        text="Save"
        style={{marginVertical: 20, marginBottom: height * 0.1}}
      />
    </View>
  );
};

export default UserDetails;
