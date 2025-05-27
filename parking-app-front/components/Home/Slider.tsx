import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { SliderData } from '@/data/SliderData'
import SliderItem from './SliderItem'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slider: {
    flexGrow: 1,
  },
})

export default function Slider() {
  return (
    <View style={styles.container}>
      <FlatList
        data={SliderData}
        renderItem={({ item, index }) => (
          <SliderItem item={item} index={index} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        contentContainerStyle={styles.slider}
        style={{ flexGrow: 1 }}
      />
    </View>
  )
}