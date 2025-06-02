import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import LottieView from 'lottie-react-native';

const animationData = require('./luggo.json');



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
    width: '100%',
    height: undefined,
    aspectRatio: 1.2, // Puedes ajustar este valor para que la animación no quede ni muy alta ni muy baja
  },
});

export default Welcome;
