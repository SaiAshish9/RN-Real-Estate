import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import styled from 'styled-components';
import ImageBg from './components/imageBackground';

const {height, width} = Dimensions.get('window');

const Btn = styled.TouchableOpacity`
  width: 44%;
  height: 100%;
  border-radius: 18px;
  background: #fff;
  align-items: center;
  justify-content: center;
  display: flex;
  color: blue;
`;

const BtnContainer = styled.View`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 7.5%;
  flex-direction: row;
  padding: 0 8%;
  margin-bottom: ${height * 0.1}px;
`;

const App = () => {
  const start = async () => {
    RNBootSplash.show();
    await RNBootSplash.hide({duration: 250});
  };

  useEffect(() => {
    start();
  }, []);

  return (
    <ImageBg path={require("./assets/images/splash/splash.png")}>
      <View style={styles.container}>
        <Text
          style={{
            top: height * 0.15,
            fontSize: 24,
            letterSpacing: 1.6,
            color: '#fff',
            fontWeight: 'bold',
          }}>
          Real State
        </Text>
        <BtnContainer>
          <Btn activeOpacity={0.8}>
            <Text style={{color: '#638dc3', fontWeight: 'bold'}}>ENGLISH</Text>
          </Btn>
          <Btn activeOpacity={0.8}>
            <Text style={{color: '#638dc3', fontWeight: 'bold'}}>عربى</Text>
          </Btn>
        </BtnContainer>
      </View>
    </ImageBg>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default App;
