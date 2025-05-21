import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function ReservasScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Reservas</ThemedText>
      <ThemedText>Administra tus reservas de estacionamiento</ThemedText>
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
