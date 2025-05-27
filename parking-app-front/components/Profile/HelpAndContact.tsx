import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const styles = StyleSheet.create({
  text: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default class HelpAndContact extends Component {
  render() {
    return (
      <View style={{ flexDirection: "column", alignItems: "flex-start", justifyContent:"flex-start", gap: 10}}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Icon name="help" size={24} color="white" />
          <Text style={styles.text}> Ayuda </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Icon name="phone" size={24} color="white" />
          <Text style={styles.text}> Contacto </Text>
        </View>
      </View>
    );
  }
}
