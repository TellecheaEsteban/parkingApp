import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Stack } from 'expo-router'

interface MyAccountProps {
  onGoBack: () => void;
}

export default function MyAccount({ onGoBack }: MyAccountProps) {
  return (
    <View style={{ paddingTop: 50, flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 10 }}>
      <Stack.Screen options={{ title: 'Opciones de Perfil', animation: 'slide_from_right' }} />
      <TouchableOpacity onPress={onGoBack}>
        <Icon name="arrow-back" size={24} color="#ffffff" />
        <Text style={{ color: "#ffffff" }}>Go back</Text>
      </TouchableOpacity>
      <View>
        <Text style={{ color: "#ffffff" }}>Mi cuenta</Text>
      </View>
    </View>
  )
}