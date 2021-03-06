import React, {useState} from 'react';
import {View, Dimensions, Image, Text, TouchableOpacity} from 'react-native';
import Banner from '../../assets/images/home_banner.png';
import Img1 from '../../assets/images/home_icon1.png';
import Img2 from '../../assets/images/home_icon2.png';
import Img3 from '../../assets/images/home_icon3.png';
import Img4 from '../../assets/images/home_icon4.png';
import Icon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components';
import Search from '../../components/search';

const {width, height} = Dimensions.get('window');

const Card = styled.View`
  height: ${height * 0.18}px;
  width: 45%;
  background-color: #fff;
  border-radius: 20px;
  elevation: 1;
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;

const Txt = styled.Text`
  font-weight: bold;
`;

const CallUs = styled.View`
  height: ${height * 0.05}px;
  background-color: #fff;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  width: ${width * 0.27}px;
  z-index: 5;
`;

const Circle = styled.View`
  border-radius: ${height * 0.015}px;
  height: ${height * 0.03}px;
  width: ${height * 0.03}px;
  background-color: #7fc132;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Options = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #f8f8f8;
  border-radius: 10px;
`;

const Home = () => {
  const [selected, setSelected] = useState(1);

  return (
    <View style={{height, width, backgroundColor: '#f6f6f8'}}>
      <View
        style={{
          // height: height * 0.165,
          backgroundColor: '#fff',
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          elevation: 2,
          paddingHorizontal: width * 0.07,
          paddingTop: height * 0.05,
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Txt style={{fontSize: 16, color: '#333'}}>Home</Txt>
          <Options
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                setSelected(0);
              }}
              style={{
                height: '100%',
                borderColor: selected === 0 ? '#5e7aeb' : 'none',
                borderRadius: 10,
                paddingHorizontal: 10,
                paddingVertical: 5,
                borderWidth: selected === 0 ? 2 : 0,
              }}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: 'bold',
                  color: selected === 0 ? '#5e7aeb' : '#a9aaac',
                }}>
                Rent
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setSelected(1);
              }}
              style={{
                height: '100%',
                borderColor: selected === 1 ? '#5e7aeb' : 'none',
                borderWidth: selected === 1 ? 2 : 0,
                borderRadius: 10,
                paddingHorizontal: 10,
                paddingVertical: 5,
              }}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: 'bold',
                  color: selected === 1 ? '#5e7aeb' : '#a9aaac',
                }}>
                Buy
              </Text>
            </TouchableOpacity>
          </Options>
        </View>
        <Search />
      </View>
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          paddingTop: height * 0.04,
          paddingHorizontal: width * 0.07,
        }}>
        <Image source={Banner} style={{borderRadius: 20, width: '100%'}} />
        <View
          style={{
            width: '100%',
            paddingTop: 20,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
          }}>
          <Card>
            <View>
              <Image source={Img1} />
              <Txt>Buy</Txt>
              <Txt>Properties</Txt>
            </View>
          </Card>
          <Card>
            <View>
              <Image source={Img2} />
              <Txt>Rent</Txt>
              <Txt>Properties</Txt>
            </View>
          </Card>
          <View style={{width: '100%', height: 20}} />
          <Card>
            <Image source={Img3} />
            <Txt>Exchanges</Txt>
          </Card>
          <Card>
            <Image source={Img4} />
            <Txt>International</Txt>
          </Card>
        </View>
      </View>
      <CallUs
        style={{
          right: 0,
          position: 'absolute',
          bottom: height * 0.1,
          display: 'flex',
          flexDirection: 'row',
          paddingLeft: 10,
          elevation: 1,
          // justifyContent:'space-around',
          alignItems: 'center',
        }}>
        <Circle>
          <Icon name={'call'} size={10} color={'#fff'} />
        </Circle>
        <Txt style={{paddingLeft: 5, opacity: 0.5}}>Call Us</Txt>
      </CallUs>
    </View>
  );
};

export default Home;
