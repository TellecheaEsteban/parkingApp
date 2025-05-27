import React from 'react'
import { ThemedText } from '../ThemedText'
import { ThemedView } from '../ThemedView'
import { StyleSheet } from 'react-native'
import { Button } from 'react-native'

const styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

function PickParking() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Donde vamos?</ThemedText>
      <ThemedView style={{ flexDirection: 'row', alignItems: 'center'}}>
        <Button title="Seleccionar" onPress={() => {}} />
      </ThemedView>
    </ThemedView>
  )
}

export default PickParking