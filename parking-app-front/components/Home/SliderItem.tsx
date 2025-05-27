import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { ImageSliderType } from '@/data/SliderData'
import { LinearGradient } from 'expo-linear-gradient';

type Props = {
    item: ImageSliderType;
    index: number;
}
const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 300,
        borderRadius: 20,
        overflow: 'hidden',
        position: 'relative',
        marginHorizontal: 20,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 20,
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        borderRadius: 20,
    },
    content: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: '#fff',
        letterSpacing: 1.5,
    },
    description: {
        fontSize: 12,
        color: '#fff',
        letterSpacing: 1.2,
    },
})

const SliderItem = (props: Props) => {
  return (
    <View style={styles.container}>
      <Image source={props.item.image} style={styles.image} />
      <LinearGradient colors={['transparent', 'rgba(0,0,0,0.8)']} style={styles.overlay} />
      <View style={styles.content}>
        <Text style={styles.title}>{props.item.title}</Text>
        <Text style={styles.description}>{props.item.description}</Text>
      </View>
    </View>
  )
}

export default SliderItem