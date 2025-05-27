import { Button } from '@react-navigation/elements'
import React, { Component } from 'react'
import { View } from 'react-native'

export default class ReservationButtons extends Component {
    reservar = () => {
        console.log('Reservar')
    }
  render() {
    return (
      <View >
        <Button variant="filled" color="#ffffff" onPress={this.reservar} >Reservar</Button>
      </View>
    ) 
  }
}
