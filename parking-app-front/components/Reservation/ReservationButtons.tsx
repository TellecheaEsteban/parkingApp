import { Button } from '@react-navigation/elements'
import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class ReservationButtons extends Component {
    reservar = () => {
        console.log('Reservar')
    }
  render() {
    return (
      <View style={{ gap: 10 }}>
        <Button style={{ width: 350, height: 50, borderRadius: 10 }} variant="filled" color="#ffffff" onPress={this.reservar} >
          Reservas Actuales</Button>
        <Button style={{ width: 350, height: 50, borderRadius: 10 }} variant="filled" color="#ffffff" onPress={this.reservar} >
          Historial de reservas</Button>
      </View>
    ) 
  }
}
