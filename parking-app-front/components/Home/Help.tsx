import React from 'react'
import { ThemedView } from '../ThemedView'
import { StyleSheet } from 'react-native'
import { ThemedText } from '../ThemedText'
import Icon from 'react-native-vector-icons/FontAwesome'

const styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

function Help() {
  return (
    <ThemedView style={styles.container}>
      <Icon name="question-circle" size={24} color="#ffffff" />
      <ThemedText type="subtitle">Ayuda</ThemedText>
    </ThemedView>
  )
}

export default Help