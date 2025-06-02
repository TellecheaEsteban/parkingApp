import React from 'react';
import { View, ActivityIndicator, StyleSheet, Text } from 'react-native';

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Bienvenido a ParkingApp!</Text>
      <ActivityIndicator size="large" color="#007AFF" style={styles.loader} />
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#333',
  },
  loader: {
    marginTop: 16,
  },
});

export default Welcome;
