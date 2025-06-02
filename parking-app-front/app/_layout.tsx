import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { useColorScheme } from '@/hooks/useColorScheme';
import Welcome from '@/components/welcome/Welcome'; // <-- Importa Welcome

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  // Lógica de bienvenida
  const [showWelcome, setShowWelcome] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => setShowWelcome(false), 4000);
    return () => clearTimeout(timeout);
  }, []);

  if (!loaded) {
    return null;
  }

  if (showWelcome) {
    return <Welcome />; // <-- Loader global
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
