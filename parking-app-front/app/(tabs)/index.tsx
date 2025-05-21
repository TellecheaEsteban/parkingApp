import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Header from '@/components/Header';
import Location from '@/components/Location';
import PickParking from '@/components/PickParking';
import News from '@/components/News';
import Help from '@/components/Help';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <Header title="Logo - ParkingApp" />
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
    padding: 20,
    alignItems: 'center',
  },
  link: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#A1CEDC',
    borderRadius: 8,
  },
});
