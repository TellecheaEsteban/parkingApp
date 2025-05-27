import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

interface LigthDarkModeState {
  isDarkMode: boolean;
}

export default class LigthDarkMode extends Component<{}, LigthDarkModeState> {
  state: LigthDarkModeState = {
    isDarkMode: false
  }

  toggleMode = () => {
    this.setState(prevState => ({
      isDarkMode: !prevState.isDarkMode
    }));
  }

  render() {
    const { isDarkMode } = this.state;
    
    return (
      <View>
        <TouchableOpacity 
          style={[
            styles.button,
            isDarkMode ? styles.darkButton : styles.lightButton
          ]}
          onPress={this.toggleMode}
        >
          <MaterialIcons 
            name={isDarkMode ? "light-mode" : "dark-mode"} 
            size={24} 
            color={isDarkMode ? "white" : "black"}
          />
          <Text style={[
            styles.buttonText,
            isDarkMode ? styles.darkButtonText : styles.lightButtonText
          ]}>
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
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
})
