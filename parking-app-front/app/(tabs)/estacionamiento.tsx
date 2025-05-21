import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function EstacionamientoScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Estacionamiento</ThemedText>
      <ThemedText>Encuentra tu lugar de estacionamiento</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
