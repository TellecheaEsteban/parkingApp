import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

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
    padding: 10,
    paddingTop: 50,
    borderBottomWidth: 1,
    borderColor: '#949494',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#949494',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
