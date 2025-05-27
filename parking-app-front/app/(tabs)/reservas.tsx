import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import ReservationButtons from '@/components/Reservation/ReservationButtons';

export default function ReservasScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Reservas</ThemedText>
      <ReservationButtons />
    </ThemedView>
  );  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 50,
  },
});
