import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Link, Stack, useRouter } from "expo-router";

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

interface ProfileOptionListProps {
  onShowMyAccount: () => void;
}

export default function ProfileOptionList() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Mi cuenta'}} />
      <Link href="/profile/MyAccount" push asChild>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottomColor: "#ffffff",
          borderBottomWidth: 1,
          padding: 10,
          borderRadius: 8,
          width: "100%",
        }}
        activeOpacity={0.4}
      >
        <View style={styles.listItem}>
          <Icon name="person" size={24} color="#ffffff" />
          <Text style={styles.text}>Mi cuenta</Text>
        </View>
        <Icon name="arrow-right" size={24} color="#ffffff" />
      </TouchableOpacity>
      </Link>

      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottomColor: "#ffffff",
          borderBottomWidth: 1,
          padding: 10,
          borderRadius: 8,
          width: "100%",
        }}
        activeOpacity={0.4}
        onPress={() => {
          router.push('/(tabs)/reservas');
        }}
      >
        <View style={styles.listItem}>
          <Icon name="book" size={24} color="#ffffff" />
          <Text style={styles.text}>Reservas</Text>
        </View>
        <Icon name="arrow-right" size={24} color="#ffffff" />
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottomColor: "#ffffff",
          borderBottomWidth: 1,
          padding: 10,
          borderRadius: 8,
          width: "100%",
        }}
        activeOpacity={0.4}
        onPress={() => {
          console.log('Multas presionado');
        }}
      >
        <View style={styles.listItem}>
          <Icon name="warning" size={24} color="#ffffff" />
          <Text style={styles.text}>Multas</Text>
        </View>
        <Icon name="arrow-right" size={24} color="#ffffff" />
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottomColor: "#ffffff",
          borderBottomWidth: 1,
          padding: 10,
          borderRadius: 8,
          width: "100%",
        }}
        activeOpacity={0.4}
        onPress={() => {
          console.log('Beneficio corporativo presionado');
        }}
      >
        <View style={styles.listItem}>
          <Icon
            name="business"
            size={24}
            color="#ffffff"
            style={{ alignSelf: "center" }}
          />
          <Text style={styles.text}>Beneficio corporativo</Text>
        </View>
        <Icon name="arrow-right" size={24} color="#ffffff" />
      </TouchableOpacity>
    </View>
  );
}