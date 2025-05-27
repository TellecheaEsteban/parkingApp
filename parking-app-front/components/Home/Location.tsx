import React from 'react'
import { ThemedText } from '../ThemedText'
import { ThemedView } from '../ThemedView'
import { StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'column',
    gap: 10,
    width: '100%',
  },
})

function Location() {
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={{ flexDirection: 'row', gap: 10,alignItems: 'baseline'}}>
        <Icon name="map-marker" size={24} color="#ffffff" />
        <ThemedText>Ubicacion actual:</ThemedText>
      </ThemedView>
      <ThemedText>Calle 123, Colonia 456, Ciudad 789</ThemedText>
    </ThemedView>
  )
}

export default Location
