import React from 'react';
import {View, Dimensions} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import {HighlightedText, SmallText} from './styles';
import TextInput from '../components/input';
import Btn from '../components/btn';

const {height, width} = Dimensions.get('window');

const PhoneVerification = ({navigation}) => {
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
          Phone Verification
        </HighlightedText>
        <SmallText style={{fontSize: 14}}>
          A verification email has been sent to
        </SmallText>
        <SmallText style={{fontSize: 14}}>your entered phone number.</SmallText>
        <TextInput
          inverted
          style={{
            marginTop: 20,
          }}
          text="Enter Code"
        />
        <View
          style={{
            marginTop: 20,
            display: 'flex',
            flexDirection: 'row',
          }}>
          <SmallText style={{fontSize: 14}}>Didn't receive code?</SmallText>
          <TouchableOpacity>
            <SmallText
              style={{
                marginLeft: 6,
                fontWeight: 'bold',
                fontSize: 14,
                color: '#4479fa',
              }}>
              Resend
            </SmallText>
          </TouchableOpacity>
        </View>
      </View>

      <Btn
        onPress={() => {
          navigation.push('type');
        }}
        text="Verify"
        style={{marginVertical: 20, marginBottom: height * 0.1}}
      />
    </View>
  );
};

export default PhoneVerification;
