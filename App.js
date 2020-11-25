import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';

const {height, width} = Dimensions.get('window');

const App = () => {
  const start = async () => {
    RNBootSplash.show();
    await RNBootSplash.hide({duration: 250});
  };

  useEffect(() => {
    start();
  }, []);

  return (
    <ImageBackground
      style={{height, width}}
      source={require('./assets/images/splash/splash.png')}>
      <View style={styles.container}>
        <Text>Real State</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
