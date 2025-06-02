import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import {Colors} from '@/constants/Colors';
interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.title}>
        {title}
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: width * 0.04,         // 4% del ancho
    paddingTop: height * 0.07,    // 7% del alto de pantalla (mejor para statusbar/notch)
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.dark.primary,
  },
  title: {
    fontSize: width * 0.06,       // 6% del ancho (aprox 24 en móviles comunes)
    fontWeight: 'bold',
  },
});
