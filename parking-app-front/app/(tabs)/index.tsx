import React from 'react';
import { StyleSheet } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import Header from '@/components/Header';
import Location from '@/components/Home/Location';
import PickParking from '@/components/Home/PickParking';
import News from '@/components/Home/NewsCopy';
import Help from '@/components/Home/Help';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <Header title="ParkingApp" />
      <ThemedView style={styles.content}>
        <Location />
        <PickParking />
        <News />
        <Help />  
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: '5%',
    alignItems: 'center',
  },
  link: {
    marginTop: '5%',
    padding: '3%',
    backgroundColor: '#A1CEDC',
    borderRadius: 8,
  },
});