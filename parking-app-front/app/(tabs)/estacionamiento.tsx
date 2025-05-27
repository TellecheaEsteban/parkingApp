import { StyleSheet } from 'react-native';

import { ThemedView } from '@/components/ThemedView';
import MapView from 'react-native-maps';

export default function EstacionamientoScreen() {
  return (
    <ThemedView style={styles.container}>
      <MapView
        style={styles.map}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});