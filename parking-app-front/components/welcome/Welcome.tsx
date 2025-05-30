import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import LottieView from 'lottie-react-native';

const animationData = require('./luggo.json');

const { width } = Dimensions.get('window');

const Welcome = () => {
  return (
    <View style={styles.container}>
      <LottieView
        source={animationData}
        autoPlay
        loop
        style={styles.lottie}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fafaf8',
  },
  lottie: {
    width: width * 0.7,
    height: width * 0.7,
  },
});

export default Welcome;
