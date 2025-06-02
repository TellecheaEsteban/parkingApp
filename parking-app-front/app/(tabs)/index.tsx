import React from 'react';
import { StyleSheet, Image, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import { ThemedView } from '@/components/ThemedView';
import Location from '@/components/Home/Location';
import PickParking from '@/components/Home/PickParking';
import News from '@/components/Home/NewsCopy';
import Help from '@/components/Home/Help';

import { useTheme } from '@/context/themeContext';

export default function HomeScreen() {
  const { theme } = useTheme();
  console.log('Modo actual:', theme);
  return (
    <ThemedView style={styles.container}>
      <Image
        source={theme === 'light'
          ? require('@/assets/images/luggoLightmode.png')
          : require('@/assets/images/luggoDarkmode.png')}
        style={styles.logo}
        resizeMode="contain"
      />
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
  logo: {
    width: width * 0.45,           // 45% del ancho de pantalla
    height: height * 0.09,         // 9% del alto de pantalla
    alignSelf: 'center',
    marginTop: height * 0.07,      // 7% del alto de pantalla
    marginBottom: height * 0.02,   // 2% del alto de pantalla
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