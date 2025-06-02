import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from '@/context/ThemeContext'; // Importa el contexto global

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

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
  },
  lightButton: {
    backgroundColor: '#f0f0f0',
  },
  darkButton: {
    backgroundColor: '#333',
  },
  buttonText: {
    marginLeft: 10,
    fontSize: 16,
  },
  lightButtonText: {
    color: 'black',
  },
  darkButtonText: {
    color: 'white',
  },
});