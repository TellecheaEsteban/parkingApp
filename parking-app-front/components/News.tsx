import React from 'react'
import { ThemedText } from './ThemedText'
import { ThemedView } from './ThemedView'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#949494',
  },
})

function News() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Componente de noticias</ThemedText>
    </ThemedView>
  )
}

export default News