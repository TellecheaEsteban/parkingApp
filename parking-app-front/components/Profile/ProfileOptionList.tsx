import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const styles = StyleSheet.create({
  text: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  container: {
    padding: 20,
    marginHorizontal: 20,
    marginBottom: 20,
    width: "100%",
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    height: 70,
    gap: 10,
    
  },
});

export default class ProfileOptionList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottomColor: "#ffffff",
            borderBottomWidth: 1,
          }}
        >
          <View style={styles.listItem}>
            <Icon name="person" size={24} color="#ffffff"/>
            <Text style={styles.text}>Mi cuenta</Text>
          </View>
          <Icon name="arrow-right" size={24} color="#ffffff" />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottomColor: "#ffffff",
            borderBottomWidth: 1,
          }}
        >
          <View style={styles.listItem}>
            <Icon name="book" size={24} color="#ffffff" />
            <Text style={styles.text}>Reservas</Text>
          </View>
          <Icon name="arrow-right" size={24} color="#ffffff" />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottomColor: "#ffffff",
            borderBottomWidth: 1,
          }}
        >
          <View style={styles.listItem}>
            <Icon name="warning" size={24} color="#ffffff" />
            <Text style={styles.text}>Multas</Text>
          </View>
          <Icon name="arrow-right" size={24} color="#ffffff" />
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottomColor: "#ffffff",
            borderBottomWidth: 1,
          }}
        >
          <View style={styles.listItem}>
            <Icon name="business" size={24} color="#ffffff" style={{ alignSelf: 'center' }} />
            <Text style={styles.text}>Beneficio corporativo</Text>
          </View>
          <Icon name="arrow-right" size={24} color="#ffffff" />
        </View>
      </View>
    );
  }
}
