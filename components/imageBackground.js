import React from 'react';
import {View, ImageBackground, Dimensions} from 'react-native';

const ImageBg = ({path, children}) => {
  const {height, width} = Dimensions.get('window');
  return (
    <View
      style={{
        backgroundColor: 'rgba(0,0,0,0.9)',
        width,
        height,
      }}>
      <ImageBackground style={{height, width}} source={path}>
        {children}
      </ImageBackground>
    </View>
  );
};

export default ImageBg;
