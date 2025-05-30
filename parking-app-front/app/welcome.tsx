import React, { useEffect } from 'react';
import { useRouter } from 'expo-router';
import LottieView from 'expo-lottie';
import Welcome from '@/components/welcome/Welcome';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

export default function WelcomeScreen() {
  const router = useRouter();

  useEffect(() => {
    // Espera 2 segundos y navega al home
    const timeout = setTimeout(() => {
      router.replace('/(tabs)');
    }, 2000);
    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <View style={styles.container}>
      <Welcome />
      <ActivityIndicator size="large" color="#007AFF" style={styles.loader} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  loader: { position: 'absolute', bottom: 40 },
});
