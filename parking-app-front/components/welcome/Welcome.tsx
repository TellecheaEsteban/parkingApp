import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

const Welcome = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  return (
    <View style={styles.container}>
      <LottieView
        source={require('../../assets/images/luggo.json')}
        autoPlay
        loop
        style={styles.animation}
        onAnimationFinish={() => setIsLoading(false)}
      />
      {isLoading && (
        <ActivityIndicator size="large" color="#007AFF" style={styles.loader} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fafaf8',
  },
  animation: {
    width: '100%',
    height: '60%',
  },
  loader: {
    position: 'absolute',
    bottom: 80,
    alignSelf: 'center',
  },
});

export default Welcome;