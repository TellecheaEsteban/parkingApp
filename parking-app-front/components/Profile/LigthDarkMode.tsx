import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from '@/context/themeContext'; // Importa el contexto global

export default function LigthDarkMode() {
  const { theme, toggleTheme } = useTheme(); // Lee el valor global

  return (
    <View>
      <TouchableOpacity
        style={[
          styles.button,
          theme === 'dark' ? styles.darkButton : styles.lightButton
        ]}
        onPress={toggleTheme}
      >
        <MaterialIcons
          name={theme === 'dark' ? "light-mode" : "dark-mode"}
          size={24}
          color={theme === 'dark' ? "white" : "black"}
        />
        <Text style={[
          styles.buttonText,
          theme === 'dark' ? styles.darkButtonText : styles.lightButtonText
        ]}>
          {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: width * 0.025,         // 2.5% del ancho de pantalla
    borderRadius: width * 0.03,     // 3% del ancho de pantalla
  },
  lightButton: {
    backgroundColor: '#f0f0f0',
  },
  darkButton: {
    backgroundColor: '#333',
  },
  buttonText: {
    marginLeft: width * 0.02,       // 2% del ancho de pantalla
    fontSize: width * 0.045,        // 4.5% del ancho de pantalla
  },
  lightButtonText: {
    color: 'black',
  },
  darkButtonText: {
    color: 'white',
  },
});