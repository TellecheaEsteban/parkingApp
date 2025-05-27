import React, { Component } from 'react'
import { ThemedText } from '../ThemedText'
import { ThemedView } from '../ThemedView'
import Icon from 'react-native-vector-icons/FontAwesome'
import { View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    name: {
      fontSize: 18,
      fontWeight: '600',
      color: '#ffffff',
      letterSpacing: 1.5,
    },
    email: {
      fontSize: 12,
      color: '#ffffff',
      letterSpacing: 1.2,
    },
    icon: {
      height: 50,
      width: 50,
      borderRadius: 25,
      borderWidth: 1,
      borderColor: '#ffffff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
export default class NameAndEmail extends Component {
  render() {
    return (
      <ThemedView style={{ flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'space-evenly', paddingTop: 20}}>  
      
        <View style={styles.icon}>
          <Icon name="user" size={24} color="#ffffff"/>
        </View>
        <View style={{ flexDirection: 'column', alignItems: 'flex-start'}}>
        <ThemedText style={styles.name}> Esteban Manuel Tellechea </ThemedText>
        <ThemedText style={styles.email}> esteban.tellechea@gmail.com </ThemedText>
        </View>
      </ThemedView>
    )
  }
}
