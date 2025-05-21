import React from 'react'
import { ThemedText } from './ThemedText'
import { ThemedView } from './ThemedView'
import { StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
    width: '100%',
    backgroundColor: '#949494',
  },
})

function Location() {
  return (
    <ThemedView style={styles.container}>
      <Icon name="map-marker" size={24} color="#ffffff" />
      <ThemedText type="title">Your location</ThemedText>
    </ThemedView>
  )
}

export default Location
